const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/"
  )
  .then(console.log("Database is connected"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

const router = express.Router();

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter name"],
    minLength: [3, "Name is not allowed"],
    maxLength: [20, "Name is tooooooooo lengthy"],
  },
  password: {
    type: String,
    select: false,
    minLength: [5, "Password can not be less than 5"],
  }, // password won't be fetched
  age: {
    type: Number,
    min: [3, "Person is not allowed under the age of three"],
  },
  city: String,
  balance: {
    type: Number,
    default: 0,
  },
  role: { type: String, enum: ["ADMIN", "USER"], default: "USER" },
});
// PersonSchema.pre("save", async() => {
//   let passwordEncreption = await bcrypt.hash(this.password, 2)
//   this.password = passwordEncreption
//   console.log(passwordEncreption)
// });
// PersonSchema.post("save", () => {
//   console.log(this);
//   console.log("after::: do some operations");
// });

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: [true, "please enter movie name"] },
  movieLength: {
    type: Number,
    min: [20, "movie under 20 min not allowed"],
    max: [180, "movie can't be greater than 180 mins"],
  },
  minAge: {
    type: Number,
    min: [3, "Movie not allowed because the minimum age is 3  "],
  },
  maxAge: {
    type: Number,
    max: [90, "Movie not allowed because the max age is 90"],
  },
  category: String,
});

const PersonModel = mongoose.model("Person", PersonSchema);
const MovieModel = mongoose.model("Movie", MovieSchema);
const verifyPerson = async (req, res, next) => {
  const { userId } = req.body;
  try {
    const personFound = await PersonModel.findById(userId);
    if (personFound) {
      if (personFound.role === "ADMIN") {
        req.person = personFound;
        return next();
      } else {
        res.status(401).json({
          success: false,
          message: "Unauthorized Access",
        });
      }
    } else {
      res.status(404).json({
        message: "Person Not Found",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Person Not Found",
    });
  }
};

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

router.get("/findperson", async (req, res) => {
  // login
  // const person = await PersonModel.find().select("+password");
  const person = await PersonModel.find();

  res.json(person);
});

router.get("/findmovie", async (req, res) => {
  const movie = await MovieModel.find();
  res.json(movie);
});
router.post("/createperson", async (req, res) => {
  const  { name,role  } = req.body;
  const peopleCreated = await PersonModel.create({name:name,role:role});
  res.json(peopleCreated);
});
router.post("/createmovie", verifyPerson, async (req, res) => {
  const { name,category } = req.body;
  const moviesCreated = await MovieModel.create({name:name,category:category});
  res.json(moviesCreated);
});

router.post("/movie/recommend", async (req, res) => {
  // res.json({
  //   message: " I am second",
  //   person: req.person,
  // });

  const movies = await MovieModel.find({
    movieLength: { $gte: 60 },
  });
  res.json({
    movies,
    message: "we will  recommend you soon",
  });
});

router.post("/movie/lessThan", async (req, res) => {
  const { movieLength } = req.body;
  console.log(req.body);
  const moviesCreated = await MovieModel.find({
    movieLength: { $gte: movieLength },
  });
  res.json(moviesCreated);
});

router.delete("/person/many", async (req, res) => {
  const deleted = await PersonModel.deleteMany({});
  res.json(deleted);
});

router.delete("/movie/many", async (req, res) => {
  const deleted = await MovieModel.deleteMany({});
  res.json(deleted);
});

router.post("/person", async (req, res) => {
  const { name, age, city, role, balance, password } = req.body;
  if (!name || !age || !city || !role || !password) {
    res.status(401).json({
      success: false,
      message: "Please enter complete data",
    });
    return;
  } else {
    try {
      const personCreated = new PersonModel({
        name: name,
        age: age,
        city: city,
        balance: balance,
        role: role,
        password: password,
      });
      personCreated.save();
      res.json(personCreated);
    } catch (err) {
      res.status(201).json({
        success: false,
        message: "Error in Validation",
        error: err,
      });
    }
  }
});

router.post("/movie", verifyPerson, async (req, res) => {
  const { minAge, maxAge, category } = req.body;
  const movieCreated = new MovieModel({
    minAge: minAge,
    maxAge: maxAge,
    category: category,
  });
  movieCreated.save();
  res.json(movieCreated);
});

router.patch("/person/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, city } = req.body;
  const personUpdated = await PersonModel.findOneAndUpdate(
    { id: id },
    { name: name, age: age, city: city }
  );
  res.json(personUpdated);
});

router.patch("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const { minAge, maxAge, category } = req.body;

  const movieUpdated = await MovieModel.findOneAndUpdate(
    { id: id },
    { minAge: minAge, maxAge: maxAge, category: category }
  );
  res.json(movieUpdated);
});

router.delete("/person/:id", async (req, res) => {
  const { id } = req.params;
  const personDeleted = await PersonModel.findOneAndDelete({ id: id });
  res.json(personDeleted);
});

router.delete("/movie/:id", async (req, res) => {
  const { id } = req.params;
  const movieDeleted = await MovieModel.findOneAndDelete({ id: id });
  res.json(movieDeleted);
});

app.use(router);

app.listen(port, () => {
  console.log("Server is started");
});

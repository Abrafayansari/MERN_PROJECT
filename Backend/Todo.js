import express from "express";
import mongoose from "mongoose";
import cors from "cors"
const app = express();
const router = express.Router();
app.use(express.json());

app.use(cors())
async function connect() {
  await mongoose.connect("mongodb://localhost:27017/Todo-db");
}
connect()
  .then(() => console.log("connected to database"))
  .catch(() => console.log("Error in connecting database"));

const todoschema = mongoose.Schema({
  text: String,
  status: Boolean,
});
const todoModel = mongoose.model("todo", todoschema);

router.post("/create", async (req, res) => {
  const { text, status } = req.body;
  const created = await todoModel({ text: text, status: status });
  res.json(created);
});
router.get("/read", async (req, res) => {
  const readed = await todoModel.find();
  res.json(readed);
});

router.get("/delete", async (req, res) => {
  const del = await todoModel.findOneAndDelete({ text: "pray namaz" });
  res.json(del);
});
router.patch("/update", async (req, res) => {
  const {id,status}=req.body
  const updated = await todoModel.findById(id);
  if (updated) {
    updated.status=status
    updated.save()
    res.json(updated)
  }
  else{
    res.status(404).json({
      message:"not found"
    })
  }
});

router.post("/read/:status", async (req, res) => {
  let { status } = req.params;
  status == "completed" ? (status = true) : (status = false);
  const getter = await todoModel.find({ status });

  if (status) {
    res.json({
      sucess: true,
      getter,
    });
    return;
  }
  res.json({
    sucess: false,
    getter,
  });
});
app.use(router);

app.listen(4000);

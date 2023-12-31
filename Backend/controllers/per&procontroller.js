const CatchAsyncError = require("../Middleware/CatchAsyncError");
const customError = require("../Middleware/customError");
const {
  createperson,
  deleteperson,
  findperson,
  updateperson,createproduct,deleteproduct,findproduct,updateproduct
} = require("../services/per&pro");

exports.createperson = CatchAsyncError(async (req, res) => {
  const { name, email, role } = req.body;
  const createdperson = await createperson(name, email, role);
  res.json(createdperson);
})
exports.findperson = CatchAsyncError(async (req, res) => {
  const found = await findperson();
  res.json(found);
})
exports.deleteperson = CatchAsyncError(async (req, res) => {
  const { name } = req.body;
  const del = await deleteperson(name);
  res.json(del);
})
exports.updateperson = CatchAsyncError(async (req, res) => {
  const { id,name, email } = req.body;
  const updatedperson = await updateperson(id,name, email);
  if (updatedperson) {
    updatedperson.name = name ,
    updatedperson.email = email;
  } else {
    throw new customError("not found", 404);
  }
})



//===================product========================

exports.createproduct = CatchAsyncError(async (req, res) => {
    const { name,id,available,price,category } = req.body;
    const createdproduct = await createproduct(name,id,available,price,category);
    res.json(createdproduct);
  })
  exports.findproduct = CatchAsyncError(async (req, res) => {
    const found = await findproduct();
    res.json(found);
  })
  exports.deleteproduct =CatchAsyncError( async (req, res) => {
    const { id } = req.body;
    const del = await deleteproduct(id);
    res.json(del);
  })
  exports.updateproduct  = CatchAsyncError(async (req, res) => {
    const { available, price } = req.body;
    const updatedproduct = await updateproduct(id);
    if (updatedproduct) {
        updatedproduct.available = available,
        updatedproduct.price = price;
    } else {
      throw new customError("not found", 404);
    }
  })
  
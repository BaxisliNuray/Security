const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require("cors");
const bodyParser = require("body-parser");
dotenv.config()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
const mongoose = require("mongoose");



DB_CONNECTION = process.env.DB_CONNECTION
DB_PASSWORD = process.env.DB_PASSWORD
mongoose.connect(DB_CONNECTION.replace("<password>", DB_PASSWORD))
  

const SecuritySchema = new mongoose.Schema({
  title: String,
  desc: String,
  img: String,
  likeCount: Number,
  commentCount: Number
});
const SecurityModel = mongoose.model("security", SecuritySchema);


// get all employees
app.get('/security', async (req, res) => {
  const { title } = req.query
  const security = await SecurityModel.find()
  if (title === undefined) {
    res.status(200).send(security)
  }
  else {
    const employees = lem.filter((x) => x.title.toLowerCase().trim().includes(title.toLowerCase().trim()))
    res.status(200).send(employees)
  }
})
//get employee by id
app.get("/security/:id", async (req, res) => {
  const id = req.params.id;
  const security = await SecurityModel.findById(id);
  if (!security) {
    res.status(204).send("author not found!");
  } else {
    res.status(200).send(sec);
  }
});

//delete
app.get('/security/:id', (req, res) => {
  const id = req.params.id
  const sindleEmployee = emp.find((data) => data.id == id)
  if (sindleEmployee === undefined) {
    res.status(404).send("yene bir error")
    return
  }
  else {
    const idx = emp.indexOf(sindleEmployee)
    emp.splice(idx, 1)
    res.status(200).send("employee deleted")
    return
  }
})

//post
app.post("/security", async (req, res) => {
  const { title, desc, likeCount, commentCount,img } = req.body;
  const newSecurity = new SecurityModel({
    title: title,
    desc: desc,
    img:img,
    likeCount: likeCount,
    commentCount: commentCount
  });
  await newSecurity.save();
  res.status(201).send("created");
});
//put
app.put("/security/:id", async (req, res) => {
  const id = req.params.id;
  const { title, desc, likeCount, commentCount,img } = req.body;
  const existedSec = await SecurityModel.findByIdAndUpdate(id, {
    title: title,
    desc: desc,
    img:img,
    likeCount: likeCount,
    commentCount: commentCount
  });
  if (existedSec == undefined) {
    res.status(404).send("sec not found!");
  } else {
    res.status(200).send(`${title} updated successfully!`);
  }
});



const PORT =8080
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
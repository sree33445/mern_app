const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const UserSchema = require("./model/userModel");
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  UserSchema.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserSchema.findById({ id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});



app.post("/createTask", (req, res) => {
  UserSchema.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

mongoose.connect(
  "mongodb+srv://sreerajs:sreerajs@cluster0.feuq4z3.mongodb.net/test24?retryWrites=true&w=majority&appName=Cluster0"
);

app.listen(PORT, () => {
  console.log("Server is running on port:" + PORT);
});

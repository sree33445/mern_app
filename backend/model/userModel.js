const mongoose = require('mongoose')
const schema = mongoose.Schema
const UserSchema = new schema({
    name:String,
    email:String,
    age:Number,
    task:String
})

module.exports = mongoose.model("task",UserSchema);
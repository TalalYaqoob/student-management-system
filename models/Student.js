const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
 name:String,
 course:String,
 fees:Boolean
})

module.exports = mongoose.model("Student", studentSchema)
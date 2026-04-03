const Student = require("../models/Student")

exports.getStudents = async (req, res) => {
  const students = await Student.find()
  res.json(students)
}

exports.createStudent = async (req, res) => {
  await Student.create(req.body)
  res.redirect("/")  // ✅ redirect instead of res.json
}

exports.updateStudent = async (req, res) => {
  await Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )
  res.redirect("/")  // ✅ redirect instead of res.json
}

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id)
  res.redirect("/")  // ✅ redirect instead of res.send
}
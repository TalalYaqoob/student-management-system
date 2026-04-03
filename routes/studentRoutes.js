const express = require("express")
const router = express.Router()

const {
 getStudents,
 createStudent,
 updateStudent,
 deleteStudent
} = require("../controllers/studentController")

router.get("/students", getStudents)

router.post("/students", createStudent)

router.put("/students/:id", updateStudent)

router.delete("/students/:id", deleteStudent)

module.exports = router
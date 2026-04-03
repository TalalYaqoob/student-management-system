require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const methodOverride = require("method-override")
const Student = require("./models/Student")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(methodOverride("_method"))
app.set("view engine", "ejs")

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas Connected!"))
  .catch(err => console.log(err))

const studentRoutes = require("./routes/studentRoutes")
app.use("/api", studentRoutes)

app.get("/", async (req, res) => {
  const students = await Student.find()
  res.render("index", { students })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
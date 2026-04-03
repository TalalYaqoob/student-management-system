require("dotenv").config()
```

**5. Make sure `.gitignore` has `.env`:**
```
node_modules
.env

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const methodOverride = require("method-override")  // ✅ moved to top
const Student = require("./models/Student")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(methodOverride("_method"))  // ✅ moved before routes
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

app.listen(5000, () => {
  console.log("Server running on port 5000")
})
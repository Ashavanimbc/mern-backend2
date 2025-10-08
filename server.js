const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://ASHAVANI:5HAcgdLm4qHJGCKf@demo.xkghock.mongodb.net/college");

// Define User schema
const UserSchema = new mongoose.Schema({
  EMPLOYEE_ID: {
    type: Number,
    required: true,
    unique: true
  },
  FIRST_NAME: {
    type: String,
    required: true,
    trim: true
  },
  LAST_NAME: {
    type: String,
    required: true,
    trim: true
  },
  EMAIL: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true
  },
  PHONE_NUMBER: {
    type: String,
    trim: true
  },
  HIRE_DATE: {
    type: Date,
    required: true
  },
  JOB_ID: {
    type: String,
    required: true,
    trim: true
  },
  SALARY: {
    type: Number,
    required: true
  },
  COMMISSION_PCT: {
    type: String,
    default: "-"
  },
  MANAGER_ID: {
    type: Number
  },
  DEPARTMENT_ID: {
    type: Number
  }
}, { timestamps: true });


const User = mongoose.model("User", UserSchema);

// Routes
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post("/postusers", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

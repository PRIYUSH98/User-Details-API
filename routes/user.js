const express = require("express");
const app = express.Router();
const userService = require("../services/userService")
const { body, validationResult } = require('express-validator');

//API to create a user
app.post("/user",[
  // Validate and sanitize the request body fields
  body('firstName').trim().notEmpty().isLength({ min: 2, max: 20 }),
  body('lastName').trim().notEmpty().isLength({ min: 2, max: 20 }),
  body('email').trim().notEmpty().isEmail(),
], async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = req.body;
    const response = await userService.create(user);
    res.send(response);
  } catch (err) {
      next(err);
  }
});

//API to get user details
app.get("/users", async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = app;

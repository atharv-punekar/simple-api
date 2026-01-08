const express = require("express");
const router = express.Router();

const {
  healthCheck,
  getUsers,
  getUserById,
  createUser
} = require("../controllers/userController");

router.get("/health", healthCheck);
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

module.exports = router;


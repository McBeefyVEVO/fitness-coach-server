import express from "express";
import {Request, Response} from "express";
const router = express.Router();

import * as userController from "../controllers/user";

router.get("/", userController.getAllUsers)
router.get("/:id", userController.getUserById)
router.post("/", userController.createUser)
router.put("/:id", userController.updateUser)
router.delete("/:id", userController.deleteUser)


module.exports = router;
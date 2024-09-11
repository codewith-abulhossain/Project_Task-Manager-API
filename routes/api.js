import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskController.js";
import * as UserController from "../app/controllers/UserController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";

// User
router.post("/Registration", UserController.Registration);
router.post("/Login", UserController.Login);
router.get("/ProfileDetails", AuthMiddleware, UserController.ProfileDetails);
router.post("/profileUpdate", AuthMiddleware, UserController.profileUpdate);
router.post("/EmailVerify", UserController.EmailVerify);
router.post("/Codeverify", UserController.Codeverify);
router.post("/ResetPassword", UserController.ResetPassword);

// Task
router.post("/CreateTask", TaskController.CreateTask);
router.get("/UpdateTaskStatus", TaskController.UpdateTaskStatus);
router.get("/taskListByStatus", TaskController.taskListByStatus);
router.get("/DeleteTask", TaskController.DeleteTask);
router.get("/CountTask", TaskController.CountTask);

export default router;

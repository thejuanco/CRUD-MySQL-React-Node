import { Router } from "express";
import {
  getTask,
  deleteTask,
  updateTask,
  getTasks,
  createTask,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);
router.put("/tasks/:id", updateTask);
router.delete("/tasks/:id", deleteTask);

export default router;

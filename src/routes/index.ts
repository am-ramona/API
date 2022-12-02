import { Router } from "express"
import { getTodos, createTodo, updateTodo, deleteTodo } from "../controllers/todos"

const router: Router = Router()

router.get("/listTodos", getTodos)

router.post("/createTodo", createTodo)

// router.put("/edit-todo/:id", updateTodo)

router.put("/markTodoCompleted/:id", updateTodo)

router.put("/markTodoUncompleted/:id", updateTodo)

router.delete("/deleteTodo/:id", deleteTodo)

export default router
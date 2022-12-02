"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const router = (0, express_1.Router)();
router.get("/listTodos", todos_1.getTodos);
router.post("/createTodo", todos_1.createTodo);
// router.put("/edit-todo/:id", updateTodo)
router.put("/markTodoCompleted/:id", todos_1.updateTodo);
router.put("/markTodoUncompleted/:id", todos_1.updateTodo);
router.delete("/deleteTodo/:id", todos_1.deleteTodo);
exports.default = router;

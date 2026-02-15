const express = require('express');
const router = express.Router();
const TaskModel = require('../models/task');
const validation = require('../utils/validation');

/**
 * GET /api/tasks
 * Get all tasks
 */
router.get('/', (req, res) => {
  const tasks = TaskModel.getAll();
  
  if (tasks.length === 0) {
    return res.json({
      count: 0,
      tasks: [],
      message: 'No tasks found. Create your first task!'
    });
  }
  
  res.json({
    count: tasks.length,
    tasks: tasks
  });
});

/**
 * GET /api/tasks/:id
 * Get a single task by ID
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const task = TaskModel.getById(id);
  
  if (!task) {
    return res.status(404).json({
      error: 'Task not found',
      id: id
    });
  }
  
  res.json(task);
});

/**
 * POST /api/tasks
 * Create a new task
 */
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  // Validate input
  const { isValid, errors } = validation.validateCreateTask({ title, description });
  
  if (!isValid) {
    return res.status(400).json({
      error: 'Validation failed',
      details: errors
    });
  }

  const task = TaskModel.create({ title: title.trim(), description });
  
  res.status(201).json(task);
});

module.exports = router;

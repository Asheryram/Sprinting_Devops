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

/**
 * PUT /api/tasks/:id
 * Update a task
 */
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  
  // Check if task exists
  const existingTask = TaskModel.getById(id);
  if (!existingTask) {
    return res.status(404).json({
      error: 'Task not found',
      id: id
    });
  }
  
  // Validate status if provided
  const validStatuses = ['pending', 'in-progress', 'completed'];
  if (status && !validStatuses.includes(status)) {
    return res.status(400).json({
      error: 'Invalid status',
      validStatuses: validStatuses
    });
  }
  
  const updatedTask = TaskModel.update(id, { title, description, status });
  
  res.json(updatedTask);
});

/**
 * DELETE /api/tasks/:id
 * Delete a task
 */
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  // Check if task exists
  const existingTask = TaskModel.getById(id);
  if (!existingTask) {
    return res.status(404).json({
      error: 'Task not found',
      id: id
    });
  }
  
  TaskModel.delete(id);
  
  res.json({
    message: 'Task deleted successfully',
    id: id
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const TaskModel = require('../models/task');

/**
 * POST /api/tasks
 * Create a new task
 */
router.post('/', (req, res) => {
  const { title, description } = req.body;
  
  // Basic validation
  if (!title) {
    return res.status(400).json({
      error: 'Title is required'
    });
  }

  const task = TaskModel.create({ title, description });
  
  res.status(201).json(task);
});

module.exports = router;

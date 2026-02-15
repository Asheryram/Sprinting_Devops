const express = require('express');
const router = express.Router();
const TaskModel = require('../models/task');
const validation = require('../utils/validation');

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

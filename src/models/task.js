const { v4: uuidv4 } = require('uuid');

// In-memory data store
const tasks = [];

/**
 * Task Model
 * Manages task data operations
 */
const TaskModel = {
  // Get all tasks
  getAll: () => {
    return [...tasks];
  },

  // Get task by ID
  getById: (id) => {
    return tasks.find(task => task.id === id);
  },

  // Create a new task
  create: (data) => {
    const task = {
      id: uuidv4(),
      title: data.title,
      description: data.description || '',
      status: 'pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    tasks.push(task);
    return task;
  },

  // Clear all tasks (for testing)
  clearAll: () => {
    tasks.length = 0;
  }
};

module.exports = TaskModel;

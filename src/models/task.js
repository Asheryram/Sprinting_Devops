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

  // Update a task
  update: (id, data) => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex === -1) {
      return null;
    }
    
    const existingTask = tasks[taskIndex];
    const updatedTask = {
      ...existingTask,
      title: data.title !== undefined ? data.title : existingTask.title,
      description: data.description !== undefined ? data.description : existingTask.description,
      status: data.status !== undefined ? data.status : existingTask.status,
      updatedAt: new Date().toISOString()
    };
    
    tasks[taskIndex] = updatedTask;
    return updatedTask;
  },

  // Clear all tasks (for testing)
  clearAll: () => {
    tasks.length = 0;
  }
};

module.exports = TaskModel;

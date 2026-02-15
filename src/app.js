const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const healthRoutes = require('./routes/health');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);
app.use('/api/health', healthRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Task Manager API',
    version: '1.0.0'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

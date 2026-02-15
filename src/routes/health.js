const express = require('express');
const router = express.Router();

// Track server start time for uptime calculation
const startTime = Date.now();

/**
 * GET /api/health
 * Health check endpoint
 */
router.get('/', (req, res) => {
  const uptime = Math.floor((Date.now() - startTime) / 1000);
  
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: `${uptime} seconds`,
    version: '1.0.0'
  });
});

module.exports = router;

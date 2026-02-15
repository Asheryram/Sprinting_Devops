const { ApiError, notFoundHandler, errorHandler } = require('../src/middleware/errorHandler');

describe('Error Handler Middleware', () => {
  describe('ApiError', () => {
    test('should create error with status code and message', () => {
      const error = new ApiError(400, 'Bad Request');
      
      expect(error.statusCode).toBe(400);
      expect(error.message).toBe('Bad Request');
      expect(error.isOperational).toBe(true);
    });

    test('should be instance of Error', () => {
      const error = new ApiError(500, 'Server Error');
      
      expect(error).toBeInstanceOf(Error);
    });
  });

  describe('notFoundHandler', () => {
    test('should create 404 error', () => {
      const mockReq = { originalUrl: '/api/nonexistent' };
      const mockRes = {};
      const mockNext = jest.fn();

      notFoundHandler(mockReq, mockRes, mockNext);

      expect(mockNext).toHaveBeenCalled();
      const error = mockNext.mock.calls[0][0];
      expect(error.statusCode).toBe(404);
      expect(error.message).toContain('/api/nonexistent');
    });
  });

  describe('errorHandler', () => {
    test('should return proper error response', () => {
      const mockError = new ApiError(400, 'Validation failed');
      const mockReq = { originalUrl: '/api/tasks' };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockNext = jest.fn();

      // Suppress console.error during test
      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      errorHandler(mockError, mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(400);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Validation failed',
          statusCode: 400,
          path: '/api/tasks'
        })
      );

      consoleSpy.mockRestore();
    });

    test('should hide internal error details', () => {
      const mockError = new Error('Database connection failed');
      const mockReq = { originalUrl: '/api/tasks' };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };
      const mockNext = jest.fn();

      const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
      
      errorHandler(mockError, mockReq, mockRes, mockNext);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.json).toHaveBeenCalledWith(
        expect.objectContaining({
          error: 'Internal Server Error',
          statusCode: 500
        })
      );

      consoleSpy.mockRestore();
    });
  });
});

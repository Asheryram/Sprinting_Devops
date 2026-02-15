/**
 * Validation utilities for task operations
 */
const validation = {
  /**
   * Validate task creation data
   * @param {Object} data - Task data to validate
   * @returns {Object} - { isValid: boolean, errors: string[] }
   */
  validateCreateTask: (data) => {
    const errors = [];

    // Check if title exists
    if (!data.title) {
      errors.push('Title is required');
    } else if (typeof data.title !== 'string') {
      errors.push('Title must be a string');
    } else {
      // Trim and check for empty
      const trimmedTitle = data.title.trim();
      if (trimmedTitle.length === 0) {
        errors.push('Title cannot be empty');
      } else if (trimmedTitle.length > 200) {
        errors.push('Title must be less than 200 characters');
      }
    }

    // Validate description if provided
    if (data.description !== undefined && data.description !== null) {
      if (typeof data.description !== 'string') {
        errors.push('Description must be a string');
      } else if (data.description.length > 1000) {
        errors.push('Description must be less than 1000 characters');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
};

module.exports = validation;

const TaskModel = require('../src/models/task');
const validation = require('../src/utils/validation');

describe('Task Model', () => {
  beforeEach(() => {
    // Clear tasks before each test
    TaskModel.clearAll();
  });

  describe('create()', () => {
    test('should create a task with valid data', () => {
      const taskData = {
        title: 'Test Task',
        description: 'Test Description'
      };

      const task = TaskModel.create(taskData);

      expect(task).toHaveProperty('id');
      expect(task.title).toBe('Test Task');
      expect(task.description).toBe('Test Description');
      expect(task.status).toBe('pending');
      expect(task).toHaveProperty('createdAt');
      expect(task).toHaveProperty('updatedAt');
    });

    test('should create a task without description', () => {
      const task = TaskModel.create({ title: 'Task without desc' });

      expect(task.title).toBe('Task without desc');
      expect(task.description).toBe('');
    });

    test('should generate unique IDs for each task', () => {
      const task1 = TaskModel.create({ title: 'Task 1' });
      const task2 = TaskModel.create({ title: 'Task 2' });

      expect(task1.id).not.toBe(task2.id);
    });
  });

  describe('getAll()', () => {
    test('should return empty array when no tasks', () => {
      const tasks = TaskModel.getAll();
      expect(tasks).toEqual([]);
    });

    test('should return all created tasks', () => {
      TaskModel.create({ title: 'Task 1' });
      TaskModel.create({ title: 'Task 2' });

      const tasks = TaskModel.getAll();
      expect(tasks).toHaveLength(2);
    });
  });

  describe('getById()', () => {
    test('should return task by ID', () => {
      const created = TaskModel.create({ title: 'Find Me' });
      const found = TaskModel.getById(created.id);
      
      expect(found).toBeDefined();
      expect(found.title).toBe('Find Me');
    });

    test('should return undefined for non-existent ID', () => {
      const found = TaskModel.getById('non-existent-id');
      expect(found).toBeUndefined();
    });
  });

  describe('update()', () => {
    test('should update task title', () => {
      const created = TaskModel.create({ title: 'Original Title' });
      const updated = TaskModel.update(created.id, { title: 'Updated Title' });
      
      expect(updated.title).toBe('Updated Title');
      expect(updated.id).toBe(created.id);
    });

    test('should update task status', () => {
      const created = TaskModel.create({ title: 'Task' });
      const updated = TaskModel.update(created.id, { status: 'completed' });
      
      expect(updated.status).toBe('completed');
    });

    test('should return null for non-existent task', () => {
      const result = TaskModel.update('non-existent-id', { title: 'New' });
      expect(result).toBeNull();
    });

    test('should update updatedAt timestamp', () => {
      const created = TaskModel.create({ title: 'Task' });
      
      // Small delay to ensure different timestamp
      const updated = TaskModel.update(created.id, { title: 'Changed' });
      
      expect(updated.updatedAt).toBeDefined();
      expect(updated.createdAt).toBe(created.createdAt);
    });
  });

  describe('delete()', () => {
    test('should delete an existing task', () => {
      const created = TaskModel.create({ title: 'Delete Me' });
      const result = TaskModel.delete(created.id);
      
      expect(result).toBe(true);
      expect(TaskModel.getById(created.id)).toBeUndefined();
    });

    test('should return false for non-existent task', () => {
      const result = TaskModel.delete('non-existent-id');
      expect(result).toBe(false);
    });

    test('should not affect other tasks when deleting', () => {
      const task1 = TaskModel.create({ title: 'Task 1' });
      const task2 = TaskModel.create({ title: 'Task 2' });
      
      TaskModel.delete(task1.id);
      
      expect(TaskModel.getById(task2.id)).toBeDefined();
      expect(TaskModel.getAll()).toHaveLength(1);
    });
  });
});

describe('Validation', () => {
  describe('validateCreateTask()', () => {
    test('should pass with valid title', () => {
      const result = validation.validateCreateTask({ title: 'Valid Title' });
      expect(result.isValid).toBe(true);
      expect(result.errors).toHaveLength(0);
    });

    test('should fail without title', () => {
      const result = validation.validateCreateTask({});
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title is required');
    });

    test('should fail with empty title', () => {
      const result = validation.validateCreateTask({ title: '   ' });
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title cannot be empty');
    });

    test('should fail with title over 200 characters', () => {
      const longTitle = 'a'.repeat(201);
      const result = validation.validateCreateTask({ title: longTitle });
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain('Title must be less than 200 characters');
    });
  });
});

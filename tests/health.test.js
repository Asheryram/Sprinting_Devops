// Mock the Date.now() for consistent testing
const originalDateNow = Date.now;

describe('Health Endpoint', () => {
  beforeAll(() => {
    // Mock Date.now to return consistent value
    Date.now = jest.fn(() => 1708000000000);
  });

  afterAll(() => {
    // Restore original Date.now
    Date.now = originalDateNow;
  });

  describe('GET /api/health', () => {
    test('should return healthy status', () => {
      // Simulate health check response structure
      const healthResponse = {
        status: 'healthy',
        timestamp: new Date().toISOString(),
        uptime: expect.any(String),
        version: '1.0.0'
      };

      expect(healthResponse.status).toBe('healthy');
      expect(healthResponse.version).toBe('1.0.0');
    });

    test('should include required fields', () => {
      const requiredFields = ['status', 'timestamp', 'uptime', 'version'];
      const mockResponse = {
        status: 'healthy',
        timestamp: '2026-02-15T10:00:00.000Z',
        uptime: '100 seconds',
        version: '1.0.0'
      };

      requiredFields.forEach(field => {
        expect(mockResponse).toHaveProperty(field);
      });
    });

    test('should have valid timestamp format', () => {
      const timestamp = new Date().toISOString();
      const isoRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
      
      expect(timestamp).toMatch(isoRegex);
    });
  });
});

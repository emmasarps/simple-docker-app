const app = require('../server'); // ✅ Import Express app
const request = require('supertest');

describe('GET /', () => {
  it('should return "Hello, Docker + MongoDB! 🚀"', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Hello, Docker + MongoDB! 🚀');
  });
});


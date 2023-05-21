const axios = require('axios');
const url = 'http://localhost:3001/';

describe('Health Check API', () => {
  test('GET /healthcheck should return status 200 and success message', async () => {
    const response = await axios.get(url+"healthcheck")
    expect(response.status).toBe(200);
    expect(response.data).toEqual({ status: 'success' });
  })
})

describe('GET /users', () => {
  test('should return list of users', async () => {
    const response = await axios.get(url+"users")
    expect(response && response.data && typeof response.data=="array")
    expect(response.status).toBe(200);
  })
})
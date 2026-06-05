import { expect, test } from '@playwright/test';
import { authUsers } from '../../src/data/auth-test-data';

const MAX_RESPONSE_TIME_MS = 600;

test.describe('Authentication API - Non-functional smoke', () => {
  test('NF-AUTH-01 register should respond within the accepted threshold', async ({ request, baseURL }) => {
    const start = Date.now();
    const response = await request.post(`${baseURL}/register`, {
      data: authUsers.invalidEmailUser
    });
    const duration = Date.now() - start;

    expect(response.status()).toBe(422);
    expect(duration).toBeLessThan(MAX_RESPONSE_TIME_MS);
  });

  test('NF-AUTH-02 login required validation should respond within the accepted threshold', async ({ request, baseURL }) => {
    const start = Date.now();
    const response = await request.post(`${baseURL}/login`, {
      data: authUsers.emptyUser
    });
    const duration = Date.now() - start;

    expect(response.status()).toBe(422);
    expect(duration).toBeLessThan(MAX_RESPONSE_TIME_MS);
  });
});

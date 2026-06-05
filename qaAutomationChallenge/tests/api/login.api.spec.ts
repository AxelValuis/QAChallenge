import { expect, test } from '@playwright/test';
import { authUsers, expectedMessages } from '../../src/data/auth-test-data';

test.describe('Login API - Risk-based regression', () => {
  test('API-LOG-01 should reject invalid login credentials', async ({ request, baseURL }) => {
    test.fail(true, 'Known defect: login currently accepts invalid credentials.');

    const response = await request.post(`${baseURL}/login`, {
      data: authUsers.shortPasswordUser
    });
    const body = await response.json();

    expect(response.status()).toBe(401);
    expect(body.msg).toBe(expectedMessages.invalid);
  });

  test('API-LOG-02 should reject empty required fields', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/login`, {
      data: authUsers.emptyUser
    });
    const body = await response.json();

    expect(response.status()).toBe(422);
    expect(body.msg).toBe(expectedMessages.required);
  });
});

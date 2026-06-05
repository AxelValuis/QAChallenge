import { expect, test } from '@playwright/test';
import { authUsers, expectedMessages } from '../../src/data/auth-test-data';

test.describe('Register API - Risk-based regression', () => {
  test('API-REG-01 should register a user with valid data', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/register`, {
      data: authUsers.validUser
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.msg).toBe(expectedMessages.saved);
  });

  test('API-REG-02 should accept a password with exactly 5 characters', async ({ request, baseURL }) => {
    test.fail(true, 'Known defect: the current implementation rejects passwords with exactly 5 characters.');

    const response = await request.post(`${baseURL}/register`, {
      data: authUsers.boundaryUser
    });
    const body = await response.json();

    expect(response.status()).toBe(200);
    expect(body.msg).toBe(expectedMessages.saved);
  });

  test('API-REG-03 should reject an invalid email format', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/register`, {
      data: authUsers.invalidEmailUser
    });
    const body = await response.json();

    expect(response.status()).toBe(422);
    expect(body.msg).toBe(expectedMessages.invalid);
  });

  test('API-REG-04 should reject empty required fields', async ({ request, baseURL }) => {
    const response = await request.post(`${baseURL}/register`, {
      data: authUsers.emptyUser
    });
    const body = await response.json();

    expect(response.status()).toBe(422);
    expect(body.msg).toBe(expectedMessages.required);
  });
});

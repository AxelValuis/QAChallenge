export type AuthUser = {
  email: string;
  password: string;
};

export const authUsers: Record<string, AuthUser> = {
  validUser: {
    email: 'ok@test.com',
    password: '123456'
  },
  boundaryUser: {
    email: 'ok@test.com',
    password: '12345'
  },
  invalidEmailUser: {
    email: 'invalid',
    password: '123456'
  },
  shortPasswordUser: {
    email: 'ok@test.com',
    password: '123'
  },
  emptyUser: {
    email: '',
    password: ''
  }
};

export const expectedMessages = {
  saved: 'SAVED',
  invalid: 'INVALID',
  required: 'REQUIRED',
  loginValid: 'LOGIN VALID'
} as const;

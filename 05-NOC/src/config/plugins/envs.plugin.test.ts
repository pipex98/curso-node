import { describe, expect, jest, test } from '@jest/globals';
import { envs } from './envs.plugin';

describe('envs.plugin.ts', () => {

  test('should return env options', () => {

    expect(envs).toEqual({
      PORT: 3000,
      MAILER_SERVICE: 'gmail',
      MAILER_EMAIL: 'felipevasquez1998@gmail.com',
      MAILER_SECRET_KEY: 'hnyhsaavxrmjulmp',
      PROD: false,
      MONGO_URL: 'mongodb://felipe:123456879@localhost:27017/',
      MONGO_DB_NAME: 'NOC-TEST',
      MONGO_USER: 'felipe',
      MONGO_PASS: '123456879',
      POSTGRES_URL: 'postgresql://postgres:123456879@localhost:5432/NOC',
      POSTGRES_DB: 'NOC-TEST',
      POSTGRES_USER: 'postgres',
      POSTGRES_PASSWORD: '123456879'
    });
  });

  test('should return error if not found env', async () => {

    jest.resetModules();
    process.env.PORT = 'ABC';

    try {
      await import('./envs.plugin');
      expect(true).toBe(false);

    } catch (error) {
      expect(`${error}`).toContain('"PORT" should be a valid integer');
    };

  });

});
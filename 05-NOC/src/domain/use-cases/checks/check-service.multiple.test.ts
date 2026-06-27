
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { LogEntity } from '../../entities/log.entity';
import { CheckServiceMultiple } from './check-service.multiple';

describe('CheckServiceMultiple UseCase', () => {

  const mockRepo1 = {
    saveLog: jest.fn((log: LogEntity) => Promise.resolve()),
    getLogs: jest.fn(() => Promise.resolve([]))
  };

  const mockRepo2 = {
    saveLog: jest.fn((log: LogEntity) => Promise.resolve()),
    getLogs: jest.fn(() => Promise.resolve([]))
  };

  const mockRepo3 = {
    saveLog: jest.fn((log: LogEntity) => Promise.resolve()),
    getLogs: jest.fn(() => Promise.resolve([]))
  };

  const successCallback = jest.fn();
  const errorCallback = jest.fn();

  const checkService = new CheckServiceMultiple(
    [mockRepo1, mockRepo2, mockRepo3],
    successCallback,
    errorCallback
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call successCallback when fetch return true', async () => {

    const wasOk = await checkService.execute('https://google.com');

    expect(wasOk).toBe(true);
    expect(successCallback).toHaveBeenCalled(),
    expect(errorCallback).not.toHaveBeenCalled();

    expect(mockRepo1.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));

  });

  test('should call errorCallback when fetch return false', async () => {

    const wasOk = await checkService.execute('https://www.esto_es_una_pagina_errada.com/');

    expect(wasOk).toBe(false);
    expect(successCallback).not.toHaveBeenCalled(),
    expect(errorCallback).toHaveBeenCalled();

    expect(mockRepo1.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockRepo2.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockRepo3.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));

  });

});
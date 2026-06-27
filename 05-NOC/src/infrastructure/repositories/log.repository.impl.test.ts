
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';
import { LogRepositoryImpl } from './log.repository.impl';

describe('LogRepositoryImpl', () => {

  const mockLogDatasource = {
    saveLog: jest.fn((log: LogEntity) => Promise.resolve()),
    getLogs: jest.fn((logSeverityLevel: LogSeverityLevel) => Promise.resolve([]))
  };

  const logRepositoryImpl = new LogRepositoryImpl(
    mockLogDatasource
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('saveLog should call the datasource with arguments', async () => {

    const log = { level: LogSeverityLevel.high, message: 'Hola' } as LogEntity;
    await logRepositoryImpl.saveLog(log);
    expect(mockLogDatasource.saveLog).toHaveBeenCalledWith(log);
  });

  test('getLogs should call the datasource with arguments', async() => {

    const lowSeverity = LogSeverityLevel.low;

    await logRepositoryImpl.getLogs(lowSeverity)
    expect( mockLogDatasource.getLogs ).toHaveBeenCalledWith(lowSeverity);
    
  });

});
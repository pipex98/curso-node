
import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import { LogEntity, LogSeverityLevel } from '../../entities/log.entity';
import { SendEmailLogs } from './send-email-logs';
import { EmailService } from '../../../presentation/email/email.service';
import { LogRepository } from '../../repository/log-repository';

describe('SendEmailLogs UseCase', () => {

  const mockLogRepository: LogRepository = {
    saveLog: jest.fn((log: LogEntity) => Promise.resolve()),
    getLogs: jest.fn(() => Promise.resolve([]))
  };

  const mockEmailService = {
    sendEmailWithFileSystemLogs: jest.fn().mockReturnValue(true)
  }

  const sendEmailLogs = new SendEmailLogs(
    mockEmailService as any,
    mockLogRepository
  );

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should call sendEmail and saveLog', async () => {

    const result = await sendEmailLogs.execute('felipevasquez1998@gmail.com');

    expect(result).toBe(true);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      createdAt: expect.any(Date),
      level: LogSeverityLevel.low,
      message: "Log email sent",
      origin: "send-email-logs.ts"
    });

  });

  test('should log in case of error', async () => {

    mockEmailService.sendEmailWithFileSystemLogs.mockReturnValue(false);

    const result = await sendEmailLogs.execute('felipevasquez1998@gmail.com');

    expect(result).toBe(false);
    expect(mockEmailService.sendEmailWithFileSystemLogs).toHaveBeenCalledTimes(1);
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith(expect.any(LogEntity));
    expect(mockLogRepository.saveLog).toHaveBeenCalledWith({
      createdAt: expect.any(Date),
      level: LogSeverityLevel.high,
      message: "Error: Email log not sent",
      origin: "send-email-logs.ts"
    });

  });

});
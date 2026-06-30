import nodemailer from "nodemailer";
import { describe, expect, jest, test } from '@jest/globals';
import { EmailService, SendEmailOptions } from './email.service';

describe('EmailService', () => {

  const mockSendMail = jest.fn();

  nodemailer.createTransport = jest.fn().mockReturnValue({
    sendMail: mockSendMail
  }) as any;

  const emailService = new EmailService();

  test('should send email', async () => {


    const options: SendEmailOptions = {
      to: 'felipevasquez1998@gmail.com',
      subject: 'Test',
      htmlBody: '<h1>Test</h1>'
    };

    await emailService.sendEmail(options);

    expect(mockSendMail).toHaveBeenCalledWith({
      attachments: expect.any(Array),
      html: "<h1>Test</h1>",
      subject: "Test",
      to: "felipevasquez1998@gmail.com"
    });

  });

  test('should send email with attachments', async () => {

    const email = 'felipevasquez1998@gmail.com';
    await emailService.sendEmailWithFileSystemLogs(email);

    expect(mockSendMail).toHaveBeenCalledWith({
      to: email,
      subject: "Logs del servidor",
      html: expect.any(String),
      attachments: expect.arrayContaining([
        { filename: 'logs-all.log', path: './logs/logs-all.log' },
        { filename: 'logs-high.log', path: './logs/logs-high.log' },
        { filename: 'logs-medium.log', path: './logs/logs-medium.log' },
      ])
    });

  });

});
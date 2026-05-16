
import fs from 'fs';
import { afterEach, describe, expect, jest, test } from '@jest/globals';
import { SaveFile } from './save-file.use-case';

describe('SaveFileUseCase', () => {

  // beforeEach(() => {
  //   jest.clearAllMocks();
  //   const logMock = jest.fn();
  // });

  // afterEach(() => {
  //   if (fs.existsSync('outputs')) fs.rmSync('outputs', { recursive: true });
  //   if (fs.existsSync('custom-outputs')) fs.rmSync('custom-outputs', { recursive: true });
  // });

  test('should save file with default values', () => {

    const saveFile = new SaveFile();
    const filePath = 'outputs/table.txt';
    const options = {
      fileContent: 'test content'
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
    
    expect( result ).toBe(true);
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( options.fileContent );

  });

  test('should save file with custom values', () => {

    const saveFile = new SaveFile();

    const customOptions = {
      fileContent: 'custom content',
      fileDestination: 'custom-outputs/file-destination',
      fileName: 'custom-table-name'
    };

    const customFilePath = `${ customOptions.fileDestination }/${ customOptions.fileName }.txt`;

    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf-8' });

    expect( result ).toBe(true);
    expect( fileExists ).toBe( true );
    expect( fileContent ).toBe( customOptions.fileContent );

  });

  test('should return false if directory could not be created', () => {

    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(
      () => { throw new Error('This is a custom error message from testing'); }
    );

    const customOptions = {
      fileContent: 'custom content',
      fileDestination: 'custom-outputs/file-destination',
      fileName: 'custom-table-name'
    };

    const result = saveFile.execute(customOptions);

    expect( result ).toBe( false );

    mkdirSpy.mockRestore();

  });

  test('should return false if file could not be created', () => {

    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(
      () => { throw new Error('This is a custom writing error message '); }
    );

    const result = saveFile.execute({ fileContent: 'Hola' });

    expect( result ).toBe( false );

    writeFileSpy.mockRestore();
  });

});
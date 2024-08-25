import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';
import { FileType } from './file.interface';

@Injectable()
export class FileService {
  createFile(type: FileType, files: Express.Multer.File[]): string[] {
    try {
      const fileNames: string[] = [];
      for (const file of files) {
        const fileExtension = file.originalname.split('.').pop();
        const fileName = `${uuid.v4()}.${fileExtension}`;
        const filePath = path.resolve(__dirname, '../../src/', 'static', type);
        if (!fs.existsSync(filePath)) {
          fs.mkdirSync(filePath, { recursive: true });
        }
        fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
        fileNames.push(`${type}/${fileName}`);
      }
      return fileNames;
    } catch (e) {
      throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  removeFile(fileName: string) {
    const filePath = path.resolve(__dirname, '../../src/', 'static', fileName);
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }
  }
}

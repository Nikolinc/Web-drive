import { Module } from '@nestjs/common';
import { FileDirectoryService } from './file-directory.service';
import { FileDirectoryController } from './file-directory.controller';

@Module({
  providers: [FileDirectoryService],
  controllers: [FileDirectoryController]
})
export class FileDirectoryModule {}

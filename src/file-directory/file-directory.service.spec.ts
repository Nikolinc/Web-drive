import { Test, TestingModule } from '@nestjs/testing';
import { FileDirectoryService } from './file-directory.service';

describe('FileDirectoryService', () => {
  let service: FileDirectoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileDirectoryService],
    }).compile();

    service = module.get<FileDirectoryService>(FileDirectoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

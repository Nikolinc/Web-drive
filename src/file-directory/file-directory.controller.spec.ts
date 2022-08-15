import { Test, TestingModule } from '@nestjs/testing';
import { FileDirectoryController } from './file-directory.controller';

describe('FileDirectoryController', () => {
  let controller: FileDirectoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileDirectoryController],
    }).compile();

    controller = module.get<FileDirectoryController>(FileDirectoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

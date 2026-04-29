import { Test, TestingModule } from '@nestjs/testing';
import { ComprimentoController } from './comprimento.controller';

describe('ComprimentoController', () => {
  let controller: ComprimentoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComprimentoController],
    }).compile();

    controller = module.get<ComprimentoController>(ComprimentoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

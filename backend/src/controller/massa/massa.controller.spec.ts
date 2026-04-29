import { Test, TestingModule } from '@nestjs/testing';
import { MassaController } from './massa.controller';

describe('MassaController', () => {
  let controller: MassaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MassaController],
    }).compile();

    controller = module.get<MassaController>(MassaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

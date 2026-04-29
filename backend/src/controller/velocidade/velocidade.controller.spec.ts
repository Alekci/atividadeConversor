import { Test, TestingModule } from '@nestjs/testing';
import { VelocidadeController } from './velocidade.controller';

describe('VelocidadeController', () => {
  let controller: VelocidadeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VelocidadeController],
    }).compile();

    controller = module.get<VelocidadeController>(VelocidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

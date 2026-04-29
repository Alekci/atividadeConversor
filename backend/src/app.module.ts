import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComprimentoController } from './controller/comprimento/comprimento.controller';
import { ConversorService } from './conversor/conversor.service';
import { MassaController } from './controller/massa/massa.controller';
import { AreaController } from './controller/area/area.controller';
import { TemperaturaController } from './controller/temperatura/temperatura.controller';
import { VelocidadeController } from './controller/velocidade/velocidade.controller';

@Module({
  imports: [],
  controllers: [AppController, ComprimentoController, MassaController, AreaController, TemperaturaController, VelocidadeController],
  providers: [AppService, ConversorService],
})
export class AppModule {}

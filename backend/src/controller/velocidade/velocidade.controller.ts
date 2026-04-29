import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../../conversor/conversor.service';

@Controller('velocidade')
export class VelocidadeController {
    constructor(private readonly service: ConversorService) { }

    @Get('kmh-para-ms/:valor')
    getKmh(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.kmhParaMs(valor),
            unidade: 'm/s',
        };
    }
    @Get('kmh-para-mis/:valor')
    GetKmh(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.kmhParaMis(valor),
            unidade: 'mi/s',
        };
    }
    @Get('kn-para-kmh/:valor')
    getKn(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.knParaKmh(valor),
            unidade: 'km/h',
        };
    }

}
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../../conversor/conversor.service';

@Controller('temperatura')
export class TemperaturaController {
    constructor(private readonly service: ConversorService) { }

    @Get('c-para-f/:valor')
    getCelsius(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.cParaF(valor),
            unidade: '°F',
        };
    }
    @Get('c-para-k/:valor')
    GetCelsius(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.cParaK(valor),
            unidade: 'K',
        };
    }
    @Get('f-para-c/:valor')
    getFahrenheit(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.fParaC(valor),
            unidade: '°C',
        };
    }

}
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../../conversor/conversor.service';

@Controller('massa')
export class MassaController {
    constructor(private readonly service: ConversorService) { }

    @Get('kg-para-grama/:valor')
    getKg(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.kgParaG(valor),
            unidade: 'g',
        };
    }
    @Get('kg-para-lb/:valor')
    getLb(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.kgParaLb(valor),
            unidade: 'lb',
        };
    }
    @Get('kg-para-oz/:valor')
    getOz(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.kgParaOz(valor),
            unidade: 'oz',
        };
    }

}
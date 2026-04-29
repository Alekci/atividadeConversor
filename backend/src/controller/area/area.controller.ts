import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../../conversor/conversor.service';

@Controller('area')
export class AreaController {
    constructor(private readonly service: ConversorService) { }

    @Get('m2-para-Km2/:valor')
    getM2(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.m2ParaKm2(valor),
            unidade: 'km²',
        };
    }
    @Get('m2-para-Ac2/:valor')
    getAc(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.m2ParaAc2(valor),
            unidade: 'ac²',
        };
    }
    @Get('m2-para-ft2/:valor')
    getFt2(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.m2ParaFt2(valor),
            unidade: 'ft²',
        };
    }

}
import { Controller, Get, Param, ParseFloatPipe } from '@nestjs/common';
import { ConversorService } from '../../conversor/conversor.service';

@Controller('comprimento')
export class ComprimentoController {
    constructor(private readonly service: ConversorService) { }

    @Get('metros-para-km/:valor')
    getKm(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.metrosParaKm(valor),
            unidade: 'km',
        };
    }
    @Get('metros-para-mi/:valor')
    getMi(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.metrosParaMi(valor),
            unidade: 'mi',
        };
    }
    @Get('metros-para-pe/:valor')
    getPe(@Param('valor', ParseFloatPipe) valor: number) {
        return {
            resultado: this.service.metrosParaPe(valor),
            unidade: 'pe',
        };
    }

}
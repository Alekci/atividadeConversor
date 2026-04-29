import { Injectable } from '@nestjs/common';

@Injectable()
export class ConversorService {
    metrosParaKm(valor: number) {
        return (valor / 1000);
    }
    metrosParaMi(valor: number) {
        return (valor / 1609.34);
    }
    metrosParaPe(valor: number) {
        return (valor / 0.3048);
    }

    kgParaLb(valor: number) {
        return (valor / 0.453592);
    }
    kgParaG(valor: number) {
        return (valor * 1000);
    }
    kgParaOz(valor: number) {
        return (valor / 0.0283495);
    }

    m2ParaKm2(valor: number) {
        return (valor / 1000000);
    }
    m2ParaAc2(valor: number) {
        return (valor / 4046.86);
    }
    m2ParaFt2(valor: number) {
        return (valor / 0.092903);
    }

    cParaK(valor: number) {
        return (valor + 273.15);
    }
    cParaF(valor: number) {
        return ((valor * 9 / 5) + 32)
    }
    fParaC(valor: number) {
        return ((valor - 32) * 5 / 9);
    }

    kmhParaMs(valor: number) {
        return (valor / 3.6);
    }
    kmhParaMis(valor: number) {
        return (valor / 1.60934)
    }
    knParaKmh(valor: number) {
        return (valor * 1.852)
    }

}
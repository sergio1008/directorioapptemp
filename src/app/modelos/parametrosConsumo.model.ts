export class ParametrosConsumoModel {
    Nombre: string;
    Tipo: string;
    IntValor: number;
    DouValor: number;
    StringValor: string;
    DateValor: string;
    Entrada: boolean;

    constructor(
        Nombre: string,
        Tipo: string,
        IntValor: number,
        DouValor: number,
        StringValor: string,
        DateValor: string,
        Entrada: boolean) {

        this.Nombre = Nombre;
        this.Tipo = Tipo;
        this.IntValor = IntValor;
        this.DouValor = DouValor;
        this.StringValor = StringValor;
        this.DateValor = DateValor;
        this.Entrada = Entrada;
    }
}

import { ParametrosConsumoModel } from 'app/modelos/parametrosConsumo.model';

export class Parametros {
    public static parametrosTipoEventos: ParametrosConsumoModel[] =[
        {
            Nombre: "P_SALIDA",
            Tipo: "C",
            IntValor: 0,
            DouValor: 0,
            StringValor: "",
            DateValor: "",
            Entrada: false
        },
    ];
}
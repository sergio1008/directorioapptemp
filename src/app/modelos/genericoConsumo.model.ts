import { ParametrosConsumoModel } from './parametrosConsumo.model';

export class GenericoConsumoModel {
    Tag: string;
    Procedimiento: string;
    Parametros: ParametrosConsumoModel[];

    constructor(
        Tag: string,
        Procedimiento: string,
        Parametros: ParametrosConsumoModel[]) {

        this.Tag = Tag;
        this.Procedimiento = Procedimiento;
        this.Parametros = Parametros;
    }
}

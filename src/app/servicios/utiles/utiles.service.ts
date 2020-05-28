import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Parametros } from 'app/utiles/parametros-constantes';
import { ParametrosConsumoModel } from 'app/modelos/parametrosConsumo.model';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';


const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable({
  providedIn: 'root'
})
export class UtilesService {

  public tituloSubject = new BehaviorSubject<String>("Titulo");
  public titulo$ = this.tituloSubject.asObservable();

  public volverSubject = new BehaviorSubject<any>({ rutaNueva: '', boton: false });
  public volver$ = this.volverSubject.asObservable();


  constructor() { }
  /**
   * Setea el titulo a agregar
   * @param titulo titulo a agregar en app.component
   */
  asignarTitulo(titulo) {
    this.tituloSubject.next(titulo);
  }

  /**
 * envia si desea el boton de volver
 * @param ruta objeto con booleano para mostrar y ruta a redireccionar
 */
  asignarBotonVolver(ruta) {
    this.volverSubject.next(ruta);
  }

  /**
   * realiza la subscripción para titulo y boton volver
   */
  configurarBarra(titulo, ruta?, boton?:boolean) {
    this.asignarTitulo(titulo);
    this.asignarBotonVolver({ rutaNueva: ruta || '/', boton: boton || false });
}




  /**
   * recibe como parametro un objeto y retorna los parametros genericos
   * @param objeto 
   * @returns parametrosEnviarparametrosEnviar[]
   */
  obtenerParametros(objeto: any, variable:string): ParametrosConsumoModel[] {
    let parametrosEnviar: ParametrosConsumoModel[] = JSON.parse(JSON.stringify(Parametros[variable]));
    for (const key in objeto) {
      if (objeto.hasOwnProperty(key)) {
        let indice = parametrosEnviar.findIndex(parametro => parametro.Nombre === key);
        if (indice !== -1) {
          this.cambiarTipo(parametrosEnviar[indice], objeto[key]);
        }
      }
    }
    return parametrosEnviar;
  }

  /**
   * evalua el tipo y realiza el parseo correspondiente
   * @param parametro 
   * @param valor 
   */
  cambiarTipo(parametro: ParametrosConsumoModel, valor: any) {
    switch (parametro.Tipo) {
      case 'i':
      case 'I':
        parametro.IntValor = parseInt(valor);
        break;
      case 'd':
      case 'D':
      case 'f':
      case 'F':
        parametro.DouValor = parseFloat(valor);
        break;
      case 's':
      case 'S':
        parametro.StringValor = valor.toString();
        break;
      case 'dt':
      case 'DT':
      case 'Dt':
      case 'dT':
        parametro.DateValor = valor.toLocaleString();
      default:
        break;
    }
  }
  /**
   * crea el archivo exel
   * @param json datos que se van en el archivo
   * @param excelFileName nombre del archivo a crear
   */
  public exportAsExcelFile(json: any[], excelFileName: string): void {

    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  /**
   * 
   * @param buffer archivo creado
   * @param fileName nombre del archivo a crear
   */
  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  
  /**
   * metodo que retorna valor de la configuración de la pagina desde el storage
   * @param key variable a recuperar del storage
   */
  variableConfiguracion(key: string){
    const conf = JSON.parse(sessionStorage.getItem('configuracionEventos'));
    return conf[key];
  }

}

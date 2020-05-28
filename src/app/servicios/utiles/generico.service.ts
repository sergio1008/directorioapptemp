import { UtilesService } from 'app/servicios/utiles/utiles.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GenericoConsumoModel } from 'app/modelos/genericoConsumo.model';
import { environment } from 'environments/environment';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericoService {

  constructor(
    private httpClient: HttpClient,
    private utilesService: UtilesService
  ) { }

  apiAdSodimac: string = this.utilesService.variableConfiguracion('apiAdSodimac');
  apiAdSodimacSpTagDt: string = this.utilesService.variableConfiguracion('apiAdSodimacSpTagDt');
  apiAdSodimacCallTags: string = this.utilesService.variableConfiguracion('apiAdSodimacCallTags');
  
  /**
   * genera los headers de la consulta http
   */
  protected generateBasicHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  /**
   * Realiza el llamado al servicio apiAdSodimacSpTagDt
   * @param objeto el cuerpo del servicio
   */
  consultar(objeto: GenericoConsumoModel): Observable<any> {
    return this.httpClient.post(this.apiAdSodimac + this.apiAdSodimacSpTagDt, objeto, { headers: this.generateBasicHeaders() });
  }

  /**
   * Realiza el llamado al servicio apiAdSodimacCallTags 
   * @param tag tag para relaizar la consulta
   */
  getTag(tag: string): Observable<any> {
    return this.httpClient.get(this.apiAdSodimac + (this.apiAdSodimacCallTags + tag),{ headers: this.generateBasicHeaders() })
  }

}

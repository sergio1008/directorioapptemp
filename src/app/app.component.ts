import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil, skip } from 'rxjs/operators';
import { FuseConfigService } from '@fuse/services/config.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { UtilesService } from './servicios/utiles/utiles.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { environment } from 'environments/environment';
import { MediaObserver, MediaChange } from '@angular/flex-layout';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

    titulo: String = "Ingrese titulo";
    // Private
    private _unsubscribeAll: Subject<any>;

    routeSubscription: any;
    usr = '';
    isLoading = false;
    errorMessage = '';
    cargarDatos =true;
    codigoProveedor = '';
    TOKEN = '';
    mostrarBotonVolver;
    volver = { rutaNueva: '', boton: false };
    mostrarPantalla = false;
    large: boolean = false;
    
    /**
     * Constructor
     *
     * @param {DOCUMENT} document
     * @param {FuseConfigService} _fuseConfigService
     * @param {FuseNavigationService} _fuseNavigationService
     * @param {FuseSidebarService} _fuseSidebarService
     * @param {FuseSplashScreenService} _fuseSplashScreenService
     * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
     * @param {Platform} _platform
     * @param {UtilService} util
     */

    constructor(
        @Inject(DOCUMENT) private document: any,
        private _fuseConfigService: FuseConfigService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _platform: Platform,
        private util: UtilesService,
        private _route: ActivatedRoute,
        private toastr: ToastrService,
        private spinner: NgxSpinnerService,
        private router: Router,
        private mediaObserver: MediaObserver,
    ) {

        if (this._platform.ANDROID || this._platform.IOS) {
            this.document.body.classList.add('is-mobile');
        }

        this._unsubscribeAll = new Subject();

        this.mediaObserver.media$.subscribe((change: MediaChange) => {
            if (change.mqAlias == 'xs' || change.mqAlias == 'sm') {
                this.large = false;
            } else {
                this.large = true;
            }
        });
    }

    ngOnInit(): void {

        this.fuseConfigService();

    }



    fuseConfigService() {
        //this.obtenerParametros();
        this.obtenerParametrosUrl();
        this._fuseConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {


                // Color theme - Use normal for loop for IE11 compatibility
                for (let i = 0; i < this.document.body.classList.length; i++) {
                    const className = this.document.body.classList[i];

                    if (className.startsWith('theme-')) {
                        this.document.body.classList.remove(className);
                    }
                }

                this.document.body.classList.add('theme-default');

            });


        this.util.titulo$.subscribe(res => {
            this.titulo = res;
        });

        this.util.volver$.subscribe(res => {
            this.volver = res;
        });

    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }


    obtenerParametrosUrl() {
        this._route.queryParams
        .pipe(skip(1))
        .subscribe(params=>{
            let usuario : string = params.token;         
            this.usr = usuario.split(";")[0];

            if(this.usr){
                sessionStorage.setItem('usr', this.usr);
                this.mostrarPantalla = true;
                sessionStorage.removeItem('configuracionEventos');
                this.obtenerConfiguracion();
            }           
            
        },error=>{

        })
    }

    obtenerConfiguracion(){
        let configuracionJson :string=`{
            "apiAdSodimac": "http://10.23.14.164:9000",
            "apiAdSodimacSpTagDt":"/Servicios/AccesoDatos_1.0.0/api/SGL/FncStoreProcedureTagDt",
            "apiAdSodimacCallTags":"/Servicios/AccesoDatos_1.0.0/api/Reportes/GetReporteTag/",
            "controlador":"/Reportes/GetReporteTag/",
            "paginacion" : [50, 100, 150, 200],
            "rangoFechas": 30
        }`;
        sessionStorage.setItem("configuracionEventos",configuracionJson);
    }

    volverRuta() {
        this.router.navigate([this.volver.rutaNueva]);
    }

}

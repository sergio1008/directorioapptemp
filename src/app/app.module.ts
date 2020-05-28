import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule, MatIconModule, MatExpansionModule, MatGridListModule } from '@angular/material';
import 'hammerjs';
import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { fuseConfig } from 'app/fuse-config';
import { AppComponent } from 'app/app.component';
import { LayoutModule } from 'app/layout/layout.module';
import { AppRoutingModule } from './app-routing.module';
import { UtilesService } from './servicios/utiles/utiles.service';

import { MaterialModule } from './material.module';
import { GenericoService } from './servicios/utiles/generico.service';
import { ToastrModule } from 'ngx-toastr';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AutocompleteModule } from 'autocomplete';

import { NgxSpinnerModule } from 'ngx-spinner';
import { DirectorioAplicacionesComponent } from './componentes/directorio-aplicaciones/directorio-aplicaciones.component';
import { FuncionalidadComponent } from './componentes/funcionalidad/funcionalidad.component';
import { DetalleAplicacionComponent } from './componentes/directorio-aplicaciones/detalle-aplicacion/detalle-aplicacion.component';
import { TablaModulosComponent } from './componentes/directorio-aplicaciones/tabla-modulos/tabla-modulos.component';
import { CabeceraFuncionalidadComponent } from './componentes/directorio-aplicaciones/cabecera-funcionalidad/cabecera-funcionalidad.component';

@NgModule({
    declarations: [
        AppComponent,
        DirectorioAplicacionesComponent,
        FuncionalidadComponent,

        DetalleAplicacionComponent,
        TablaModulosComponent,
        CabeceraFuncionalidadComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FuseModule.forRoot(fuseConfig),
        FuseSharedModule,
        LayoutModule,
        MaterialModule,
        ToastrModule.forRoot(),
        AutocompleteModule,
        NgxSpinnerModule
    ],
    providers: [
        UtilesService,
        GenericoService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

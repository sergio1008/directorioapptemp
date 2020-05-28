import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DirectorioAplicacionesComponent } from './componentes/directorio-aplicaciones/directorio-aplicaciones.component';
import { FuncionalidadComponent } from './componentes/funcionalidad/funcionalidad.component';

const routes: Routes = [
    {
        path: "funcionalidad/:idFuncionalidad",
        component: FuncionalidadComponent
    },
    {
        path: "**",
        component: DirectorioAplicacionesComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule]
})
export class AppRoutingModule {}

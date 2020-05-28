import { startWith, map } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatAutocompleteModule, MatSelectModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/modelos/genericoAutocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/componentes/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.seleccion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['genericoAutocompletar']) {
            if (this.genericoAutocompletar) {
                if (this.formulario.controls[this.label].validator(this.formulario.controls[this.label])) {
                    this.requerido = this.formulario.controls[this.label].validator(this.formulario.controls[this.label]).required;
                }
                else {
                    this.requerido = false;
                }
                this.DatosFiltrados = this.formulario.get(this.label).valueChanges.pipe(startWith(''), map((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) { return typeof value === 'string' ? value : value[_this.genericoAutocompletar.datoMostrar]; })), map((/**
                 * @param {?} Nombre
                 * @return {?}
                 */
                function (Nombre) { return Nombre ? _this.filtrarDato(Nombre) : _this.genericoAutocompletar.datos; })));
                if (this.genericoAutocompletar) {
                    if (this.genericoAutocompletar.deshabilitar === true) {
                        this.formulario.controls[this.label].disable();
                    }
                }
                if (this.genericoAutocompletar && this.genericoAutocompletar.idPrecargado) {
                    this.filtrarData();
                }
            }
        }
    };
    /**
     * @param {?=} dato
     * @return {?}
     */
    AutocompleteComponent.prototype.mostrarDato = /**
     * @param {?=} dato
     * @return {?}
     */
    function (dato) {
        return dato ? dato[this.genericoAutocompletar.datoMostrar] : undefined;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    AutocompleteComponent.prototype.filtrarDato = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        if (this.genericoAutocompletar.datos) {
            return this.genericoAutocompletar.datos.filter((/**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                return option[_this.genericoAutocompletar.datoMostrar].toLowerCase().indexOf(val.toLowerCase()) === 0;
            }));
        }
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.filtrarData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var datos = this.genericoAutocompletar.datos;
        if (datos && this.genericoAutocompletar) {
            /** @type {?} */
            var cargar = datos.find((/**
             * @param {?} dato
             * @return {?}
             */
            function (dato) { return dato[_this.genericoAutocompletar.filtroPrecargado] == _this.genericoAutocompletar.idPrecargado; }));
            this.formulario.get(this.label).setValue(cargar);
        }
    };
    /**
     * @param {?} seleccion
     * @return {?}
     */
    AutocompleteComponent.prototype.seleccionoOpcion = /**
     * @param {?} seleccion
     * @return {?}
     */
    function (seleccion) {
        this.seleccion.emit(seleccion);
    };
    AutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-autocomplete',
                    template: "<div [formGroup]=\"formulario\">\r\n  <mat-form-field style=\"width: 100%;\" appearance=\"outline\">\r\n    <mat-label>{{genericoAutocompletar?.placeholder}}</mat-label>\r\n    <input matInput type=\"text\" [matAutocomplete]=\"dato\" [formControlName]=\"label\" [required]=\"requerido\" \r\n    [placeholder]=\"genericoAutocompletar?.placeholder\">\r\n    <mat-autocomplete autoActiveFirstOption #dato=\"matAutocomplete\" [displayWith]=\"mostrarDato.bind(this)\" (optionSelected)=\"seleccionoOpcion(formulario.value[label])\">\r\n      <mat-option *ngFor=\"let dato of DatosFiltrados | async\" [value]=\"dato\">\r\n        {{dato[this.genericoAutocompletar.datoMostrar]}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AutocompleteComponent.ctorParameters = function () { return []; };
    AutocompleteComponent.propDecorators = {
        genericoAutocompletar: [{ type: Input }],
        formulario: [{ type: Input }],
        label: [{ type: Input }],
        seleccion: [{ type: Output }]
    };
    return AutocompleteComponent;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: lib/autocomplete.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [AutocompleteComponent],
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        ReactiveFormsModule,
                        MatSelectModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                    ],
                    exports: [AutocompleteComponent]
                },] }
    ];
    return AutocompleteModule;
}());

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: autocomplete.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AutocompleteComponent, AutocompleteModule };

//# sourceMappingURL=autocomplete.js.map
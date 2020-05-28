/**
 * @fileoverview added by tsickle
 * Generated from: lib/componentes/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GenericoAutoComplete } from '../../modelos/genericoAutocomplete';
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
export { AutocompleteComponent };
if (false) {
    /** @type {?} */
    AutocompleteComponent.prototype.genericoAutocompletar;
    /** @type {?} */
    AutocompleteComponent.prototype.formulario;
    /** @type {?} */
    AutocompleteComponent.prototype.label;
    /** @type {?} */
    AutocompleteComponent.prototype.seleccion;
    /** @type {?} */
    AutocompleteComponent.prototype.requerido;
    /** @type {?} */
    AutocompleteComponent.prototype.DatosFiltrados;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRlcy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQTJCLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUUxRTtJQU9FO1FBS1UsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFKMUMsQ0FBQzs7OztJQVFMLHdDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQsMkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQTJCQztRQTFCQyxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUM5QixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7b0JBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7aUJBQ2hIO3FCQUFJO29CQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFBO2lCQUN2QjtnQkFFRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQWUsRUFBRSxDQUFDLEVBQzNCLEdBQUc7Ozs7Z0JBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsRUFBakYsQ0FBaUYsRUFBQyxFQUMvRixHQUFHOzs7O2dCQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFwRSxDQUFvRSxFQUFDLENBQ3BGLENBQUM7Z0JBRUYsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUU7b0JBQzlCLElBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUM7d0JBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDaEQ7aUJBQ0Y7Z0JBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBRTtvQkFDekUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUNwQjthQUVGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFXOzs7O0lBQVgsVUFBWSxJQUFVO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDekUsQ0FBQzs7Ozs7SUFFRCwyQ0FBVzs7OztJQUFYLFVBQVksR0FBVztRQUF2QixpQkFLQztRQUpDLElBQUksSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRTtZQUNwQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsTUFBTTtnQkFDbkQsT0FBQSxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQTdGLENBQTZGLEVBQUMsQ0FBQztTQUNsRztJQUNILENBQUM7Ozs7SUFFRCwyQ0FBVzs7O0lBQVg7UUFBQSxpQkFNQzs7WUFMSyxLQUFLLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUs7UUFDNUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFOztnQkFDbkMsTUFBTSxHQUFHLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGdCQUFnQixDQUFDLElBQUksS0FBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksRUFBNUYsQ0FBNEYsRUFBQztZQUM3SCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxnREFBZ0I7Ozs7SUFBaEIsVUFBaUIsU0FBUztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNqQyxDQUFDOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDh2QkFBNEM7O2lCQUU3Qzs7Ozs7d0NBS0UsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsTUFBTTs7SUEyRFQsNEJBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQWxFWSxxQkFBcUI7OztJQUloQyxzREFBcUQ7O0lBQ3JELDJDQUErQjs7SUFDL0Isc0NBQXVCOztJQUN2QiwwQ0FBOEM7O0lBQzlDLDBDQUFtQjs7SUFDbkIsK0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEdlbmVyaWNvQXV0b0NvbXBsZXRlIH0gZnJvbSAnLi4vLi4vbW9kZWxvcy9nZW5lcmljb0F1dG9jb21wbGV0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi1hdXRvY29tcGxldGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hdXRvY29tcGxldGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEF1dG9jb21wbGV0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICkgeyB9XHJcbiAgQElucHV0KCkgZ2VuZXJpY29BdXRvY29tcGxldGFyOiBHZW5lcmljb0F1dG9Db21wbGV0ZTtcclxuICBASW5wdXQoKSBmb3JtdWxhcmlvOiBGb3JtR3JvdXA7XHJcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcclxuICBAT3V0cHV0KCkgc2VsZWNjaW9uID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgcmVxdWVyaWRvOiBib29sZWFuO1xyXG4gIERhdG9zRmlsdHJhZG9zOiBPYnNlcnZhYmxlPGFueVtdPjtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXNbJ2dlbmVyaWNvQXV0b2NvbXBsZXRhciddKSB7XHJcbiAgICAgIGlmICh0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhcikge1xyXG4gICAgICAgIGlmKHRoaXMuZm9ybXVsYXJpby5jb250cm9sc1t0aGlzLmxhYmVsXS52YWxpZGF0b3IodGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzW3RoaXMubGFiZWxdKSl7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlcmlkbyA9IHRoaXMuZm9ybXVsYXJpby5jb250cm9sc1t0aGlzLmxhYmVsXS52YWxpZGF0b3IodGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzW3RoaXMubGFiZWxdKS5yZXF1aXJlZDtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHRoaXMucmVxdWVyaWRvID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5EYXRvc0ZpbHRyYWRvcyA9IHRoaXMuZm9ybXVsYXJpby5nZXQodGhpcy5sYWJlbCkudmFsdWVDaGFuZ2VzLnBpcGUoXHJcbiAgICAgICAgICBzdGFydFdpdGg8c3RyaW5nIHwgYW55PignJyksXHJcbiAgICAgICAgICBtYXAodmFsdWUgPT4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogdmFsdWVbdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b01vc3RyYXJdKSxcclxuICAgICAgICAgIG1hcChOb21icmUgPT4gTm9tYnJlID8gdGhpcy5maWx0cmFyRGF0byhOb21icmUpIDogdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b3MpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyKSB7XHJcbiAgICAgICAgICBpZih0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kZXNoYWJpbGl0YXIgPT09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmZvcm11bGFyaW8uY29udHJvbHNbdGhpcy5sYWJlbF0uZGlzYWJsZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIgJiYgdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuaWRQcmVjYXJnYWRvKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbHRyYXJEYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW9zdHJhckRhdG8oZGF0bz86IGFueSk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gZGF0byA/IGRhdG9bdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b01vc3RyYXJdIDogdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgZmlsdHJhckRhdG8odmFsOiBzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICBpZiAodGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b3MpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyLmRhdG9zLmZpbHRlcihvcHRpb24gPT5cclxuICAgICAgICBvcHRpb25bdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b01vc3RyYXJdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih2YWwudG9Mb3dlckNhc2UoKSkgPT09IDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdHJhckRhdGEoKSB7XHJcbiAgICBsZXQgZGF0b3MgPSB0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvcztcclxuICAgIGlmIChkYXRvcyAmJiB0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhcikge1xyXG4gICAgICBsZXQgY2FyZ2FyID0gZGF0b3MuZmluZChkYXRvID0+IGRhdG9bdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZmlsdHJvUHJlY2FyZ2Fkb10gPT0gdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuaWRQcmVjYXJnYWRvKTtcclxuICAgICAgdGhpcy5mb3JtdWxhcmlvLmdldCh0aGlzLmxhYmVsKS5zZXRWYWx1ZShjYXJnYXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWNjaW9ub09wY2lvbihzZWxlY2Npb24pe1xyXG4gICAgdGhpcy5zZWxlY2Npb24uZW1pdChzZWxlY2Npb24pO1xyXG4gIH1cclxufVxyXG4iXX0=
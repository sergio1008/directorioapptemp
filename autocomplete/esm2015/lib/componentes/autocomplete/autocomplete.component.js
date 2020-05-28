/**
 * @fileoverview added by tsickle
 * Generated from: lib/componentes/autocomplete/autocomplete.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GenericoAutoComplete } from '../../modelos/genericoAutocomplete';
export class AutocompleteComponent {
    constructor() {
        this.seleccion = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
                value => typeof value === 'string' ? value : value[this.genericoAutocompletar.datoMostrar])), map((/**
                 * @param {?} Nombre
                 * @return {?}
                 */
                Nombre => Nombre ? this.filtrarDato(Nombre) : this.genericoAutocompletar.datos)));
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
    }
    /**
     * @param {?=} dato
     * @return {?}
     */
    mostrarDato(dato) {
        return dato ? dato[this.genericoAutocompletar.datoMostrar] : undefined;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    filtrarDato(val) {
        if (this.genericoAutocompletar.datos) {
            return this.genericoAutocompletar.datos.filter((/**
             * @param {?} option
             * @return {?}
             */
            option => option[this.genericoAutocompletar.datoMostrar].toLowerCase().indexOf(val.toLowerCase()) === 0));
        }
    }
    /**
     * @return {?}
     */
    filtrarData() {
        /** @type {?} */
        let datos = this.genericoAutocompletar.datos;
        if (datos && this.genericoAutocompletar) {
            /** @type {?} */
            let cargar = datos.find((/**
             * @param {?} dato
             * @return {?}
             */
            dato => dato[this.genericoAutocompletar.filtroPrecargado] == this.genericoAutocompletar.idPrecargado));
            this.formulario.get(this.label).setValue(cargar);
        }
    }
    /**
     * @param {?} seleccion
     * @return {?}
     */
    seleccionoOpcion(seleccion) {
        this.seleccion.emit(seleccion);
    }
}
AutocompleteComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-autocomplete',
                template: "<div [formGroup]=\"formulario\">\r\n  <mat-form-field style=\"width: 100%;\" appearance=\"outline\">\r\n    <mat-label>{{genericoAutocompletar?.placeholder}}</mat-label>\r\n    <input matInput type=\"text\" [matAutocomplete]=\"dato\" [formControlName]=\"label\" [required]=\"requerido\" \r\n    [placeholder]=\"genericoAutocompletar?.placeholder\">\r\n    <mat-autocomplete autoActiveFirstOption #dato=\"matAutocomplete\" [displayWith]=\"mostrarDato.bind(this)\" (optionSelected)=\"seleccionoOpcion(formulario.value[label])\">\r\n      <mat-option *ngFor=\"let dato of DatosFiltrados | async\" [value]=\"dato\">\r\n        {{dato[this.genericoAutocompletar.datoMostrar]}}\r\n      </mat-option>\r\n    </mat-autocomplete>\r\n  </mat-form-field>\r\n</div>",
                styles: [""]
            }] }
];
/** @nocollapse */
AutocompleteComponent.ctorParameters = () => [];
AutocompleteComponent.propDecorators = {
    genericoAutocompletar: [{ type: Input }],
    formulario: [{ type: Input }],
    label: [{ type: Input }],
    seleccion: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2F1dG9jb21wbGV0ZS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRlcy9hdXRvY29tcGxldGUvYXV0b2NvbXBsZXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE0QixNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQTJCLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQU8xRSxNQUFNLE9BQU8scUJBQXFCO0lBRWhDO1FBS1UsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFKMUMsQ0FBQzs7OztJQVFMLFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFO1lBQ3BDLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO2dCQUM5QixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUM7b0JBQ3RGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7aUJBQ2hIO3FCQUFJO29C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Q29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFNpbXBsZUNoYW5nZXMsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgR2VuZXJpY29BdXRvQ29tcGxldGUgfSBmcm9tICcuLi8uLi9tb2RlbG9zL2dlbmVyaWNvQXV0b2NvbXBsZXRlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbGliLWF1dG9jb21wbGV0ZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2F1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgKSB7IH1cclxuICBASW5wdXQoKSBnZW5lcmljb0F1dG9jb21wbGV0YXI6IEdlbmVyaWNvQXV0b0NvbXBsZXRlO1xyXG4gIEBJbnB1dCgpIGZvcm11bGFyaW86IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBzZWxlY2Npb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICByZXF1ZXJpZG86IGJvb2xlYW47XHJcbiAgRGF0b3NGaWx0cmFkb3M6IE9ic2VydmFibGU8YW55W10+O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlc1snZ2VuZXJpY29BdXRvY29tcGxldGFyJ10pIHtcclxuICAgICAgaWYgKHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyKSB7XHJcbiAgICAgICAgaWYodGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzW3RoaXMubGFiZWxdLnZhbGlkYXRvcih0aGlzLmZvcm11bGFyaW8uY29udHJvbHNbdGhpcy5sYWJlbF0pKXtcclxuICAgICAgICAgIHRoaXMucmVxdWVyaWRvID0gdGhpcy5mb3JtdWxhcmlvLmNvbnRyb2xzW3RoaXMubGFiZWxdLnZhbGlkYXRvcih0aGlzLmZvcm11bGFyaW8uY29udHJvbHNbdGhpcy5sYWJlbF0pLnJlcXVpcmVkO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGhpcy5yZXF1ZXJpZG8gPSBmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLkRhdG9zRmlsdHJhZG9zID0gdGhpcy5mb3JtdWxhcmlvLmdldCh0aGlzLmxhYmVsKS52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgICAgIHN0YXJ0V2l0aDxzdHJpbmcgfCBhbnk+KCcnKSxcclxuICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiB2YWx1ZVt0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvTW9zdHJhcl0pLFxyXG4gICAgICAgICAgbWFwKE5vbWJyZSA9PiBOb21icmUgPyB0aGlzLmZpbHRyYXJEYXRvKE5vbWJyZSkgOiB0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvcylcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIpIHtcclxuICAgICAgICAgIGlmKHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyLmRlc2hhYmlsaXRhciA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybXVsYXJpby5jb250cm9sc1t0aGlzLmxhYmVsXS5kaXNhYmxlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhciAmJiB0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5pZFByZWNhcmdhZG8pIHtcclxuICAgICAgICAgIHRoaXMuZmlsdHJhckRhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3N0cmFyRGF0byhkYXRvPzogYW55KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiBkYXRvID8gZGF0b1t0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvTW9zdHJhcl0gOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBmaWx0cmFyRGF0byh2YWw6IHN0cmluZyk6IGFueVtdIHtcclxuICAgIGlmICh0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvcykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZW5lcmljb0F1dG9jb21wbGV0YXIuZGF0b3MuZmlsdGVyKG9wdGlvbiA9PlxyXG4gICAgICAgIG9wdGlvblt0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5kYXRvTW9zdHJhcl0udG9Mb3dlckNhc2UoKS5pbmRleE9mKHZhbC50b0xvd2VyQ2FzZSgpKSA9PT0gMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmaWx0cmFyRGF0YSgpIHtcclxuICAgIGxldCBkYXRvcyA9IHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyLmRhdG9zO1xyXG4gICAgaWYgKGRhdG9zICYmIHRoaXMuZ2VuZXJpY29BdXRvY29tcGxldGFyKSB7XHJcbiAgICAgIGxldCBjYXJnYXIgPSBkYXRvcy5maW5kKGRhdG8gPT4gZGF0b1t0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5maWx0cm9QcmVjYXJnYWRvXSA9PSB0aGlzLmdlbmVyaWNvQXV0b2NvbXBsZXRhci5pZFByZWNhcmdhZG8pO1xyXG4gICAgICB0aGlzLmZvcm11bGFyaW8uZ2V0KHRoaXMubGFiZWwpLnNldFZhbHVlKGNhcmdhcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY2Npb25vT3BjaW9uKHNlbGVjY2lvbil7XHJcbiAgICB0aGlzLnNlbGVjY2lvbi5lbWl0KHNlbGVjY2lvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==
import { OnInit, SimpleChanges, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { GenericoAutoComplete } from '../../modelos/genericoAutocomplete';
export declare class AutocompleteComponent implements OnInit {
    constructor();
    genericoAutocompletar: GenericoAutoComplete;
    formulario: FormGroup;
    label: string;
    seleccion: EventEmitter<any>;
    requerido: boolean;
    DatosFiltrados: Observable<any[]>;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    mostrarDato(dato?: any): string | undefined;
    filtrarDato(val: string): any[];
    filtrarData(): void;
    seleccionoOpcion(seleccion: any): void;
}

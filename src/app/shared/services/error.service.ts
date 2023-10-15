import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class ErrorService {

    constructor(
        private readonly toastrService: ToastrService,
    ) {}

    setInvalidFormField(
        form: FormGroup,
        field: string,
        httpStatusCode?: number,
    ): void {
        form.controls[`${ field }`]
            .setErrors({ incorrect: true });

        ( httpStatusCode === 409 ) &&
            this.toastrService.info('Los campos marcados en rojo ya se encuentran registrados !');

        ( httpStatusCode === 400 ) &&
            this.toastrService.info('Los campos marcados en rojo no estan enviando información valida !');
        
        ( 
            httpStatusCode === 404 && 
            ( field === 'email' || field === 'phone' )
        ) &&
            this.toastrService.info(`
                No se ha encontrado el ${ ( field === 'email') ? 'email' : 'numero telefonico'} ingresado !
            `)
    }
}
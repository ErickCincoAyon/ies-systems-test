import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { CivilStatusFormModel } from "../models/civil-status-form.model";

@Injectable({
    providedIn: 'root',
})
export class CivilStatusService {

    protected apiUrl: string = environment.apiCivilUrl;

    constructor(
        private readonly http: HttpClient,
    ) {}

    sendCivilStatus(
        form: CivilStatusFormModel
    ) {
        return this.http
            .post(`${ this.apiUrl }/EstadoCivil`, form );
    }

}
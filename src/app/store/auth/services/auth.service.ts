import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginModel } from "../models/login.model";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserModel } from "../models/user.model";
import { LocalStorageService } from "src/app/shared/services/local-storage.service";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    
    protected apiUrl: string = environment.apiUrl;

    constructor(
        private readonly http: HttpClient,
        private readonly localStorageService: LocalStorageService,
    ) {}

    remember( form: LoginModel ): void {
        this.localStorageService.saveData( 'datapick', JSON.stringify( form ));
    }

    saveUser( user: Partial<UserModel> ): void {
        this.localStorageService.saveData('user', JSON.stringify( user ));
    }

    getUser(): string {
        return this.localStorageService.getData('user');
    }

    login( 
        form: LoginModel 
    ): Observable<Partial<UserModel>> {
        const { remember, ...rest } = form;
        return this.http
            .post(`${ this.apiUrl }/login`, rest );
    }

    logout(): void {
        this.localStorageService.removeData('user');
    }
}
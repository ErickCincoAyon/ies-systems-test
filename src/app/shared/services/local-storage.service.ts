import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    public key: string = environment.secretCrypto;

    protected encrypt( txt: string ): string {
        return CryptoJS.AES
            .encrypt( txt, this.key )
            .toString();
    }
    
    protected decrypt( txtToDecrypt: string ): string {
        return CryptoJS.AES
            .decrypt( txtToDecrypt, this.key )
            .toString( CryptoJS.enc.Utf8 );
    }

    public saveData( key: string, value: string ): void {
        localStorage.setItem( key, this.encrypt( value ));
    }

    public getData( key: string ): string {
        const data = localStorage.getItem( key ) ?? "";
        return this.decrypt( data );
    }
    public removeData( key: string ): void {
        localStorage.removeItem( key );
    }

    public clearData(): void {
        localStorage.clear();
    }
}
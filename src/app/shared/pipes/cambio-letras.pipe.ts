import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'cambioLetras' })
export class CambioLetrasPipe implements PipeTransform {
    transform(value: any, ...args: any[]): string {
        
        return value
            .replaceAll(/[A,a]/g, '4')
            .replaceAll(/[E,e]/g, '3')
            .replaceAll(/[I,i]/g, '1')
            .replaceAll(/[O,o]/g, '0')
            .replaceAll(/[U,u]/g, '9');
    }
}
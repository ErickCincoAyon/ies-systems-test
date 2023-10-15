import { HttpHeaders } from "@angular/common/http";

export interface ErrorModel {
    error: any;
    headers: HttpHeaders;
    message: string;
    status: number;
}
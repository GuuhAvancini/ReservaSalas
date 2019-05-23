import { Injectable } from "@angular/core";
import { EmailJs } from '../models/email.model';
import { RequestOptions } from "@angular/http";
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class EmailSeend {

    private host = 'https://api.emailjs.com/api/v1.0/email/send';

    constructor(private http: HttpClient) { }

    public emailJsSeend(paramentros : EmailJs) {


    }
}

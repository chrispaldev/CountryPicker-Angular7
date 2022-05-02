import { Configuration } from '../../configuration';
import { Observable } from 'rxjs';
import { CountryModel } from '../../model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CountryService {

    constructor(
        private http: HttpClient,
        private config: Configuration
    ) { }

    public getCountryList(): Observable<any[]> {
        const countryUrl = `${this.config.ApiUrl}`;
        return this.http.get<any>(countryUrl);
    }
}

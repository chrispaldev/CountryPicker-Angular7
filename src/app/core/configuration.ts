import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public ApiUrl: String = 'https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;callingCodes';
}

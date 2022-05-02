import { Component, forwardRef, OnInit,  ViewChild } from '@angular/core';

import { NgForm,
         ControlValueAccessor,
         NG_VALUE_ACCESSOR
} from '@angular/forms';

import { CountryService } from '../../../core/services/country/country.service';
import { CountryModel } from '../../../core/model';
import { SelectItem } from 'primeng/api';
import { parsePhoneNumberFromString, PhoneNumber } from 'libphonenumber-js';


@Component({
    selector: 'app-countrypicker',
    templateUrl: 'countrypicker.component.html',
    styleUrls: ['countrypicker.component.scss'],
    providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef( () => CountrypickerComponent),
        multi: true
      }
    ]
})

export class CountrypickerComponent implements OnInit, ControlValueAccessor {

  countryList: any[];
  countries: SelectItem[];
  selectedCountry: SelectItem;
  flag = false;
  phoneNumber: string;
  realNumber: string;
  private parseError: boolean;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
      this.getCountryList();
  }

  private getCountryList(): void {
      this.countryList = [];
      this.countryService.getCountryList().subscribe((e) => {
        this.countryList = e;

        this.countries = [];
        this.countryList.forEach((item) => {
            const countryObject = {
              label: item.name,
              alpha2Code: item.alpha2Code.toLowerCase(),
              value: item.callingCodes[0]
            };
            this.countries.push(countryObject);
        });
      });
  }

  private propagateChange = (_: any ) => {};

  public writeValue(obj: any): void {
      this.realNumber = obj ? obj : '';
  }

  public registerOnChange(fn: any): void {
     this.propagateChange = fn;
  }

  public registerOnTouched() { }

  isDisabledState(realNumber: string): void {
    const number = parsePhoneNumberFromString(this.realNumber);
    if ( number.isValid() === true ) {
       this.flag = true;
    }
  }

  changeValue(f: NgForm) {
    this.realNumber = `+` + f.value.selectedCountry + f.value.phoneNumber;
    this.isDisabledState(this.realNumber);
  }

  onInputChange() {
    this.phoneNumber = '';
  }

  public callPhoneNumber(): void {
    alert('Phone Number is correct');
    this.phoneNumber = '';
    this.flag = false;
  }

}

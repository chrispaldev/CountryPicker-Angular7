// Angular Imports
import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, CountrypickerComponent } from './components';
import { SERVICES } from '../core/services';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      BrowserModule,
      HttpClientModule,
      DropdownModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [
        COMPONENTS,
        CountrypickerComponent
    ],
    providers: [SERVICES],
    exports: [
      COMPONENTS,
    ]
})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}

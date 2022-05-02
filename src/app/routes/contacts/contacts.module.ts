// Angular Imports
import { NgModule } from '@angular/core';
import { ContactsComponent } from './contacts.component';
import { SharedModule } from '../../shared/shared.module';
import { SERVICES } from '../../core/services';
import {
    CountrypickerComponent
} from '../../shared/components/countrypicker/countrypicker.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [
        RouterModule,
        SharedModule
    ],
    declarations: [
        ContactsComponent
    ],
    providers: [SERVICES],

    exports: [
        ContactsComponent,
    ]
})
export class ContactsModule {

}

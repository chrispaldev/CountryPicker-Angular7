import { Component } from '@angular/core';
import { CountrypickerComponent } from '../../shared/components';
@Component({
    selector: 'app-contacts',
    templateUrl: 'contacts.component.html',
    styleUrls: ['contacts.component.scss']
})
export class ContactsComponent {
  phoneNumber: string;
}

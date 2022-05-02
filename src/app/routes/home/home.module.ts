// Angular Imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactsComponent } from '../contacts/contacts.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule {}

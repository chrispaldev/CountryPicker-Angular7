import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { routes } from './routes';
import { HomeModule } from './home/home.module';
import { ContactsModule } from './contacts/contacts.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(routes, { useHash: true}),
    HomeModule,
    ContactsModule
  ],
  exports: [RouterModule]
})
export class RoutesModule {
  constructor() {}
}




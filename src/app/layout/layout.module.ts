// Angular Imports
import { NgModule } from '@angular/core';
// This Module's Components
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
    imports: [
        SharedModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        RouterModule
    ],
    declarations: [
        LayoutComponent,
    ],
    exports: [
        LayoutComponent,
    ]
})
export class LayoutModule {

}

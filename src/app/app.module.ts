import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { Configuration } from './core/configuration';


@NgModule({
   declarations: [
      AppComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      LayoutModule,
      SharedModule.forRoot(),
      RoutesModule
   ],
   providers: [Configuration],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

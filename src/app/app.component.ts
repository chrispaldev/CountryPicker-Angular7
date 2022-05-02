import { Component, OnInit } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Country Picker';

  ngOnInit() {

  }
}

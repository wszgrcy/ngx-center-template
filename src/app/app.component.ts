import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-center-template';
  constructor(global: GlobalService) {
    console.log('主项目调用global:', global.random);
  }
}

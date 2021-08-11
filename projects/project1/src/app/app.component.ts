import { Component } from '@angular/core';
import { GlobalService } from '@center-main/app/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project1';
  constructor(global: GlobalService) {
    console.log('子项目调用global:', global.random);
  }
}

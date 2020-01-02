import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host : {'class': 'viewport'}
})
export class AppComponent {
  title = 'cxm';
}

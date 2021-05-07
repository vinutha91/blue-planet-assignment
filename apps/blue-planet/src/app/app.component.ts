import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'blue-planet-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuOptions = [
    { name: 'Option 1', code: 'option_1' },
    { name: 'Option 2', code: 'option_2' },
    { name: 'Option 3', code: 'option_3' }
  ];
  constructor(private http: HttpClient) { }
}

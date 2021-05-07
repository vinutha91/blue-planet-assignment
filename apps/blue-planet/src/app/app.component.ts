import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { AlarmsPayload, MenuOption } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'blue-planet-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: MenuOption[];
  alarms$: Observable<AlarmsPayload>

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.menuOptions = this.getMenuOptions();
    this.alarms$ = this.getAlarms();
  }

  private getMenuOptions(): MenuOption[] {
    return [
      { name: 'Option 1', code: 'option_1' },
      { name: 'Option 2', code: 'option_2' },
      { name: 'Option 3', code: 'option_3' }
    ]
  }

  private getAlarms(): Observable<AlarmsPayload> {
    return this.appService.getAlarms();
  }
}

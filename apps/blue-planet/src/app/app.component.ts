import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { MenuOption, TabMenuItem, Alarm } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';
import { DEFAULT_FILTER } from './app.const';

@Component({
  selector: 'blue-planet-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: MenuOption[];
  alarms$: Observable<{ alarms: Alarm[], tabMenuItems: TabMenuItem[] }>
  filter = DEFAULT_FILTER;
  activeItem: TabMenuItem;
  showPopup = false;
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.menuOptions = this.getMenuOptions();
    this.alarms$ = this.getAlarms(this.filter);
  }

  tabClick(tab: TabMenuItem) {
    this.activeItem = tab;
    this.alarms$ = this.getAlarms(tab.event);
  }

  homeClick(): void {
    this.showPopup = true;
  }

  backClick(): void {
    this.showPopup = true;
  }

  private getMenuOptions(): MenuOption[] {
    return [
      { name: 'Option 1', code: 'option_1' },
      { name: 'Option 2', code: 'option_2' },
      { name: 'Option 3', code: 'option_3' }
    ]
  }

  private getAlarms(filter: string): Observable<{ alarms: Alarm[], tabMenuItems: TabMenuItem[] }> {
    const alarmFiler = filter ?? 'ALARMS'
    return this.appService.getAlarms(alarmFiler);
  }
}

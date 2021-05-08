import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from './services/app.service';
import { MenuOption, TabMenuItem, Alarm, AlarmsResponse } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';
import { DEFAULT_FILTER, DialogSource } from './app.const';
import { ConfirmDialogComponent } from '@blue-planet-assignment/confirm-dialog';

@Component({
  selector: 'blue-planet-assignment-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuOptions: MenuOption[];
  alarms$: Observable<AlarmsResponse>
  filter = DEFAULT_FILTER;
  activeItem: TabMenuItem;
  showPopup = false;
  confirmDialogSource: DialogSource;
  @ViewChild('confirmDialog') confirmDialog: ConfirmDialogComponent;
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

  optionSelected(value: MenuOption): void {
    this.confirmDialogSource = DialogSource.MENU_OPTION;
    const message = `${value.name} - ${value.code} has been activated.`;
    this.confirmDialog.openDialog(message);
  }

  logoutClick(): void {
    this.confirmDialogSource = DialogSource.LOGOUT;
    const message = 'Are you sure you want to leave this page?'
    this.confirmDialog.openDialog(message);
  }

  confirmAction(event: boolean): void {
    if (this.confirmDialogSource === DialogSource.MENU_OPTION) {
      console.log(`Confirmation ${event ? 'Accepted' : 'Rejected'}!`)
      return;
    }

    if (this.confirmDialogSource === DialogSource.LOGOUT) {
      console.log(`Logged out!`)
      if (event) window.close(); // This wont work unless window is created by self.
      return;
    }
  }

  private getMenuOptions(): MenuOption[] {
    return [
      { name: 'Option 1', code: 'option_1' },
      { name: 'Option 2', code: 'option_2' },
      { name: 'Option 3', code: 'option_3' }
    ]
  }

  private getAlarms(filter: string): Observable<AlarmsResponse> {
    const alarmFiler = filter ?? 'ALARMS'
    return this.appService.getAlarms(alarmFiler);
  }
}

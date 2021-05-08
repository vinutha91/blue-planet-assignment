import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { AlarmsPayload, TabMenuItem, Alarm, AlarmColumn } from '@blue-planet-assignment/api-interfaces';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'blue-planet-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent implements OnInit {
  @Input() alarmsPayload: { alarms: Alarm[], tabMenuItems: TabMenuItem[] };
  @Input() activeItem: TabMenuItem;
  @Output() onTabClick: EventEmitter<string> = new EventEmitter<string>();
  columns: AlarmColumn[];
  selectedAlarm: Alarm;
  selectedAlarms: Alarm[];

  constructor() { }

  ngOnInit(): void {
    this.columns = this.generateTableColumns();
    this.alarmsPayload.tabMenuItems.forEach((tabMenuItem: TabMenuItem) => {
      tabMenuItem.command = this.getAlarmsByFilter.bind(this);
    });
    this.activeItem = this.activeItem === undefined ? this.alarmsPayload.tabMenuItems[0] : this.alarmsPayload.tabMenuItems.filter((menuItem) => {
      return menuItem.event === this.activeItem.event;
    })[0];
  }

  getAlarmsByFilter(event): void {
    this.onTabClick.emit(event.item);
  }

  private generateTableColumns(): AlarmColumn[] {
    const alarm = this.alarmsPayload.alarms[0];
    return Object.keys(alarm).map((key: string) => {
      return {
        field: key,
        header: `${key.charAt(0).toUpperCase()}${key.slice(1)}`
      };
    })
  }
}

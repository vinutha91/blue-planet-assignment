import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TabMenuItem, Alarm, AlarmColumn, PieChartModel, AlarmsResponse } from '@blue-planet-assignment/api-interfaces';
import { AlarmsService } from '../services/alarms.service';

@Component({
  selector: 'blue-planet-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent implements OnInit {
  @Input() alarmsPayload: AlarmsResponse;
  @Input() activeItem: TabMenuItem;
  @Output() onTabClick: EventEmitter<string> = new EventEmitter<string>();
  columns: AlarmColumn[];
  selectedAlarm: Alarm;
  selectedAlarms: Alarm[];
  isAllRowsSelected = false;
  chartData: PieChartModel;

  constructor(private alarmsService: AlarmsService) { }

  ngOnInit(): void {
    this.columns = this.generateTableColumns();
    this.chartData = this.getChartData();
    this.setActiveTabMenuItem();
  }

  getAlarmsByFilter(event): void {
    this.onTabClick.emit(event.item);
  }

  rowSelected(): void {
    this.alarmsService.addAlarms(this.selectedAlarms);
  }

  rowUnselected(): void {
    this.alarmsService.addAlarms(this.selectedAlarms);
  }

  allRowsSelected(): void {
    this.isAllRowsSelected = !this.isAllRowsSelected;
    if (this.isAllRowsSelected) {
      this.alarmsService.addAlarms(this.alarmsPayload.alarms);
    } else {
      this.alarmsService.resetAlarms([]);
    }
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

  private getChartData(): PieChartModel {
    return this.alarmsPayload.chartData;
  }

  private setActiveTabMenuItem(): void {
    this.alarmsPayload.tabMenuItems.forEach((tabMenuItem: TabMenuItem) => {
      tabMenuItem.command = this.getAlarmsByFilter.bind(this);
    });
    this.activeItem = this.activeItem === undefined ? this.alarmsPayload.tabMenuItems[0] : this.alarmsPayload.tabMenuItems.filter((menuItem) => {
      return menuItem.event === this.activeItem.event;
    })[0];
  }
}

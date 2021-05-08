import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { AlarmsPayload, TabMenuItem, Alarm } from '@blue-planet-assignment/api-interfaces';
import { MenuItem } from 'primeng/api'

@Component({
  selector: 'blue-planet-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent implements OnInit {
  @Input() alarms: { alarms: Alarm[], tabMenuItems: TabMenuItem[] };
  activeItem: MenuItem;
  cars = [
    {
      vin: 'abc',
      year: '2001',
      brand: 'hyundai',
      color: 'red'
    },
    {
      vin: 'abc',
      year: '2001',
      brand: 'hyundai',
      color: 'red'
    },
    {
      vin: 'abc',
      year: '2001',
      brand: 'hyundai',
      color: 'red'
    },
    {
      vin: 'abc',
      year: '2001',
      brand: 'hyundai',
      color: 'red'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.alarms.tabMenuItems.forEach((tabMenuItem: TabMenuItem) => {
      tabMenuItem.command = this.onTabClick;
    });
    this.activeItem = this.alarms.tabMenuItems[0];
  }

  onTabClick(event) {
    console.log(event);
  }
}

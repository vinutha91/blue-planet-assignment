import { Component, ChangeDetectionStrategy, OnInit, Output, EventEmitter } from '@angular/core';
import { Alarm } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';
import { AlarmsService } from '../services/alarms.service';

@Component({
  selector: 'blue-planet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  alarms$: Observable<Alarm[]>;
  @Output() onLogoutClick: EventEmitter<void> = new EventEmitter();
  constructor(private alarmsService: AlarmsService) { }

  ngOnInit(): void {
    this.alarms$ = this.alarmsService.getAlarms();
  }

  logoutClick(): void {
    this.onLogoutClick.emit();
  }
}

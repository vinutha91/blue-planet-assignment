import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ALARMS_MOCK } from './app.mock';
import { map } from 'rxjs/operators'
import { AlarmsPayload, TabMenuItem, Severity, Alarm, AlarmState } from '@blue-planet-assignment/api-interfaces';
import { FILTERS } from './app.const';

@Injectable()
export class AppService {
  getAlarms(filter: string): Observable<any> {
    return of(ALARMS_MOCK).pipe(
      map((alarmsPayload: AlarmsPayload) => {
        const tabMenuItems: TabMenuItem[] = [...this.getDefaultTabMenuItems()];
        alarmsPayload.facets['condition-severity'].forEach((severities: Severity, i: number) => {
          tabMenuItems.push({
            label: `${severities.key.charAt(0).toUpperCase()}${severities.key.slice(1).toLowerCase()}(${severities.count})`,
            index: i + 2,
            event: severities.key.toUpperCase(),
          });
        });

        const alarms: Alarm[] = this.generateAlarms(alarmsPayload, filter);
        return { alarms, tabMenuItems };
      })
    );
  }

  private getDefaultTabMenuItems(): TabMenuItem[] {
    return [
      {
        label: 'Alarms',
        event: 'ALARMS',
        index: 0,
        icon: 'pi pi-fw pi-clock'
      },
      {
        label: 'Node',
        event: 'NODE',
        index: 1,
        icon: 'pi pi-fw pi-link'
      }
    ]
  }

  private generateAlarms(alarmsPayload: AlarmsPayload, filter: string): Alarm[] {
    const allAlarms = [...alarmsPayload.items];

    if (filter === FILTERS.ALARMS) {
      return allAlarms.map((alarm) => {
        return this.generateAlarm(alarm);
      });
    }

    if (filter === FILTERS.NODE) {
      return allAlarms.map((alarm) => {
        return this.generateAlarm(alarm);
      }).sort((alarm1: Alarm, alarm2: Alarm) => {
        if (alarm1.nodeType > alarm2.nodeType) return 1;
        if (alarm1.nodeType < alarm2.nodeType) return -1;
        return 0;
      });
    }
  }

  private generateAlarm(alarm): Alarm {
    const generatedAlarm: Alarm = {
      severity: alarm['condition-severity'],
      description: alarm['native-condition-type'],
      nodeType: alarm['node-type'],
      clearable: alarm['manual-clearable'] ? 'Yes' : 'No',
      state: AlarmState[alarm.state],
      raiseTime: new Date(alarm['last-raise-time'])
    }
    return generatedAlarm;
  }
}

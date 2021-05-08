import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ALARMS_MOCK } from './app.mock';
import { map } from 'rxjs/operators'
import { AlarmsPayload, TabMenuItem, Severity, Alarm, AlarmState } from '@blue-planet-assignment/api-interfaces';

@Injectable()
export class AppService {
  getAlarms(): Observable<any> {
    return of(ALARMS_MOCK).pipe(
      map((alarmsPayload: AlarmsPayload) => {
        const tabMenuItems: TabMenuItem[] = [...this.getDefaultTabMenuItems()];
        alarmsPayload.facets['condition-severity'].forEach((severities: Severity) => {
          tabMenuItems.push({
            label: `${severities.key.charAt(0).toUpperCase()}${severities.key.slice(1).toLowerCase()}(${severities.count})`,
            event: severities.key.toUpperCase(),
          });
        });

        const alarms: Alarm[] = this.generateAlarms(alarmsPayload);
        return { alarms, tabMenuItems };
      })
    );
  }

  private getDefaultTabMenuItems() {
    return [
      {
        label: 'Alarms',
        event: 'ALARMS',
        icon: 'pi pi-fw pi-clock'
      },
      {
        label: 'Node',
        event: 'NODE',
        icon: 'pi pi-fw pi-link'
      }
    ]
  }

  private generateAlarms(alarmsPayload: AlarmsPayload): Alarm[] {
    const allAlarms = [...alarmsPayload.items];
    return allAlarms.map((alarm) => {
      return this.generateAlarm(alarm);
    });
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

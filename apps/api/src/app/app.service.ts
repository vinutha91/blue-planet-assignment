import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ALARMS_MOCK } from './app.mock';
import { map } from 'rxjs/operators'
import { AlarmsPayload, TabMenuItem, Severity } from '@blue-planet-assignment/api-interfaces';

@Injectable()
export class AppService {
  getAlarms(): Observable<any> {
    return of(ALARMS_MOCK).pipe(
      map((alarmsPayload: AlarmsPayload) => {
        const tabMenuItems: TabMenuItem[] = [];
        tabMenuItems.push(
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
        );
        alarmsPayload.facets['condition-severity'].forEach((severities: Severity) => {
          tabMenuItems.push({
            label: `${severities.key}(${severities.count})`,
            event: severities.key.toUpperCase(),
          });
        });
        return { alarmsPayload, tabMenuItems };
      })
    );
  }
}

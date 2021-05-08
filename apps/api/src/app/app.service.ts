import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ALARMS_MOCK } from './app.mock';
import { map } from 'rxjs/operators'
import { AlarmsPayload, TabMenuItem, Severity, Alarm, AlarmState, PieChartModel, AlarmsResponse } from '@blue-planet-assignment/api-interfaces';
import { FILTERS } from './app.const';

@Injectable()
export class AppService {
  getAlarms(filter: string): Observable<AlarmsResponse> {
    return of(ALARMS_MOCK).pipe(
      map((alarmsPayload: AlarmsPayload) => {
        const tabMenuItems: TabMenuItem[] = [...this.getDefaultTabMenuItems()];
        alarmsPayload.facets['condition-severity'].forEach((severity: Severity, i: number) => {
          tabMenuItems.push({
            label: `${severity.key.charAt(0).toUpperCase()}${severity.key.slice(1).toLowerCase()}(${severity.count})`,
            index: i + 2,
            event: severity.key.toUpperCase(),
          });
        });
        let chartData: PieChartModel = {
          labels: [],
          datasets: [{
            data: [],
            backgroundColor: [],
            hoverBackgroundColor: []
          }]
        };
        chartData.labels = this.getChartLabels(alarmsPayload.facets['condition-severity']);
        chartData.datasets[0].data = this.getChartData(alarmsPayload.facets['condition-severity']);
        chartData.labels.forEach(() => {
          const color = this.generateRandomColor();
          chartData.datasets[0].backgroundColor.push(color);
          chartData.datasets[0].hoverBackgroundColor.push(color);
        })
        const alarms: Alarm[] = this.generateAlarms(alarmsPayload, filter);
        return { alarms, chartData, tabMenuItems };
      })
    );
  }

  private getChartLabels(severities: Severity[]): string[] {
    return severities.map((severity: Severity) => {
      return severity.key;
    })
  }

  private getChartData(severities: Severity[]): number[] {
    return severities.map((severity: Severity) => {
      return severity.count;
    })
  }

  private generateRandomColor(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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

    return allAlarms.map((alarm) => {
      return this.generateAlarm(alarm);
    }).filter((alarm: Alarm) => {
      return alarm.severity === filter;
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

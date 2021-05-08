import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlarmsPayload, TabMenuItem } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATHS } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getAlarms(): Observable<{ alarmsPayload: AlarmsPayload, tabMenuItems: TabMenuItem[] }> {
    const url = `${API_PATHS.BASE_PATH}${API_PATHS.ALARMS.GET_ALARMS}`;
    return this.http.get(url).pipe(
      map((response: { alarmsPayload: AlarmsPayload, tabMenuItems: TabMenuItem[] }) => {
        return response
      })
    );
  }
}

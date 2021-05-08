import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlarmsResponse } from '@blue-planet-assignment/api-interfaces';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { API_PATHS } from '../app.const';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  getAlarms(filter: string): Observable<AlarmsResponse> {
    const url = `${API_PATHS.BASE_PATH}${API_PATHS.ALARMS.GET_ALARMS}?filter=${filter}`;
    return this.http.get(url).pipe(
      map((response: AlarmsResponse) => {
        return response;
      }),
      shareReplay(1)
    );
  }
}

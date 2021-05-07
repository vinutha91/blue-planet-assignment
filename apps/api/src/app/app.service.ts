import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { ALARMS_MOCK } from './app.mock';

@Injectable()
export class AppService {
  getAlarms(): Observable<any> {
    return of(ALARMS_MOCK);
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { Observable } from 'rxjs';
import { AlarmsResponse } from '@blue-planet-assignment/api-interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('alarms')
  getAlarms(@Query('filter') filter: string): Observable<AlarmsResponse> {
    return this.appService.getAlarms(filter);
  }
}

import { Controller, Get, Param, Query } from '@nestjs/common';

import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('alarms')
  getAlarms(@Query('filter') filter: string): Observable<any> {
    return this.appService.getAlarms(filter);
  }
}

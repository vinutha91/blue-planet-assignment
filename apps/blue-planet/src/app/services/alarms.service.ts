import { Injectable } from '@angular/core';
import { Alarm } from '@blue-planet-assignment/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlarmsService {
    private selectedAlarms: BehaviorSubject<Alarm[]> = new BehaviorSubject([]);

    addAlarms(alarms: Alarm[]): void {
        this.selectedAlarms.next(alarms);
    }

    resetAlarms(alarms: Alarm[]): void {
        this.selectedAlarms.next([]);
    }

    getAlarms(): Observable<Alarm[]> {
        return this.selectedAlarms.asObservable();
    }
}

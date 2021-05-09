import { ComponentFixture, TestBed } from '@angular/core/testing';
import { isObservable } from 'rxjs';
import { AlarmsService } from '../services/alarms.service';
import { MockChildComponent } from '../test-util/mock-child.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        MockChildComponent({
          selector: 'p-overlayPanel'
        }),
        MockChildComponent({
          selector: 'i',
          inputs: ['value']
        })
      ],
      providers: [
        AlarmsService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a method ngOnInit which calls getAlarms of alarmsService', () => {
    const alarms$ = component.ngOnInit();
    expect(isObservable(component.alarms$)).toBeTruthy();
  })

  it('should have a method logoutClick which calls emit method of onLogoutClick event emitter', () => {
    const emitSpy = jest.spyOn(
      component.onLogoutClick,
      'emit'
    );
    component.logoutClick();
    expect(emitSpy).toHaveBeenCalled();
  })
});

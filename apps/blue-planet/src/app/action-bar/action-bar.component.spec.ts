import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockChildComponent } from '../test-util/mock-child.component';

import { ActionBarComponent } from './action-bar.component';

describe('ActionBarComponent', () => {
  let component: ActionBarComponent;
  let fixture: ComponentFixture<ActionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ActionBarComponent,
        MockChildComponent({
          selector: 'p-dropdown',
          inputs: ['placeholder', 'class', 'options', 'formControlName']
        }),
        MockChildComponent({
          selector: 'div',
          inputs: ['formGroup']
        })
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a method homeClick which calls emit method of onHomeClick event emitter', () => {
    const emitSpy = jest.spyOn(
      component.onHomeClick,
      'emit'
    );
    component.homeClick();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should have a method backClick which calls emit method of onBackClick event emitter', () => {
    const emitSpy = jest.spyOn(
      component.onBackClick,
      'emit'
    );
    component.backClick();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should have a method optionSelected which calls emit method of onOptionSelected event emitter', () => {
    const emitSpy = jest.spyOn(
      component.onOptionSelected,
      'emit'
    );
    component.optionSelected({});
    expect(emitSpy).toHaveBeenCalled();
  });
});

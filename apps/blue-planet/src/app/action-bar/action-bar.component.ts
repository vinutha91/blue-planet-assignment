import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuOption } from '@blue-planet-assignment/api-interfaces';

@Component({
  selector: 'blue-planet-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent {
  @Input() menuOptions: MenuOption[];
  @Output() onHomeClick: EventEmitter<void> = new EventEmitter();
  @Output() onBackClick: EventEmitter<void> = new EventEmitter();
  actionBarForm: FormGroup = new FormGroup({
    selectedOption: new FormControl('')
  });

  homeClick(): void {
    this.onHomeClick.emit();
  }

  backClick(): void {
    this.onBackClick.emit();
  }
}

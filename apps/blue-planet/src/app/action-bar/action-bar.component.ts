import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MenuOption } from '@blue-planet-assignment/api-interfaces';

@Component({
  selector: 'blue-planet-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBarComponent implements OnInit {
  @Input() menuOptions: MenuOption[];
  actionBarForm: FormGroup = new FormGroup({
    selectedOption: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

}

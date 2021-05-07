import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'blue-planet-details-panel',
  templateUrl: './details-panel.component.html',
  styleUrls: ['./details-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'blue-planet-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  @Output() onConfirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(private confirmationService: ConfirmationService) { }

  openDialog(message: string) {
    this.confirmationService.confirm({
      message: message,
      accept: () => {
        this.onConfirmAction.emit(true);
      },
      reject: () => {
        this.onConfirmAction.emit(false);
      }
    });
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [CommonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  exports: [
    ConfirmDialogComponent
  ]
})
export class ConfirmDialogLibModule { }

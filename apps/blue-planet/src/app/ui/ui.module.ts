import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ChartModule } from 'primeng/chart';

const PRIME_NG_MODULES = [
  ButtonModule,
  DropdownModule,
  TabMenuModule,
  TableModule,
  BadgeModule,
  OverlayPanelModule,
  DialogModule,
  ChartModule
];

@NgModule({
  declarations: [],
  imports: PRIME_NG_MODULES,
  exports: PRIME_NG_MODULES
})
export class UiModule { }

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';

const PRIME_NG_MODULES = [
  ButtonModule,
  DropdownModule,
  TabMenuModule,
  TableModule
];

@NgModule({
  declarations: [],
  imports: PRIME_NG_MODULES,
  exports: PRIME_NG_MODULES
})
export class UiModule { }

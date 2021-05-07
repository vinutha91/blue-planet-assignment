import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

const PRIME_NG_MODULES = [
  ButtonModule,
  DropdownModule,
  TabMenuModule
];

@NgModule({
  declarations: [],
  imports: PRIME_NG_MODULES,
  exports: PRIME_NG_MODULES
})
export class UiModule { }

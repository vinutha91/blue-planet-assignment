import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { NgModule } from '@angular/core';

const PRIME_NG_MODULES = [
  ButtonModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: PRIME_NG_MODULES,
  exports: PRIME_NG_MODULES
})
export class UiModule { }

import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';

const PRIME_NG_MODULES = [
  ButtonModule
];

@NgModule({
  declarations: [],
  imports: PRIME_NG_MODULES,
  exports: PRIME_NG_MODULES
})
export class UiModule { }

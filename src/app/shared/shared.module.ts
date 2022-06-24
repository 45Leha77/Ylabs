import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
  exports: [DropdownComponent],
})
export class SharedModule {}

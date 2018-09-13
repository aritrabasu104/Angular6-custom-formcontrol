import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { M2bRestAutocompleteComponent } from './form-control/m2b-rest-autocomplete/m2b-rest-autocomplete.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    CommonModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [M2bRestAutocompleteComponent],
  exports: [M2bRestAutocompleteComponent]
})
export class SharedModule { }

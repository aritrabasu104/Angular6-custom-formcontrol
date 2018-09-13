import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ReactiveFormsComponent } from '@app/featured/forms/reactive-forms/reactive-forms.component'
import { SharedModule } from '@app/shared'
import { MatInputModule,MatFormFieldModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [ReactiveFormsComponent],
  providers:[]
})
export class FeaturedModule { }

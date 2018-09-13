import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { WebService } from '@app/core';
import { Country } from '@app/shared';
@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  reactiveForm: FormGroup
  countries: Country[]
  showPropertyName: string = "name"
  savePropertyName: string = "alpha3Code"
  placeHolderName : string  = "Country"
  constructor(private formBuilder: FormBuilder, private webService: WebService) { }

  ngOnInit() {
    this.createForm()
    this.webService.getAllCountries().subscribe(response => this.countries = response)
  }
  createForm() {
    this.reactiveForm = this.formBuilder.group({
      name: '',
      email: '',
      country: ''
    })
  }

}

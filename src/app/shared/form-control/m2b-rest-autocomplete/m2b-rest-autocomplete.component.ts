import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'm2b-rest-autocomplete',
  templateUrl: './m2b-rest-autocomplete.component.html',
  styleUrls: ['./m2b-rest-autocomplete.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => M2bRestAutocompleteComponent),
      multi: true
    }
  ]
})
export class M2bRestAutocompleteComponent implements ControlValueAccessor {
  @Input()
  elements

  @Input()
  showProperty

  @Input()
  saveProperty

  @Input()
  placeHolderName

  private _onTouchedCallback: () => {};
  private _onChangeCallback: (_: any) => {};
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | any>(''),
        map(value => typeof value === 'string' ? value : value[this.showProperty]),
        map(name => name && name.length > 0 ? this._filter(name) : (this.elements ? this.elements.slice() : null))
      )
    this.onChanges()
  }
  onChanges(): void {
    this.myControl.valueChanges.subscribe(val => this.propagateChange());
  }
  propagateChange() {
    if (this.myControl.value != null && this.myControl.value.length > 0) {
      let result = this.elements.filter(option =>
        option[this.showProperty] == this.myControl.value)
      if (result.length === 1)
        this._onChangeCallback(result[0][this.saveProperty])
    }
  }


  //From ControlValueAccessor interface
  writeValue(value: any) {
    if (value !== undefined) {
      this.myControl.setValue(value)
    }
  }

  //From ControlValueAccessor interface
  registerOnChange(fn: any) {
    this._onChangeCallback = fn;
  }

  //From ControlValueAccessor interface
  registerOnTouched(fn: any) {
    this._onTouchedCallback = fn;
  }


  displayFn(value): string {
    return value ? value : undefined
  }

  private _filter(val: string): any[] {
    const filterValue = val.toLowerCase();

    return this.elements.filter(option => option[this.showProperty].toLowerCase().indexOf(filterValue) === 0);
  }
}

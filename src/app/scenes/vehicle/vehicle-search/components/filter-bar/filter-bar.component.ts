import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Search } from './../../../model/search';

@Component({
  selector: 'app-filter-bar',
  template: `
  <div class="form-group">
    <form [formGroup]="formSearch" (ngSubmit)="doSearch(formSearch.value)">

      <div class="input-group">
        <input type="text" class="form-control" placeholder="PLACA"  formControlName="placa">
        <span class="input-group-addon">
          <button type="submit" class="btn"><i class="fa fa-search"></i></button>
        </span>
      </div>
      <small  class="form-text text-muted">Informe pelo menos os 2 primeiros dígitos da placa.</small>

    </form>
  </div>
  `,
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {

  formSearch: FormGroup;
  @Output() doSearchEvent: EventEmitter<Search> = new EventEmitter<Search>();

  constructor(private formBuilder: FormBuilder) {
    this.formSearch = formBuilder.group({
      'placa': [null, Validators.required]
    });
  }

  doSearch(search) {
    if (this.formSearch.valid) {
      this.doSearchEvent.emit(search);
    }
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Search } from './../../model/search';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {

  formSearch: FormGroup
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

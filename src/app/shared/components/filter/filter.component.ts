import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from '../../../core/services/filter.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})

export class FilterComponent implements OnInit{

  searchString: string = '';
  selectedSet: string = '';

  @Output() filtersChange = new EventEmitter<Filter>();

  constructor() { }

  ngOnInit(): void {
  }

  // applyFilters() {
  //   const filters = {
  //     searchString: this.searchString,
  //     selectedSet: this.selectedSet
  //   };
  //   this.filtersChange.emit(filters);
  // }

  // getSelectedSet(setFilter) {
  //   this.selectedSet = document.getElementsByName('setFilter')
  // }
}

export class FilterEvent extends Event {
  constructor(public readonly filters: Filter) {
    super('');
  }
}





  // getFilters(): any {
  //   const filters = {
  //     searchString: this.searchString,
  //     selectedSet: this.selectedSet
  //   };
  //   return filters;
  // }

// interface Filter {
  //   searchString?: string;
  //   selectedSet?: string;
  // }

    // applyFilters() {
    //   const filters: Filter = {
    //     string: this.searchString,
    //     set: this.selectedSet,
    //   };
    // }

    // onSearchChange(searchText: string) {
    //   this.searchString = searchText;
    //   // this.emitFilters();
    // }

    // onSetChange(selectedSet: string) {
    //   this.selectedSet = selectedSet;
    //   // this.emitFilters();
    // }

    // emitFilters() {
    //   const filters: Filter = {
    //     string: this.searchString,
    //     set: this.selectedSet
    //   };
    //   this.filtersChange.emit(filters);
    // }

    // applyFilters() {
    //   const filters: Filter = {
    //     string: this.searchString,
    //     set: this.selectedSet
    //   };
    //   this.filtersChange.emit(new FilterEvent(filters))
    // }



import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  

  searchForm = new FormControl();
  suggestions: string[] = [
    'Kurkure',
    'Lays',
    'Maggi',
    'Gillette Shave Cream',
    'Zep Toilet Cleaner'
  ];
  filteredSuggestions: string[] = [];

  constructor() {
    
    this.searchForm.valueChanges.subscribe(value => {
      this.filteredSuggestions = this.filterSuggestions(value);
    });
    
  }

  

  filterSuggestions(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.suggestions.filter(suggestion => suggestion.toLowerCase().includes(filterValue));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    // Handle the selected suggestion here
  }

  

}
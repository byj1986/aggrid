import { Component, OnInit } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-multicombobox',
  templateUrl: './multicombobox.component.html',
  styleUrls: ['./multicombobox.component.css']
})
export class MulticomboboxComponent implements OnInit {

  cities1: SelectItem[];

  cities2: City[];

  selectedCities1: City[];

  selectedCities2: City[];
  constructor() {
    // SelectItem API with label-value pairs
    this.cities1 = [
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];

    // An array of cities
    this.cities2 = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit() {
  }

  onValueChanged() {
    console.log(this.selectedCities1);
    console.log(this.selectedCities2);
  }
}

class City {
  name: string;
  code: string;

}

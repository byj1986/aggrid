import { Component, OnInit } from '@angular/core';
import { MulticomboboxComponent } from '../multicombobox/multicombobox.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title = 'app';
  // manufactories = ['Honda', 'Toyota', 'Ford', 'Porsche'];
  columnDefs = [
    {
      headerName: 'Make', field: 'make', editable: true,
      cellEditorFramework: MulticomboboxComponent,
      cellEditorParams: {
        options: [
          { label: 'Honda', value: { id: 1 } },
          { label: 'Toyota', value: { id: 2 } },
          { label: 'Ford', value: { id: 3 } },
          { label: 'Porsche', value: { id: 4 } }
        ]
      }
    },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price', editable: true },
    {
      headerName: 'PublishDate', field: 'date', editable: true,
      cellEditorFramework: DatepickerComponent
    },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000, date: '1/1/1990' },
    { make: 'Ford', model: 'Mondeo', price: 32000, date: '12/15/2005' },
    { make: 'Porsche', model: 'Boxter', price: 72000, date: '6/20/2016', }
  ];
  constructor() { }

  ngOnInit() {
  }

}

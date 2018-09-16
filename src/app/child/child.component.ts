import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  title = 'app';

  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' },
    { headerName: 'PublishDate', field: 'date' },
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

import { Component, OnInit } from '@angular/core';
import { Calendar } from 'primeng/calendar';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  value: Date;
  constructor() { }

  ngOnInit() {
  }

  onValueChanged() {
    console.log(this.value);
  }
}

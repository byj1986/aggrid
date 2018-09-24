import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, CalendarModule } from 'primeng/calendar';
import { ICellEditorParams, IAfterGuiAttachedParams } from 'ag-grid-community';
import { ICellEditorAngularComp } from 'ag-grid-angular';
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements ICellEditorAngularComp, OnInit {
  @ViewChild('calendar') calendar: CalendarModule;
  value: Date;
  getValue() {
  }
  isPopup?(): boolean {
    return true;
  }

  isCancelBeforeStart?(): boolean {
    return false;
  }
  isCancelAfterEnd?(): boolean {
    return false;
  }
  focusIn?(): void {
  }
  focusOut?(): void {
  }
  agInit(params: any): void {
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  constructor() { }

  ngOnInit() {
  }

  onValueChanged() {
    console.log(this.value);
  }
}

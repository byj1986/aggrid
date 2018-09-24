import { Component, OnInit, ViewChild } from '@angular/core';
import { MultiSelectModule, MultiSelect } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';
import { ICellEditorAngularComp } from 'ag-grid-angular';
import { ICellEditorParams, IAfterGuiAttachedParams } from 'ag-grid-community';
@Component({
  selector: 'app-multicombobox',
  templateUrl: './multicombobox.component.html',
  styleUrls: ['./multicombobox.component.css']
})
export class MulticomboboxComponent implements ICellEditorAngularComp, OnInit {
  @ViewChild('multiSelect') multiSelect: MultiSelect;

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
    console.log(params.options);
    this.multiSelect.options = params.options;
    console.log(this.multiSelect.options);
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
  }

  constructor() {
    console.log('aaaabbbb');
  }

  ngOnInit() {
  }

  onValueChanged() {
  }
}

class City {
  name: string;
  code: string;
}

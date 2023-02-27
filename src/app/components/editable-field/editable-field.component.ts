import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges, OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-editable-field',
  templateUrl: './editable-field.component.html',
  styleUrls: ['./editable-field.component.css']
})
export class EditableFieldComponent implements OnInit{
  @Input() label: string | undefined;
  @Input() field: string = "" ;
  @Input() myProfil: string | undefined;
  @Input() fieldModify: string | undefined;
  @Input() type: string = "text";
  @Output() myNewProfilChange = new EventEmitter<any>();
  editSelected: boolean = false;

  value: string | null = null;

  constructor() {}

  ngOnInit() {
    this.editSelected = false;
    this.value = null;
  }

  editMode(b: boolean) {
    this.editSelected = b;
  }

  deleteField() {
    this.value = null;
    this.myNewProfilChange.emit({[this.field] : this.value});
  }

  onSelect() {
    this.myNewProfilChange.emit({[this.field]  : this.value});
  }
}

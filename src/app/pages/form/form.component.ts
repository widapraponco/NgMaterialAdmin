import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialog } from 'src/app/components/dialog/dialog.component';
import { Field, FieldConfig } from 'src/helpers/form/models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  questions: FieldConfig[];
  group: FormGroup = new FormGroup({
    eat: new FormControl()
  });

  control = new FormControl();

  constructor(public dialog: MatDialog) { 
    this.control = this.group.get('eat') as FormControl;
    this.questions = [
      {type: 'input', name: 'search', label: 'search'},
      {type: 'textarea', name: 'address', label: 'address'},
      {type: 'autocomplete', name: 'auto', label: 'auto complete'},
      {type: 'select', name: 'select', label: 'select'},
      {type: 'datepicker', name: 'calendar', label: 'calendar'},
      // {type: 'checkbox', name: 'checkbox', label: 'checkbox'},
      // {type: 'chips', name: 'chips', label: 'chips'},
      {type: 'multiselect', name: 'multiselect', label: 'multi select'},
      {type: 'file', name: 'file', accept: ['.jpg'], label: 'file upload'},
      {type: 'multifile', name: 'multifile', accept: ['.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg', '.jpg'], label: 'file upload'},
      {type: 'raisedBtn', name: 'submit', label: 'submit'},
    ]
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialog, {
      width: '450px',
      data: {title: 'test', description: 'description'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed '+ result);
    });
  }

}

import { AfterViewInit, Component, Directive, Inject, TemplateRef, ViewChild } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  okButton?: string;
  cancelButton?: string;
}

@Directive({
  selector: 'base-dialog'
})
export class BaseDialog {
  constructor(public dialogRef: MatDialogRef<BaseDialog>) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
}

export interface ConfirmationDialogData extends DialogData{
  description: string;
}

@Component({
  selector: 'confirm-dialog',
  templateUrl: './html/confirm-dialog.component.html',
})
export class ConfirmationDialog extends BaseDialog {
  
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData
  ) {
    super(dialogRef);
  }

  ngAfterViewInit(): void {
    
  }
}
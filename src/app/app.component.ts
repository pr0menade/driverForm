import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent  {
    dialogRef: MdDialogRef<DriverDialog>;

    constructor(
        public dialog: MdDialog,
        public viewContainerRef: ViewContainerRef) { }

    openDialog() {
        let config = new MdDialogConfig();
        config.viewContainerRef = this.viewContainerRef;

        this.dialogRef = this.dialog.open(DriverDialog, config);

        this.dialogRef.afterClosed().subscribe(result => {
            console.log('result: ' + result);
            this.dialogRef = null;
        });
    }
}



@Component({
    selector: 'driver-dialog',
    template: `
    <add-driver></add-driver>
    <button md-raised-button color="accent" type="button" (click)="dialogRef.close('no')">Cancel</button>
    <button md-raised-button color="primary" type="button" (click)="dialogRef.close('yes')">OK</button>
  `
})
export class DriverDialog {
    constructor(public dialogRef: MdDialogRef<DriverDialog>) { }
}

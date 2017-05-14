import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';

import { Driver } from './driver';

@Component({

    selector: 'add-driver',
    moduleId: module.id,
    templateUrl: './driver2.component.html',
    styleUrls: ['./driver.component.css']
})
export class DriverComponent  {
    customer: Driver= new Driver();

    save(driverForm: NgForm) {
        console.log(driverForm.form);
        console.log('Saved: ' + JSON.stringify(driverForm.value));
    }
}


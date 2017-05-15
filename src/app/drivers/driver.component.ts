import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material';

/*
import {DriversService} from './drivers.service';
*/

import { Driver } from './driver';

@Component({

    selector: 'add-driver',
    moduleId: module.id,
    templateUrl: 'driver.component.html',
    styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit{

    driverForm: FormGroup;
    driver: Driver[] =[];

    constructor(private fb: FormBuilder){}

    ngOnInit():void{
        this.driverForm = this.fb.group({
            lastName: '',
            firstName: '',
            patronymic: '',
            dateofbirth: '',
            gender: 'male'

        });


    }
    save() {
        console.log(this.driverForm);
        console.log('Saved: ' + JSON.stringify(this.driverForm.value));
    }

    populateTestData(): void {
        this.driverForm.patchValue({
            firstName: 'Kristina',
            lastName: 'Ivanova',
            patronymic: 'Vladimirovna',
            dateofbirth: '1987-07-09',
            gender: 'female'

        });
    }

/*
 driver: Driver= new Driver();

    constructor(private driversService: DriversService) { }

    ngOnInit() {
        this.driversService.getDrivers()
            .subscribe(data => this.drivers = data);
    }

    save(driverForm: NgForm) {
        console.log(driverForm.form);
        console.log('Saved: ' + JSON.stringify(driverForm.value));
    }*/
}


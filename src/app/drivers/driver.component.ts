import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
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
            lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            firstName: ['', [Validators.required, Validators.minLength(3)]],
            patronymic: ['', Validators.minLength(3)],
            dateofbirth: '',
            gender: 'male',
            passport: this.fb.group({
                series: ['', [Validators.minLength(2), Validators.maxLength(2)]],
                passportN: ['', [Validators.minLength(6), Validators.maxLength(6)]],
                dateofissue: '',
                bywhom: ['', Validators.maxLength(200)]
            }),
            address1: ['', Validators.maxLength(300)],
            address2: ['', Validators.maxLength(300)]
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


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class DriversService {

    private url: string = "http://jsonplaceholder.typicode.com/users";

    constructor(private http: Http) { }

    getDrivers(){
        return this.http.get(this.url)
            .map((res:any) => res.json());
    }

    getDriver(id:any){
        return this.http.get(this.getDriverUrl(id))
            .map((res:any) => res.json());
    }

    addDriver(driver: any){
        return this.http.post(this.url, JSON.stringify(driver))
            .map((res:any) => res.json());
    }

    updateDriver(driver: any){
        return this.http.put(this.getDriverUrl(driver.id), JSON.stringify(driver))
            .map((res:any) => res.json());
    }

    deleteDriver(id: any){
        return this.http.delete(this.getDriverUrl(id))
            .map((res:any) => res.json());
    }

    private getDriverUrl(id: any){
        return this.url + "/" + id;
    }
}





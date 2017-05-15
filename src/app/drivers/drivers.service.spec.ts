import { TestBed, async, inject } from '@angular/core/testing';
import { DriversService } from './drivers.service';

describe('Service: Users', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [DriversService]
        });
    });

    it('should ...', inject([DriversService], (service: DriversService) => {
        expect(service).toBeTruthy();
    }));
});
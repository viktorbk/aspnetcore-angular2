import { Injectable } from '@angular/core';

export class Temp {
    hour: string;
    temp: number;
}

let TEMP: Temp[] = [{
            hour: '08:00',
            temp: 20
        }, {
            hour: '10:00',
            temp: 25
        }, {
            hour: '12:00',
            temp: 30
        }, {
            hour: '14:00',
            temp: 28
        }, {
            hour: '16:00',
            temp: 20
        }, {
            hour: '18:00',
            temp: 10
        }, {
            hour: '20:00',
            temp: 4
        }];

@Injectable()
export class TempService {
  getTemps() {
    return TEMP;
  }
}
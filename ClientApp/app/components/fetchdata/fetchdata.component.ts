import { Component, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { DxDataGridComponent } from 'devextreme-angular'; 
import { Temp, TempService } from '../../../service/temp.service';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html',
    providers: [TempService]
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    chartSeriesTypes = ['bar', 'line', 'spline'];
    temps: Temp[];

    @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
    constructor(http: Http, private tempService: TempService) {
        http.get('/api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        });
        this.temps = tempService.getTemps();
    }

    refresh() {
        this.dataGrid.instance.refresh();
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

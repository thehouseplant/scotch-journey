import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-esri-map',
    templateUrl: './esri-map.component.html',
    styleUrls: ['./esri-map.component.css']
})

export class EsriMapComponent implements OnInit {
    webMapProperties: __esri.WebMapProperties = {
        portalItem: {
            id: 'b56220a739544f1d8b13fcd6c55e6872'
        }
    };
    mapViewProperties: __esri.MapViewProperties = {
        zoom: 16
    };
    map: __esri.Map;
    mapView: __esri.MapView;

    constructor() { }

    ngOnInit() { }

    onMapInit(mapInfo: {map: __esri.Map, mapView: __esri.MapView}) {
        this.map = mapInfo.map;
        this.mapView = mapInfo.mapView;
    }
}

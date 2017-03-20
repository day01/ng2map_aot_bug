import { Injectable } from '@angular/core';
import MapTypeStyle = google.maps.MapTypeStyle;
@Injectable()
export class GoogleMapsServiceProvider {
  public get getStyles(): MapTypeStyle[] {
    return [
      {
        featureType: 'all',
        stylers: [
          {
            saturation: 0
          },
          {
            hue: '#e7ecf0'
          }
        ]
      },
      {
        featureType: 'road',
        stylers: [
          {
            saturation: -70
          }
        ]
      },
      {
        featureType: 'transit',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          {
            visibility: 'simplified'
          },
          {
            saturation: -60
          }
        ]
      }
    ];
  }
}

import { Loader } from "@googlemaps/js-api-loader";

export class CustomMap {
  private googleMap: google.maps.Map;

  mapHtmlElement: HTMLElement;

  mapOptions: google.maps.MapOptions = {
    zoom: 5,
    center: {
      lat: 0,
      lng: 0,
    },
  };

  constructor(mapHtmlElementId: string) {
    this.mapHtmlElement = document.querySelector<HTMLElement>(
      mapHtmlElementId
    )!;

    this.mapHtmlElement.style.height = "100vh";

    this.googleMap = new google.maps.Map(this.mapHtmlElement, this.mapOptions);
  }
}

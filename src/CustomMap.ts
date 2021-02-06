import { Loader } from "@googlemaps/js-api-loader";
import type { Company } from "./Company";
import type { User } from "./User";

export class CustomMap {
  private googleMap: google.maps.Map;

  mapHtmlElement: HTMLElement;

  mapOptions: google.maps.MapOptions = {
    zoom: 1,
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

  addUserMarker(user: User) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: user.location.lat,
        lng: user.location.lon,
      },
    });
  }

  addCompanyMarker(company: Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: company.location.lat,
        lng: company.location.lon,
      },
    });
  }
}

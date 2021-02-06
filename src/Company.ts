import Faker from "faker";
import type { LocationInfo } from "./CustomMap";

export class Company implements LocationInfo {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = Faker.company.companyName();
    this.catchPhrase = Faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lon: parseFloat(Faker.address.longitude()),
    };
  }

  infoWindowContent(): Node {
    const content = document.createElement("div");

    const companyName = document.createElement("h3");
    companyName.textContent = this.name;

    const catchPhrase = document.createElement("h4");
    catchPhrase.textContent = this.catchPhrase;

    const companyLocation = document.createElement("div");

    const latitude = document.createElement("p");
    latitude.textContent = `Latitude: ${this.location.lat}`;

    const longitude = document.createElement("p");
    longitude.textContent = `Longitude: ${this.location.lon}`;

    companyLocation.append(latitude, longitude);

    content.append(companyName, catchPhrase, companyLocation);

    return content;
  }
}

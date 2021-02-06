import Faker from "faker";
import type { LocationInfo } from "./CustomMap";

export class User implements LocationInfo {
  name: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
    this.name = Faker.name.firstName();
    this.location = {
      lat: parseFloat(Faker.address.latitude()),
      lon: parseFloat(Faker.address.longitude()),
    };
  }

  infoWindowContent(): Node {
    const content = document.createElement("div");

    const userName = document.createElement("h3");
    userName.textContent = this.name;

    const userLocation = document.createElement("div");

    const latitude = document.createElement("div");
    latitude.textContent = `Latitude: ${this.location.lat}`;

    const longitude = document.createElement("div");
    longitude.textContent = `Longitude: ${this.location.lon}`;

    userLocation.append(latitude, longitude);

    content.append(userName, userLocation);

    return content;
  }
}

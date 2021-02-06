import Faker from "faker";

export class User {
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
}

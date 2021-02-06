import Faker from 'faker'

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lon: number;
  };

  constructor() {
      this.name = Faker.company.companyName()
      this.catchPhrase = Faker.company.catchPhrase()
      this.location = {
          lat: parseFloat(Faker.address.latitude()),
          lon: parseFloat(Faker.address.longitude())
      }
  }
}

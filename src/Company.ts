import { faker } from "@faker-js/faker";

export class Company {
  name: string;
  catchPhrase: string;
  location: {
    lat: number;
    lan: number;
  };
  constructor() {
    this.name = faker.company.name();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lan: faker.location.latitude(),
      lat: faker.location.latitude(),
    };
  }
}

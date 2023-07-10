import { faker } from "@faker-js/faker";

export class User {
  name: string;
  location: {
    lat: number;
    lan: number;
  };
  constructor() {
    this.name = faker.person.firstName();
    this.location = {
      lan: faker.location.latitude(),
      lat: faker.location.latitude(),
    };
  }
}

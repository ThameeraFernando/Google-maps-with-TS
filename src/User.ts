import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class User implements Mappable {
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
  markerContent(): string {
    return (
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h1 id="firstHeading" class="firstHeading">User Name :${this.name}</h1>` +
      '<div id="bodyContent">' +
      `<p>Location:${this.location}</p>` +
      "</div>" +
      "</div>"
    );
  }
}

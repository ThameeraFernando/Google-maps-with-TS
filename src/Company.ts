import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
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
  markerContent(): string {
    return (
      '<div id="content">' +
      '<div id="siteNotice">' +
      "</div>" +
      `<h1 id="firstHeading" class="firstHeading">Company Name :${this.name}</h1>` +
      '<div id="bodyContent">' +
      "<p></p>" +
      "</div>" +
      "</div>"
    );
  }
}

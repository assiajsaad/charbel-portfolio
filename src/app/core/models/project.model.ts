export class Project {
  id: number;
  name: string;
  image: string;
  description: string;
  city: string;
  client: string;
  location: string;
  buildingSurface: string;
  buildingSite: string;


  constructor(id: number,
    name: string,
    image: string,
    description: string,
    city: string,
    client: string,
    location: string,
    buildingSurface: string,
    buildingSite: string,

  ) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.description = description;
    this.city = city;
    this.client = client;
    this.location = location;
    this.buildingSurface = buildingSurface;
    this.buildingSite = buildingSite;


  }
}


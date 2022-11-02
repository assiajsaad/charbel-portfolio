import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data: Project[] = [];
  jumbo: Project[] = [];


  constructor() {

    this.data = [
      { id: 1, name: 'Project 1', image: 'assets/carousel/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 2, name: 'Project 2', image: 'assets/carousel/carousel-2.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 3, name: 'Project 3', image: 'assets/carousel/carousel-3.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 4, name: 'Project 4', image: 'assets/carousel/carousel-4.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 5, name: 'Project 5', image: 'assets/carousel/carousel-5.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 6, name: 'Project 6', image: 'assets/carousel/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    ]

    this.jumbo = [
      { id: 1, name: 'Project 1', image: 'assets/carousel/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 2, name: 'Project 2', image: 'assets/carousel/carousel-2.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 3, name: 'Project 3', image: 'assets/carousel/carousel-3.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 4, name: 'Project 4', image: 'assets/carousel/carousel-4.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 5, name: 'Project 5', image: 'assets/carousel/carousel-5.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    ]
  }

  getData() {
    return this.data;
  }

  getJumbo() {
    return this.jumbo;
  }

  getProjectByID(id: number): Project {
    let data = {}as Project;
    this.data.map((e) => {
      if (e.id == id) {
        data = e;
      }
    }
    )
    return data
  }
}

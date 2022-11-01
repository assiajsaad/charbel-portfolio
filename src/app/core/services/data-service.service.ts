import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  data: Project[] = [];


  constructor() {
    this.data = [
      { id: 1, name: 'Project 1', image: 'http://lh5.googleusercontent.com/-cTEgPOnd3l8/U8-EmaZ4KNI/AAAAAAAABc8/6eacbALkQ6A/w1358-h905-no/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 2, name: 'Project 2', image: 'http://lh4.googleusercontent.com/-ntVHbbWX5eo/U8-EmV8P4cI/AAAAAAAABc4/ICYBGkcztTc/w1358-h905-no/carousel-2.jpg', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 3, name: 'Project 3', image: 'http://lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 4, name: 'Project 4', image: 'http://lh5.googleusercontent.com/-gywqIeMvel0/U8-EolKdtkI/AAAAAAAABdM/G0-NHuvvJUU/w1358-h905-no/carousel-4.jpg', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 5, name: 'Project 5', image: 'http://lh5.googleusercontent.com/--2iANjL3ikc/U8-EoGJ18mI/AAAAAAAABdI/fBe-q3Gos6Y/w1358-h905-no/carousel-5.jpg', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
      { id: 6, name: 'Project 6', image: 'http://lh5.googleusercontent.com/-batEXUZE_e4/U8-EmLF9-hI/AAAAAAAABc0/J3tJVUa6Buk/w1358-h905-no/carousel-3.jpg', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    ]
    // this.data = [
    //   { id: 1, name: 'Project 1', image: '../../../../assets/carousel/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    //   { id: 2, name: 'Project 2', image: '../../../../assets/carousel/carousel-2.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    //   { id: 3, name: 'Project 3', image: '../../../../assets/carousel/carousel-3.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    //   { id: 4, name: 'Project 4', image: '../../../../assets/carousel/carousel-4.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    //   { id: 5, name: 'Project 5', image: '../../../../assets/carousel/carousel-5.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    //   { id: 6, name: 'Project 6', image: '../../../../assets/carousel/carousel-1.JPG', description: 'dui ut ornare lectus sit amet est placerat in egestas erat imperdiet sed euismod nisi' },
    // ]
  }

  getData() {
    return this.data
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

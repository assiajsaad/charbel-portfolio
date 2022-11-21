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
      { id: 1, name: 'Project 1', image: 'assets/carousel/carousel-1.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 2, name: 'Project 2', image: 'assets/carousel/carousel-2.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 3, name: 'Project 3', image: 'assets/carousel/carousel-3.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 4, name: 'Project 4', image: 'assets/carousel/carousel-4.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 5, name: 'Project 5', image: 'assets/carousel/carousel-5.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 6, name: 'Project 6', image: 'assets/carousel/carousel-1.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
    ]

    this.jumbo = [
      { id: 1, name: 'Project 1', image: 'assets/carousel/carousel-1.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 2, name: 'Project 2', image: 'assets/carousel/carousel-2.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 3, name: 'Project 3', image: 'assets/carousel/carousel-3.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 4, name: 'Project 4', image: 'assets/carousel/carousel-4.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
      { id: 5, name: 'Project 5', image: 'assets/carousel/carousel-5.JPG', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin porta arcu arcu, eleifend dictum ex molestie at. Vivamus in odio in purus efficitur gravida. Aenean auctor, ex interdum porttitor luctus, velit lacus egestas enim, quis euismod nunc metus ut velit. Maecenas cursus, orci nec pretium fermentum, odio metus porta elit, rhoncus semper neque quam vel dolor. Fusce molestie enim at nulla tincidunt egestas. Vestibulum elementum sodales molestie. Phasellus eu nisi eleifend, posuere ante in, tempor felis. Aenean posuere mi vitae pulvinar sagittis. Integer interdum non ipsum tempor congue. Phasellus id lacinia elit. Donec consequat dignissim velit. Curabitur gravida ipsum eros, ut consectetur ipsum vulputate in. Integer mi diam, vulputate a nunc vitae, accumsan laoreet nisl. Sed ornare quam in ante vulputate, id varius nisi aliquet. Phasellus suscipit scelerisque ipsum non lobortis. Etiam tristique sodales dictum. Quisque eu aliquam nisi, nec ultricies dui. In in rutrum turpis. Curabitur euismod tortor nec lectus dignissim feugiat. Sed id ligula enim. Vivamus vulputate turpis eget odio tincidunt, eu vestibulum tortor posuere. Ut sed cursus arcu. Nulla consectetur accumsan lorem, eget tristique velit posuere vel. Praesent vulputate lacus quis erat malesuada, vestibulum lobortis ipsum tincidunt. Phasellus ornare neque sit amet congue tristique. In massa orci, aliquet in condimentum ac, condimentum at augue. Pellentesque et pulvinar ligula. Phasellus blandit mauris metus. Proin lacinia maximus dolor, et ullamcorper felis eleifend nec. Phasellus sed urna non tellus maximus varius quis nec tortor. Nunc porta tellus justo, imperdiet venenatis magna suscipit in. Nulla vel placerat ipsum, in fermentum eros. Nunc quam urna, tempus quis aliquet ac, fringilla in erat. Nunc luctus nunc vel nunc sodales, eu dictum massa dapibus. Mauris lacinia odio eget tortor pulvinar varius at et urna. Vestibulum cursus sem erat. Morbi elementum nisi eu arcu dictum mollis. Duis varius, velit sit amet gravida vehicula, magna lorem imperdiet diam, et luctus neque dolor elementum urna.' },
    ]
  }

  getData() {
    return this.data;
  }

  getJumbo() {
    return this.jumbo;
  }

  getProjectByID(id: number): Project {
    let data = {} as Project;
    this.data.map((e) => {
      if (e.id == id) {
        data = e;
      }
    }
    )
    return data
  }
}
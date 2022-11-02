import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  data : Project[] = [];
  constructor(private dataServ: DataServiceService) { }

  ngOnInit(): void {
    this.data = this.dataServ.getJumbo();
  }

}

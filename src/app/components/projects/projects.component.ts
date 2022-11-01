import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  data : Project[] = [];
  constructor(private dataServ: DataServiceService) { }

  ngOnInit(): void {
    this.data = this.dataServ.getData();
  }

}

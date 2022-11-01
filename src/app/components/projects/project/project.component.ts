import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() projectId!: number;
  project!: Project;
  constructor(private dataSrv: DataServiceService,private router: Router) {

  }

  ngOnInit(): void {

    this.project = this.dataSrv.getProjectByID(this.projectId);

  }
toProjectDetails(i_id: number) {
  this.router.navigate(
    ['/projectDetails'],
    { queryParams: { id: i_id } }
  );
  }

}

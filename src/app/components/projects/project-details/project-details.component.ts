import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  @Input() projectId!: number;
  project!: Project;
  constructor(private dataSrv: DataServiceService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (d) => {
        this.projectId = d['id']
      }
    )
    this.project = this.dataSrv.getProjectByID(this.projectId);
  }

}

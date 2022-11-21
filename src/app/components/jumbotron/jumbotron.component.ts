import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/core/models/project.model';
import { DataServiceService } from 'src/app/core/services/data-service.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  data : Project[] = [];
  constructor(private dataServ: DataServiceService,private router: Router) { }

  ngOnInit(): void {
    this.data = this.dataServ.getJumbo();
  }
  toProjectDetails(i_id: number) {
    console.log(i_id);

    this.router.navigate(
      ['/projectDetails'],
      { queryParams: { id: i_id } }
    );
    }
}

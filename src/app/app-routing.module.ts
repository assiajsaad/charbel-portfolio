import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:"" , component: JumbotronComponent},
  {path:"home" , component: JumbotronComponent},
  {path:"aboutUs" , component: AboutComponent},
  {path:"contactUs" , component: ContactComponent},
  {path:"projects" , component: ProjectsComponent},
  {path:"newsEvents" , component: NewsEventsComponent},
  {path:"projectDetails" , component: ProjectsComponent},
  {path:"**" , component: JumbotronComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

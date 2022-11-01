import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsEventsComponent } from './components/news-events/news-events.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HamburgerMenuComponent } from './components/navbar/hamburger-menu/hamburger-menu.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { SearchBarComponent } from './components/navbar/search-bar/search-bar.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectDetailsComponent } from './components/projects/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    NewsEventsComponent,
    ProjectsComponent,
    HamburgerMenuComponent,
    LogoComponent,
    SearchBarComponent,
    ProjectComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

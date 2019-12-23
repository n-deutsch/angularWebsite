import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SBSDComponent } from './sbsd/sbsd.component';
import { FineDiningComponent } from './fine-dining/fine-dining.component';
import { Christmas2019Component } from './christmas2019/christmas2019.component';
import { Christmas2018Component } from './christmas2018/christmas2018.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    HomeComponent,
    SBSDComponent,
    FineDiningComponent,
    Christmas2019Component,
    Christmas2018Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

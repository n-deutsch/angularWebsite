import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SBSDComponent } from './sbsd/sbsd.component';
import { FineDiningComponent } from './fine-dining/fine-dining.component';
import { Christmas2019Component } from './christmas2019/christmas2019.component';
import { Christmas2018Component } from './christmas2018/christmas2018.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'SBSD', component: SBSDComponent },
  { path: 'sbsd', component: SBSDComponent },
  { path: 'fine_dining', component: FineDiningComponent },
  { path: 'christmas2018', component: Christmas2018Component},
  { path: 'christmas2019', component: Christmas2019Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

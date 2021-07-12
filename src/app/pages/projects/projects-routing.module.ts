import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectOverviewComponent } from './overview/overview.component';
import { AddProjectComponent } from './add/add-projects.component';
import { ViewProjectComponent } from './view/view-projects.component';

const routes : Routes = [
  { path: '', component: ProjectOverviewComponent },
  { path: 'create', component: AddProjectComponent },
  { path: 'view/:id', component: ViewProjectComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }

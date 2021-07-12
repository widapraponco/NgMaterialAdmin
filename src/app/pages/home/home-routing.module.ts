import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes : Routes = [
  { 
    path: '', 
    component: HomeComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      { 
        path: 'project', 
        loadChildren: () => 
          import('../projects/projects.module')
          .then(m => m.ProjectsModule)
      },
      { 
        path: 'user', 
        loadChildren: () => 
          import('../user/user.module')
          .then(m => m.UserModule)
      }
    ]
  },
//   { path: 'create', component: AddProjectComponent },
//   { path: 'view', component: ViewProjectComponent }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

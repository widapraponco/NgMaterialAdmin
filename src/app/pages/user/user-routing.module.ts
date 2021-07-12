import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { InvestorComponent } from './investor/investor.component';
import { UserComponent } from './user.component';

const routes : Routes = [
  { path: '', 
  component: UserComponent,
  children: [
    { path: 'admin', component: AdminComponent },
    { path: 'investor', component: InvestorComponent },
    { path: '', redirectTo: 'admin', pathMatch: 'full' }
  ]
 },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes : Routes = [
  { path: '', component: DashboardComponent },
  { path: 'table', component: TableComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

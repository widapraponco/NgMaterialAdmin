import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/material.module';
import { ConfirmationDialog } from 'src/app/components/dialog/dialog.component';
import { DragDropComponent } from 'src/app/components/drag-drop/drag-drop.component';
import { TableComponent } from 'src/app/components/table/table.component';
import { TreeComponent } from 'src/app/components/tree/tree.component';
import { ChartDashboardComponent, TableUserComponent, TableProjectComponent, TaskDashboardComponent } from 'src/app/dashboard/contents';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FormComponent } from '../form/form.component';
import { HomeRoutingModule } from './home-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
    FormComponent,
    ConfirmationDialog,

    ChartDashboardComponent,
    TableUserComponent,
    TableProjectComponent,
    TaskDashboardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    HomeRoutingModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class HomeModule { }

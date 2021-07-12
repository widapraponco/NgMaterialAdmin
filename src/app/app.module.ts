import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { TreeComponent } from './components/tree/tree.component';
import { MatTreeModule } from '@angular/material/tree';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormComponent } from './pages/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { MatDividerModule } from '@angular/material/divider';
import { ConfirmationDialog } from './components/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    TableComponent,
    TreeComponent,
    DragDropComponent,
    FormComponent,
    ConfirmationDialog,
    // BaseDialog,

    // DynamicFieldDirective,
    // DynamicFormComponent
  ],
  imports: [
    // FormsModule,
    // ReactiveFormsModule,

    // BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTreeModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    DragDropModule,
    NgxValidateCoreModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

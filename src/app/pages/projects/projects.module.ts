import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectRoutingModule } from './projects-routing.module';
import { AddProjectComponent } from './add/add-projects.component';
import { ProjectOverviewComponent } from './overview/overview.component';
import { MaterialModule } from 'src/app/material.module';
import { ImageUploaderComponent } from 'src/app/components/img-input/img-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DigitPipe } from 'src/app/components/digit.pipe';
import { TotalProjectComponent } from './overview/contents/total-project.component';
import { TotalFundedComponent } from './overview/contents/total-funded.component';
import { TotalInvestComponent } from './overview/contents/total-invest.component copy';
import { ViewProjectComponent } from './view/view-projects.component';
import { ViewDetailProjectComponent } from './view/contents/detail.component';
import { ViewImageProjectComponent } from './view/contents/image.component';
import { ViewTabProjectComponent } from './view/contents/tabs.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    AddProjectComponent,
    ProjectOverviewComponent,
    ImageUploaderComponent,
    ViewProjectComponent,
    DigitPipe,

    TotalProjectComponent,
    TotalFundedComponent,
    TotalInvestComponent,
    ViewDetailProjectComponent,
    ViewImageProjectComponent,
    ViewTabProjectComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatChipsModule,
    MatTabsModule,
    MatStepperModule,
    MatProgressBarModule,
    ProjectRoutingModule,
    MaterialModule,
    CKEditorModule
  ]
})
export class ProjectsModule {}

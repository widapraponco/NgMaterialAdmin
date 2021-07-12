import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'view-tab',
    template: `
    <mat-card class="dashboard-card">
          <mat-card-content class="dashboard-card-content">
            <mat-tab-group>
              <mat-tab label="Deskripsi"> {{config?.data?.deskripsi || 'Deskripsi proyek' }} </mat-tab>
              <mat-tab label="Perkembangan Terbaru">
                <mat-vertical-stepper>
                  <mat-step>
                    <ng-template matStepLabel>Desember, 5 2021</ng-template>
                    <ng-template matStepContent>
                      <p>This content was rendered lazily</p>
                      <button mat-button matStepperNext>Next</button>
                    </ng-template>
                  </mat-step>
                  <mat-step>
                    <ng-template matStepLabel>Desember, 15 2021</ng-template>
                    <ng-template matStepContent>
                      <p>This content was also rendered lazily</p>
                      <button mat-button matStepperPrevious>Back</button>
                      <button mat-button matStepperNext>Next</button>
                    </ng-template>
                  </mat-step>
                  <mat-step>
                    <ng-template matStepLabel>Desember, 29 2021</ng-template>
                    <p>This content was rendered eagerly</p>
                    <button mat-button matStepperPrevious>Back</button>
                  </mat-step>
                </mat-vertical-stepper>
              </mat-tab>
              <mat-tab label="Dokumen dan Legalitas"> Content 3 </mat-tab>
            </mat-tab-group>
          </mat-card-content>
    </mat-card>
    `,
    styles: [`
    .dashboard-card {
        position: absolute;
        top: 15px;
        left: 15px;
        right: 15px;
        bottom: 15px;
      }
      
      .more-button {
        position: absolute;
        top: 5px;
        right: 10px;
      }
      
      .dashboard-card-content {
        text-align: left;
      }  
    `]
})
export class ViewTabProjectComponent implements Content {
    config!: ContentConfig;

}
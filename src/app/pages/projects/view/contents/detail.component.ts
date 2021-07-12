import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Content, ContentConfig } from "src/app/components/content.interface";
import { ProjectItem } from "src/app/dashboard/contents";

@Component({
    selector: 'view-detail',
    template: `
    <mat-card class="dashboard-card">
          <!--<mat-card-header>
            <mat-card-title>
              Detail Proyek
            </mat-card-title>
          </mat-card-header>-->
          <mat-card-content class="dashboard-card-content">
            <span class="mat-h5">{{config.data?.kode_proyek || 'Kode Proyek'}}</span>
            <h4 class="mat-h4" style="margin-bottom: 10px">{{config.data?.title || 'Judul Proyek'}}</h4>
            <mat-chip-list aria-label="Alih Guna">
                <mat-chip style="font-size: 12px;" color="primary" selected>{{config.data?.alih_guna || 'Alih Guna Proyek'}}</mat-chip>
            </mat-chip-list>
            <span class="flex-middle" style="font-size: 12px; margin-bottom: 10px"><mat-icon>place</mat-icon> {{config.data?.lokasi || 'Lokasi proyek'}}</span>
            <div style="display: flex; justify-content: space-between;">
                <span>Rp {{ (config.data?.biaya || 100000) | digit}}</span>
                <span>{{config.data?.batas_waktu || 0}} hari</span>
            </div>
            <mat-progress-bar mode="determinate" value="40" style="margin-bottom: 10px;"></mat-progress-bar>
            <div style="display: flex;">
                <div style="width: 49%; margin-right: 2%">
                    <span>Dana Terkumpul</span>
                    <h4>Rp {{ (config.data?.harga_per_lot || 1000000) | digit}}</h4>
                </div>
                <div style="width: 49%;">
                    <span>Jumlah Lot Terjual</span>
                    <h4>{{ (config.data?.jumlah_lot || 0) }}</h4>
                </div>
            </div>
            <div style="display: flex;">
                <div style="width: 49%; margin-right: 2%">
                    <span>Harga Per Lot</span>
                    <h4>Rp {{ (config.data?.harga_per_lot || 1000000) | digit}}</h4>
                </div>
                <div style="width: 49%;">
                    <span>Jumlah Lot</span>
                    <h4>{{ (config.data?.jumlah_lot || 0) }}</h4>
                </div>
            </div>
            <div style="display: flex;">
                <div style="width: 49%; margin-right: 2%">
                    <span class="flex-middle" style="font-size: 12px;"><mat-icon color="primary">schedule</mat-icon> Periode Deviden</span>
                    <h4>{{ (config.data?.periode_deviden || 3) | digit}} Bulan</h4>
                </div>
                <div style="width: 49%;">
                    <span class="flex-middle" style="font-size: 12px;"><mat-icon color="primary">schedule</mat-icon> Estimasi Deviden</span>
                    <h4>{{ (config.data?.estimasi_deviden_min || 0) }} - {{ (config.data?.estimasi_deviden_max || 0) }}% per tahun</h4>
                </div>
            </div>
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
export class ViewDetailProjectComponent implements Content {
    config!: ContentConfig;

    constructor(){}
        
    ngOnInit() {}

}
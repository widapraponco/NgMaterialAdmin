import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'view-image',
    template: `
    <div style="position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;">
    <div class="img-container" [ngStyle]="{'background-image': 'url('+config.data?.image || ''+')'}"></div>
    <mat-chip-list aria-label="Status" style="position: absolute; bottom: 0; right: 10px;">
        <mat-chip style="font-size: 12px;" color="accent" selected>{{config.data?.status || 'Alih Guna'}}</mat-chip>
    </mat-chip-list>
    </div>
    `
})
export class ViewImageProjectComponent implements Content {
    config!: ContentConfig;

    ngOnInit() {
        console.log(this.config.data);
    }
}
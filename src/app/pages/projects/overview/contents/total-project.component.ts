import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'total-proyek',
    template: `
    <h1 class="mat-h1" style="text-align: right;">100</h1>
    `
})
export class TotalProjectComponent implements Content {
    config!: ContentConfig;
}
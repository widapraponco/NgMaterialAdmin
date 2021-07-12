import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'total-invest',
    template: `
    <h1 class="mat-h1" style="text-align: right;">Rp {{100000000000 | digit}}</h1>
    `
})
export class TotalInvestComponent implements Content {
    config!: ContentConfig;
}
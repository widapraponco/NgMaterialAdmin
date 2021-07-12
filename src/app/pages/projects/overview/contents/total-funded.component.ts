import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'funded-project',
    template: `
    <h1 class="mat-h1" style="text-align: right;">25</h1>
    `
})
export class TotalFundedComponent implements Content {
    config!: ContentConfig;
}
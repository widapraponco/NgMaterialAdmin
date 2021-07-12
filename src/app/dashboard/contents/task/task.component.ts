import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'chart-dash',
    template: `
    <div>task dashboard</div>
    `
})
export class TaskDashboardComponent implements Content {
    config!: ContentConfig;
}
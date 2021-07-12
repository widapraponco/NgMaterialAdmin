import { Component } from "@angular/core";
import { Content, ContentConfig } from "src/app/components/content.interface";

@Component({
    selector: 'chart-dash',
    templateUrl: 'table-user.component.html'
})
export class TableUserComponent implements Content {
    config!: ContentConfig;

}
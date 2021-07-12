import { BreakpointObserver, Breakpoints, BreakpointState } from "@angular/cdk/layout";
import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ProjectItem } from "src/app/dashboard/contents";

@Component({
    selector: 'view-projects',
    templateUrl: 'view-projects.component.html',
    styles: [`
    .grid-container {
        margin: 20px;
      }    
    `]
})
export class ViewProjectComponent {
    constructor(private route: ActivatedRoute,
        private fs: AngularFirestore,
        private breakpointObserver: BreakpointObserver
        ){}

    // project$!: Observable<ProjectItem>;

    title = "Kode Proyek";
    maxcols = 2;
    /** Based on the screen size, switch from standard to one column per row */
    cards!: Observable<any>;

    ngOnInit() {
        this.route.paramMap.pipe(
          switchMap((params: ParamMap) =>
            <Observable<ProjectItem>>this.fs.collection("project").doc(params.get('id')!).valueChanges()
        )).subscribe(res => {
            this.title = res.kode_proyek;
            this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
                map(({ matches }) => {
                if (matches) {
                    return [
                    { title: 'Card 1', cols: 2, rows: 1, content: {name: 'viewImage', data: res} },
                    { title: 'Card 2', cols: 2, rows: 1, content: {name: 'viewDetail', data: res} },
                    { title: 'Card 3', cols: 2, rows: 2, content: {name: 'viewTabs', data: res} },
                    ];
                }
        
                return [
                    { title: 'Card 1', cols: 1, rows: 1, content: {name: 'viewImage', data: res} },
                    { title: 'Card 2', cols: 1, rows: 1, content: {name: 'viewDetail', data: res} },
                    { title: 'Card 3', cols: 2, rows: 2, content: {name: 'viewTabs', data: res} },
                ];
                })
            );
        });
    }
}
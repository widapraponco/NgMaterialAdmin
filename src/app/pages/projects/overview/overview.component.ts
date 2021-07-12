import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  title = "Projects Overview";
  maxcols = 3;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Total Proyek', cols: 3, rows: 1, content: {name: 'projectTotal'} },
          { title: 'Total Pengumpulan Dana', cols: 3, rows: 1, content: {name: 'projectTotalInvest'} },
          { title: 'Total Proyek Didanai', cols: 3, rows: 1, content: {name: 'projectFunded'} },
          { title: 'Proyek Pendanaan', cols: 3, rows: 3, content: {name: 'dashboardProject'} }
        ];
      }

      return [
        { title: 'Total Proyek', cols: 1, rows: 1, content: {name: 'projectTotal'} },
        { title: 'Total Pengumpulan Dana', cols: 1, rows: 1, content: {name: 'projectTotalInvest'} },
        { title: 'Total Proyek Didanai', cols: 1, rows: 1, content: {name: 'projectFunded'} },
        { title: 'Proyek Pendanaan', cols: 3, rows: 3, content: {name: 'dashboardProject'} }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}

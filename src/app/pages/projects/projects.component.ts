import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 3, rows: 1, content: {name: 'projectTotal'} },
          { title: 'Card 2', cols: 3, rows: 1, content: {name: 'projectTotalMoney'} },
          { title: 'Card 3', cols: 3, rows: 1, content: {name: 'projectFunded'} },
          { title: 'Card 4', cols: 3, rows: 1, content: {name: 'tableProject'} }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1, content: {name: 'projectTotal'} },
        { title: 'Card 2', cols: 1, rows: 1, content: {name: 'projectTotalMoney'} },
        { title: 'Card 3', cols: 1, rows: 1, content: {name: 'projectFunded'} },
        { title: 'Card 4', cols: 3, rows: 1, content: {name: 'tableProject'} }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
  }

}

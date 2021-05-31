import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  icon?: string;
  link?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/'
  },
  {
    name: 'Fruit',
    icon: 'check_circle',
    children: [
      {name: 'Apple', link: '/form'},
      {name: 'Banana', link: '/form'},
      {name: 'Fruit loops', link: '/table'},
    ]
  }, {
    name: 'Vegetables',
    icon: 'check_circle',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli', link: '/table'},
          {name: 'Brussels sprouts', link: '/table'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins', link: '/table'},
          {name: 'Carrots', link: '/table'},
        ]
      },
    ]
  },
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  icon: string;
  link: string;
  level: number;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    private _transformer = (node: FoodNode, level: number) => {
      return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        icon: node.icon || '',
        link: node.link || '#',
        level: level,
      };
    }
  
    treeControl = new FlatTreeControl<ExampleFlatNode>(
        node => node.level, node => node.expandable);
  
    treeFlattener = new MatTreeFlattener(
        this._transformer, node => node.level, node => node.expandable, node => node.children);
  
    dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  
    hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = TREE_DATA;
  }

}

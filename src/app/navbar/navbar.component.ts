import { Component, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';
import {BaseComponent} from '../components/BaseComponent';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { debounceTime, first, take } from 'rxjs/operators';

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
    link: '/dashboard'
  },
  {
    name: 'Penarikan',
    icon: 'paid',
    link: '/penarikan'
  },
  {
    name: 'Pendanaan',
    icon: 'how_to_vote',
    link: '/pendanaan'
  },
  {
    name: 'Penjualan',
    icon: 'storefront',
    link: '/penjualan'
  },
  {
    name: 'Riwayat',
    icon: 'restore',
    children: [
      {name: 'Penarikan', link: '/riwayat/penarikan'},
      {name: 'Pendanaan', link: '/riwayat/pendanaan'}
    ]
  },
  // {
  //   name: 'Vegetables',
  //   icon: 'check_circle',
  //   children: [
  //     {
  //       name: 'Green',
  //       children: [
  //         {name: 'Broccoli', link: '/table'},
  //         {name: 'Brussels sprouts', link: '/table'},
  //       ]
  //     }, {
  //       name: 'Orange',
  //       children: [
  //         {name: 'Pumpkins', link: '/table'},
  //         {name: 'Carrots', link: '/table'},
  //       ]
  //     },
  //   ]
  // },
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
export class NavbarComponent extends BaseComponent {

    isActive = "dashboard";

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

  constructor(injector: Injector, private b: BreakpointObserver, private router: Router) {
    super(injector, b);
    this.dataSource.data = TREE_DATA;

    router.events.subscribe(e => {
      console.log(e);
      if (e instanceof NavigationEnd && e) {
        this.isActive = e.url;
        console.log(this.isActive);
      }
    })
  }

}

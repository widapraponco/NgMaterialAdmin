import { Component, Injector, ViewChild } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { TableItem, TableDataSource } from "src/app/components/table/table-datasource";
import { TableComponent } from "src/app/components/table/table.component";

export interface AdminItem {
  name: string;
  phone: string;
  email: string;
}

@Component({
    selector: 'user-admin',
    templateUrl: 'admin.component.html'
})
export class AdminComponent {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AdminItem>;
  dataSource: TableDataSource<AdminItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(fs: AngularFirestore) {
    this.dataSource = new TableDataSource<AdminItem>('', fs);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
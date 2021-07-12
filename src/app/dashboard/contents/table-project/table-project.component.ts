import { Component, ViewChild } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTable } from "@angular/material/table";
import { Content, ContentConfig } from "src/app/components/content.interface";
import { TableDataSource } from "src/app/components/table/table-datasource";

export interface ProjectItem {
    alih_guna: string;
    kode_proyek: string;
    title: string;
    lokasi: string;
    status: string;
    image: string;
    estimasi_deviden_max: number;
    estimasi_deviden_min: number;
    periode_deviden: number;
    jumlah_lot: number;
    harga_per_lot: number;
    batas_waktu: number;
    biaya: number;
}

@Component({
    selector: 'chart-dash',
    templateUrl: 'table-project.component.html',
    styles: [
        `
        .full-width-table {
            width: 100%;
        }
        `
    ]
})
export class TableProjectComponent implements Content {
    config!: ContentConfig;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<ProjectItem>;
    dataSource: TableDataSource<ProjectItem>;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = [
        'Kode Proyek', 'Judul', 'Alamat', 'Alih Guna', 
        'Sisa Batas Waktu', 'Jumlah Lot', 'Harga Per Lot', 
        'Periode Deviden', 'Estimasi Min - Max %', 'Lokasi', 'Status', 'Aksi'];
    collectionName = "project";

    constructor(private fs: AngularFirestore) {
        this.dataSource = new TableDataSource<ProjectItem>(this.collectionName, fs);
    }

    ngAfterViewInit(): void {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
    }

    remove(kode_proyek: string) {
        this.fs.collection(this.collectionName).doc(kode_proyek).delete()
    }
}
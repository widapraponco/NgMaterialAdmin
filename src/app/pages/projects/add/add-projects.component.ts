import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, ElementRef, Injector, ViewChild } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BaseComponent } from "src/app/components/BaseComponent";
import * as $ from 'jquery';
import { AngularFirestore } from "@angular/fire/firestore";
import { Route, Router } from "@angular/router";

const ClassicEditor = require('../../../components/build/ckeditor');
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'add-projects',
    templateUrl: 'add-projects.component.html',
    styles: [
        `
        .container {
            margin: 20px;
        }
        .wrapper {
            display: flex;
        }
        .form-container {
        }
        .preview {
            width: 300px;
            position: fixed;
            right: 35px;
        }
        `
    ]
})
export class AddProjectComponent extends BaseComponent {
    constructor(injector: Injector, 
        breakpointObserver: BreakpointObserver, 
        private firestore: AngularFirestore,
        private router: Router) {
        super(injector, breakpointObserver);
    }

    group: FormGroup = new FormGroup({
        status: new FormControl('Pengumpulan Dana', Validators.required),
        title: new FormControl(null, Validators.required),
        lokasi: new FormControl(null, Validators.required),
        longitude: new FormControl(null, Validators.required),
        latitude: new FormControl(null, Validators.required),
        alih_guna: new FormControl(null, Validators.required),
        kode_proyek: new FormControl(null, Validators.required),
        biaya: new FormControl(0, Validators.required),
        batas_waktu: new FormControl(100, Validators.required),
        harga_per_lot: new FormControl(null, Validators.required),
        jumlah_lot: new FormControl(null, Validators.required),
        periode_deviden: new FormControl(null, Validators.required),
        estimasi_deviden_max: new FormControl(null, Validators.required),
        estimasi_deviden_min: new FormControl(null, Validators.required)
    });

    types = [
        {value: 'Kos', viewValue: 'Kos'},
        {value: 'Ruko', viewValue: 'Ruko'},
        {value: 'Gudang', viewValue: 'Gudang'},
        {value: 'Perumahaan', viewValue: 'Perumahaan'},
        {value: 'Hotel', viewValue: 'Hotel'}
    ];

    status = [
        {value: 'Pengumpulan Dana', viewValue: 'Pengumpulan Dana'},
        {value: 'Dana Terkumpul', viewValue: 'Dana Terkumpul'},
        {value: 'Proses Pengerjaan', viewValue: 'Proses Pengerjaan'},
        {value: 'Selesai Pengerjaan', viewValue: 'Selesai Pengerjaan'},
    ];

    @ViewChild('image') imagePreview!: ElementRef<any>;

    public Editor = ClassicEditor;

    public editorData = "<p>Deskripsi proyek!</p>";

    onSubmit() {
        if (this.group.invalid) return;
        this.firestore.collection('project').doc(this.group.get('kode_proyek')?.value).set({
            deskripsi: this.editorData, 
            create_at: new Date(),
            ...this.group.value}).then(res => {
            this.group.reset();
            this.editorData = "<p>Deskripsi proyek!</p>";
            this.router.navigate(['/'])
        })
    }


    fileChange(e: any) {
        $(this.imagePreview.nativeElement).css('background-image', 'url('+e+')');
    }

    onEditorChange(e: any) {
        console.log(e);        
    }
}
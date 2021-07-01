import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import * as $ from 'jquery';

@Component({
    selector: 'img-upload',
    template: `
    <div style="height: 250px; padding-bottom: 1.34375em; position: relative;">
        <input #input style="opacity: 0; position: absolute" type="file" />
        <div #image class="img-container"></div>
        <button (click)="removeImage($event)" mat-icon-button class="delete-btn" [ngStyle]="{'display': (hasFile ? 'block' : 'none')}"><mat-icon>delete</mat-icon></button>
    </div>
    `
})
export class ImageUploaderComponent {

    @ViewChild('input') input!: ElementRef<any>;
    // @ViewChild('delete') deleteBtn!: ElementRef<any>;
    @ViewChild('image') image!: ElementRef<any>;

    @Input() group!: FormGroup;

    @Output() onChange: EventEmitter<any> = new EventEmitter<any>();

    hasFile: boolean = false;

    constructor() {
    }

    ngAfterViewInit() {
        this.group.addControl('image', new FormControl());

        $(this.image.nativeElement).on('click', (e) => {
            if (this.hasFile) return;
            $(this.input.nativeElement).trigger('click');
        })

        $(this.input.nativeElement).on('change', (e) => {
            this.hasFile = true;
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (e) => {
                const result = e.target?.result;
                $(this.image.nativeElement).css('background-image', 'url('+result+')');
                this.group.get('image')?.setValue(result);
                this.onChange.emit(result);
            };
            reader.onerror = error => console.log(error);
        })

        // $(this.deleteBtn.nativeElement).on('click', (e) => {
        //     console.log(e);
        //     this.hasFile = false;
        //     this.group.get('image')?.reset();
        //     $(this.image.nativeElement).css('background-image', 'url("./assets/noimage.jpg")');
        // })
    }

    removeImage(e: any) {
        console.log(e);
        this.hasFile = false;
        this.group.get('image')?.reset();
        $(this.image.nativeElement).css('background-image', 'url("./assets/noimage.jpg")');
    }
}
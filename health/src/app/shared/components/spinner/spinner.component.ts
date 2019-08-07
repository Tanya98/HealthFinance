import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html'
})

export class SpinerComponent implements OnInit {
    public showSpinner: boolean = false;

    constructor() { }

    ngOnInit() { }

    loadData() {
        this.showSpinner = true;
    }
}
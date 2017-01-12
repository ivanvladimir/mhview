import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'my-search-box',
    template: `<md-input [ngModel]="term" placeholder="keyword" (ngModelChange)="update.emit($event)"></md-input>`
})

export class SearchBoxComponent implements OnInit {
    @Output() update = new EventEmitter();
    public term: String;

    ngOnInit() {
        this.update.emit('');
    }
}

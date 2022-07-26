import { Component, Input, OnInit } from '@angular/core';
import { PopularTag } from 'src/app/popular-tags/types/popularTag.type';

@Component({
    selector: 'mc-tag-list',
    templateUrl: './tag-list.component.html',
    styleUrls: ['./tag-list.component.scss']
})
export class TagListComponent implements OnInit {
    @Input('tags') tagsProps: PopularTag[];
    constructor() { }

    ngOnInit(): void {
    }

}

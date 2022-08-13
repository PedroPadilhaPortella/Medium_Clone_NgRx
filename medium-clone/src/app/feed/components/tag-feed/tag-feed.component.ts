import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mc-tag-feed',
    templateUrl: './tag-feed.component.html',
    styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent implements OnInit {
    APIUrl: string;
    tagName: string;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.tagName = this.route.snapshot.paramMap.get('slug')
        this.APIUrl = `articles?tag=${this.tagName}`;
    }
}

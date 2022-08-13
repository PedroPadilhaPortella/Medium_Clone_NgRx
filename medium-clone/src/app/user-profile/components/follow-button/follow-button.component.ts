import { UserProfileService } from './../../services/user-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../types/userProfile.interface';

@Component({
    selector: 'mc-follow-button',
    templateUrl: './follow-button.component.html',
    styleUrls: ['./follow-button.component.scss']
})
export class FollowButtonComponent implements OnInit {
    @Input('user') userProps: UserProfile;
    @Input('slug') slugProps: string;
    label: string;
    isFollowing: boolean;

    constructor(private userProfileService: UserProfileService) { }

    ngOnInit(): void {
        this.fetchData(this.userProps);
    }

    toggleFollowUser() {
        if (this.isFollowing) {
            this.userProfileService.unfollowUser(this.slugProps).subscribe((response) => {
                this.fetchData(response);
            });
        } else {
            this.userProfileService.followUser(this.slugProps).subscribe((response) => {
                this.fetchData(response);
            });
        }
    }

    fetchData(user: UserProfile) {
        this.isFollowing = user.following;
        this.label = this.isFollowing
            ? `Unfollow ${this.userProps.username}`
            : `Follow ${this.userProps.username}`;
    }
}
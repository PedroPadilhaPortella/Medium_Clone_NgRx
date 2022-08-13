import { UserProfileService } from '../../../user-profile/services/user-profile.service';
import { Component, Input, OnInit } from '@angular/core';
import { UserProfile } from '../../../user-profile/types/userProfile.interface';

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
        console.warn(this.userProps);
        console.warn(this.slugProps);
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
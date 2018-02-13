import { Component, OnInit } from '@angular/core';
import { Track } from '../../interfaces/track';
import { YelpService } from '../../services/yelp.service';
import { PathsService } from '../../services/paths.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Location } from '@angular/common';
import { User } from '../../user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-track-summary',
  templateUrl: './track-summary.component.html',
  styleUrls: ['./track-summary.component.sass']
})
export class TrackSummaryComponent implements OnInit {
  longitude: number;
  latitude: number;
  width: string;
  zero: number;
  trackArray: Track[];
  myProfile: User;
  private userSubject: BehaviorSubject<User>;

  constructor(private yelpService: YelpService, private pathService: PathsService, private auth: AuthService, private router: Router) {

    this.myProfile = this.auth.getUserSubject().getValue();
    this.pathService.getPathsInfo().subscribe(res => this.trackArray = <Track[]>res);
    this.zero = 0;

    // if (this.myProfile) {
    //   console.log('')
    //   this.router.navigate(['/paths', this.myProfile.journey, this.myProfile.last_challenge]);
    // }

   }

  public styleBar(i: number) {
    this.width = this.myProfile && this.myProfile.paths[i].completenessPercentage + '%' || '0%';
    return this.width;
  }

  public isItZero(i: number) {
    if (this.myProfile && this.myProfile.paths[i].completenessPercentage === this.zero) {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {

  }
}



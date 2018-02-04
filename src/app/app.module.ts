import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PathModule } from './components/path/path.module';

// Http
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

// Firebase
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Services
import { YelpService } from './services/yelp.service';
import { GoogleMapsService } from './services/google-maps.service';
import { PathsService } from './services/paths.service';
import { LoginService } from './services/login/login.service';
import { AuthService} from './services/auth.service';

// Components
import { environment } from '../environments/environment';
import { GoogleMapComponent } from './components/google-map/google-map.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';


import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ListPathsComponent } from './components/list-paths/list-paths.component';
import { ListDropdownComponent } from './components/list-dropdown/list-dropdown.component';
import { RecentDropdownComponent } from './components/recent-dropdown/recent-dropdown.component';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrackSummaryComponent } from './components/track-summary/track-summary.component';
import { PieProgressBarComponent } from './components/shared/pie-progress-bar/pie-progress-bar.component';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TrackSummaryComponent,
    StarRatingComponent,
    ListPathsComponent,
    PieProgressBarComponent,
    RecentDropdownComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    PathModule,
    NgbModule.forRoot()
  ],
  providers: [
    YelpService,
    GoogleMapsService,
    PathModule,
    LoginService,
    PathsService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


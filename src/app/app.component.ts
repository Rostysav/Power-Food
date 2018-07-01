import { Component, AfterViewInit } from '@angular/core';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'pf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app';
  lastRoute: string;
  lastPosition = 0;

  constructor(
      public router: Router
  ) {}

  // After view init so NativeElement is available.
  ngAfterViewInit() {
    this.router.events
        .pipe(
            filter(
                events =>
                events instanceof NavigationStart || events instanceof NavigationEnd
            )
        )
        .subscribe(events => {
          if (
              events instanceof NavigationStart &&
              events.url !== this.lastRoute
          ) {
            this.lastRoute = this.router.url;

            // if using window :
            this.lastPosition = window.pageYOffset;
            // Scroll to top because it's a new route.
            window.scrollTo(0, 0);
          }
          if (events instanceof NavigationEnd && events.url === this.lastRoute) {
            window.scrollTo(0, this.lastPosition);
          }
        });
  }

}

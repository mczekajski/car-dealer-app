import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-ui-side-nav',
  templateUrl: './ui-side-nav.component.html',
  styleUrls: ['./ui-side-nav.component.scss'],
})
export class UiSideNavComponent implements OnInit {
  constructor(private router: Router) {
    router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.path = event.urlAfterRedirects;
      });
  }

  public path: string = this.router.url;

  ngOnInit(): void {}
}

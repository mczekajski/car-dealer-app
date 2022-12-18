import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ui-side-nav',
  templateUrl: './ui-side-nav.component.html',
  styleUrls: ['./ui-side-nav.component.scss'],
})
export class UiSideNavComponent implements OnInit {
  constructor(private router: Router) {}

  path = this.router.url;

  ngOnInit(): void {}
}

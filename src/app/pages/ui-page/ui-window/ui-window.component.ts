import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-window',
  templateUrl: './ui-window.component.html',
  styleUrls: ['./ui-window.component.scss'],
})
export class UiWindowComponent implements OnInit {
  constructor() {}

  @Input() title: string = '';

  ngOnInit(): void {}
}

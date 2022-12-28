import { Component } from '@angular/core';
import { BrowserService } from 'src/app/shared/browser.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  constructor(private browserService: BrowserService) {}

  public copyToClipBoard(text: string): void {
    this.browserService.copyToClipboard(text);
  }
}

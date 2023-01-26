import { Component } from '@angular/core';
import { BrowserService } from 'src/app/shared/browser.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent {
  constructor(
    private browserService: BrowserService,
    private snackBar: MatSnackBar
  ) {}

  public copyToClipBoard(text: string): void {
    this.browserService.copyToClipboard(text);
    this.snackBar.open(`${text} has been copied to the clipboard`, '', {
      duration: 3000,
    });
  }
}

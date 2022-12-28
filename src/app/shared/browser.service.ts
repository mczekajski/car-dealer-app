import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor() {}

  public copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(
      function () {
        console.log(`Text "${text}" copied to clipboard`);
      },
      function (err) {
        console.error(`Error copying text "${text}" to clipboard`, err);
      }
    );
  }
}

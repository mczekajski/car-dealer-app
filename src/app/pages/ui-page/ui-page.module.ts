import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiPageComponent } from './ui-page.component';
import { UiWindowComponent } from './ui-window/ui-window.component';
import { UiSideNavComponent } from './ui-side-nav/ui-side-nav.component';
import { ColorsComponent } from './colors/colors.component';
import { RouterModule } from '@angular/router';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  declarations: [
    UiPageComponent,
    UiWindowComponent,
    UiSideNavComponent,
    ColorsComponent,
    TypographyComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [UiPageComponent],
})
export class UiPageModule {}

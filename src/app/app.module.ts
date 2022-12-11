import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UiPageModule } from './pages/ui-page/ui-page.module';

@NgModule({
  declarations: [AppComponent, NotFoundPageComponent, HomePageComponent],
  imports: [BrowserModule, AppRoutingModule, UiPageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UiPageModule } from './pages/ui-page/ui-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { FiltersComponent } from './components/catalog/filters/filters.component';
import { CarCardComponent } from './components/catalog/car-card/car-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundPageComponent,
    HomePageComponent,
    HeaderComponent,
    CatalogComponent,
    BenefitsComponent,
    ContactComponent,
    FooterComponent,
    FiltersComponent,
    CarCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiPageModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

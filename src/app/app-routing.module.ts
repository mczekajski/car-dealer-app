import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ColorsComponent } from './pages/ui-page/colors/colors.component';
import { TypographyComponent } from './pages/ui-page/typography/typography.component';
import { UiPageComponent } from './pages/ui-page/ui-page.component';

const routes: Routes = [
  {
    path: 'ui',
    component: UiPageComponent,
    children: [
      { path: 'colors', component: ColorsComponent },
      { path: 'typography', component: TypographyComponent },
    ],
  },
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

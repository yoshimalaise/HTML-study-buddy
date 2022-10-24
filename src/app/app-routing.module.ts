import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { GameFieldComponent } from './game-field/game-field.component';
import { LevelSelectComponent } from './home/components/level-select/level-select.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'level-select',
    component: LevelSelectComponent
  },
  {
    path: 'game-field',
    component: GameFieldComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules , useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

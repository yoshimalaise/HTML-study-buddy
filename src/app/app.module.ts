import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { LevelSelectComponent } from './home/components/level-select/level-select.component';
import { FormsModule } from '@angular/forms';
import { GameFieldComponent } from './game-field/game-field.component';
import { CodeEditorComponent } from './game-field/components/code-editor/code-editor.component';
import { GoalSnippetComponent } from './game-field/components/goal-snippet/goal-snippet.component';
import { ResultViewComponent } from './game-field/components/result-view/result-view.component';

@NgModule({
  declarations: [AppComponent, LevelSelectComponent, GameFieldComponent, CodeEditorComponent, GoalSnippetComponent,
    ResultViewComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

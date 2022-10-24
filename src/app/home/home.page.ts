import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getTutorialLevel } from '../data/levels/tutorial/tutorial.recipe';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private state: StateService) {}

  startGame() {
    this.router.navigateByUrl('level-select');
  }

  startTutorial() {
    this.state.levelName = 'Tutorial';
    this.state.showTutorial = true;
    const details = getTutorialLevel().load();
    this.state.goalHTML = details.goalHTML;
    this.state.customBlocks = details.customBlocks;
    this.state.toolboxXML = details.toolboxXML;
    this.state.workspaceXML = details.workSpaceXML;
    this.state.hintVM = details.hintVM;
    this.router.navigateByUrl('game-field');
  }

}

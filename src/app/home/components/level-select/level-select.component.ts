import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Level } from 'src/app/model/level.interface';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss'],
})
export class LevelSelectComponent implements OnInit {

  constructor(public state: StateService, private router: Router) { }

  ngOnInit() {}

  selectLevel(l: Level) {
    this.state.levelName = l.name;
    const details = l.load();
    this.state.goalHTML = details.goalHTML;
    this.state.customBlocks = details.customBlocks;
    this.state.toolboxXML = details.toolboxXML;
    this.state.workspaceXML = details.workSpaceXML;
    this.state.hintVM = details.hintVM;
    this.state.showTutorial = false;
    this.router.navigateByUrl('game-field');
  }

}

import { Component, OnInit } from '@angular/core';
import { Level } from 'src/app/model/level.interface';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-level-select',
  templateUrl: './level-select.component.html',
  styleUrls: ['./level-select.component.scss'],
})
export class LevelSelectComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit() {}

  selectLevel(l: Level) {

  }

}

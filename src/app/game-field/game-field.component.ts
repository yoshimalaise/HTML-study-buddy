import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit() {}

}

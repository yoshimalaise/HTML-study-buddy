import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-goal-snippet',
  templateUrl: './goal-snippet.component.html',
  styleUrls: ['./goal-snippet.component.scss'],
})
export class GoalSnippetComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit() {}

}

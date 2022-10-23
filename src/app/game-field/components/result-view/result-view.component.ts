import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-result-view',
  templateUrl: './result-view.component.html',
  styleUrls: ['./result-view.component.scss'],
})
export class ResultViewComponent implements OnInit {

  constructor(public state: StateService) { }

  ngOnInit() {}

}

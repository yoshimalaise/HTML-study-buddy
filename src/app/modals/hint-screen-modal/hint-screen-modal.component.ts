import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-hint-screen-modal',
  templateUrl: './hint-screen-modal.component.html',
  styleUrls: ['./hint-screen-modal.component.scss'],
})
export class HintScreenModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController, public state: StateService) { }

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

}

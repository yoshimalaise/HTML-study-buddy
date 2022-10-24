import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { ModalController } from '@ionic/angular';
import { HintScreenModalComponent } from '../modals/hint-screen-modal/hint-screen-modal.component';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit {

  constructor(public state: StateService, private modalCtrl: ModalController) { }

  ngOnInit() {}

  async showHelp() {
    const modal = await this.modalCtrl.create({
      component: HintScreenModalComponent,
    });
    modal.present();
  }

}

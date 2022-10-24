import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { StateService } from '../services/state.service';
import { ModalController } from '@ionic/angular';
import { ShepherdService } from 'angular-shepherd';
import { HintScreenModalComponent } from '../modals/hint-screen-modal/hint-screen-modal.component';
import { getTutorialSteps } from './tutorials/main.tutorial';

@Component({
  selector: 'app-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss'],
})
export class GameFieldComponent implements OnInit, AfterViewInit {
  currentTab: 'code' | 'result' | 'goal' = 'code';

  constructor(public state: StateService, private modalCtrl: ModalController, private shepherdService: ShepherdService) { }
  
  ngOnInit() {}

  async showHelp() {
    const modal = await this.modalCtrl.create({
      component: HintScreenModalComponent,
    });
    modal.present();
  }

  ngAfterViewInit(): void {
   if (this.state.showTutorial) {
    this.shepherdService.modal = true;
    this.shepherdService.confirmCancel = false;
    this.shepherdService.addSteps(getTutorialSteps((tab) => this.currentTab = tab));
    this.shepherdService.start();
   }
  }

 
}

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { StateService } from 'src/app/services/state.service';
import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

@Component({
  selector: 'app-presentation-modal',
  templateUrl: './presentation-modal.component.html',
  styleUrls: ['./presentation-modal.component.scss'],
})
export class PresentationModalComponent implements OnInit, AfterViewInit {
  deck: any;

  constructor(private modalCtrl: ModalController, public state: StateService) { }

  ngOnInit() {}

  close() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

  ngAfterViewInit(): void {
    if (!this.deck) {
      this.deck = new Reveal({plugins: [
        Markdown,
        Highlight,
      ]});
    }
    
    this.deck.initialize(document.querySelector( '.slides' ), {
      embedded: true,
      markdown: {
        smartypants: true
      }
    });
  }


}

import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent, ModalController } from '@ionic/angular';
import { ICard } from "../../models/card";
import { CardModalComponent } from "../../components/card-modal/card-modal.component";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent {
  data: ICard[] = [];
  maxDataCount = 30;

  constructor(private modalController: ModalController) {
    this.generateItems();
  }

  generateItems() {
    if (!(this.data.length >= this.maxDataCount)) {
      for (let i = 0; i < 10; i++) {
        this.data.push({
          title: 'Card Title - ' + window.crypto.randomUUID(),
          text: 'Card Text -  ' + window.crypto.randomUUID(),
          image: 'https://i.imgur.com/CzXTtJV.jpg'
        })
      }
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

  deleteCardEvent(cardTitle: string) {
    this.data = this.data.filter(x => x.title != cardTitle);
  }

  async addCard() {
    const modal = await this.modalController.create({
      component: CardModalComponent
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.data.push(result.data);
      }
    });
    return await modal.present();
  }
}

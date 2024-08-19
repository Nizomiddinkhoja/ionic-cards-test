import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ICard } from "../../models/card";

@Component({
  selector: 'app-card-modal',
  templateUrl: './card-modal.component.html',
  styleUrls: ['./card-modal.component.scss'],
})
export class CardModalComponent {
  card: ICard = {
    title: '',
    text: ''
  };

  constructor(private modalController: ModalController) {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    this.modalController.dismiss(this.card);
  }
}

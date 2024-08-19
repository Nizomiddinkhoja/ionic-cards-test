import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICard } from "../../models/card";
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card: ICard;
  @Output() deleteEvent = new EventEmitter<string>();


  constructor(private router: Router) {
  }

  openCardDetail(card: ICard) {
    this.router.navigate(['cards/info', {card: JSON.stringify(card)}]);
  }

  delete(event: Event, card: ICard) {
    event.stopPropagation();
    this.deleteEvent.emit(card.title);
  }
}

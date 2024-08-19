import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICard } from "../../../models/card";
import { HelperService } from "../../../services/helper.service";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  value: string;
  card: ICard;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private helperService: HelperService
  ) {
    this.route.params.subscribe(params => {
      this.card = JSON.parse(params['card']);
    });
  }

  saveInput() {
    if (this.value?.length) {
      this.helperService.lastInput.next(this.value);
      this.router.navigate(['/cards']);
    }
  }

}

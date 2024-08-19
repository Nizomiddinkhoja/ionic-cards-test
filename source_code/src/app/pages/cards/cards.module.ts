import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./cards.component";
import { CardInfoComponent } from "./card-info/card-info.component";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CardComponent } from "../../components/card/card.component";
import { CardModalComponent } from "../../components/card-modal/card-modal.component";

const routes: Routes = [
  {
    path: '',
    component: CardsComponent,
  },
  {
    path: 'info',
    component: CardInfoComponent,
  },
];

@NgModule({
  declarations: [
    CardsComponent,
    CardInfoComponent,
    CardComponent,
    CardModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    IonicModule,
  ]
})
export class CardsModule {
}

import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { HelperService } from "../../services/helper.service";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  destroyRef = inject(DestroyRef);
  lastResult: string;

  constructor(private helperService: HelperService) {
  }

  ngOnInit(): void {
    this.helperService.lastInput
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(lastResult => this.lastResult = lastResult);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // intervallo di refresh
  inputRefresh = 1;

  constructor() {}

  printValue() {
    console.log('inputRefresh: ', this.inputRefresh);
  }

}

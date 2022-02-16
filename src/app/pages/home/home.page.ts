import { Component } from '@angular/core';

export interface notificationSettings {
  title:      string;
  body:       string;
  id:         number;
  schedule:   any;
  autoCancel: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  settings: notificationSettings = { 
    title : '',
    body  : '',
    id : 0,
    schedule : '',
    autoCancel : false
  };

  // intervallo di refresh
  inputRefresh = 1;

  constructor() {}

  printValue() {
    console.log(this.settings);
  }

  resetValue() {
    this.settings = {
      title : '',
      body  : '',
      id : 0,
      schedule : '',
      autoCancel : false
    }
    console.log(this.settings);
  }

}

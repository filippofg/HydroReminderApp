import { Component } from '@angular/core';

export interface notificationSettings {
  title:      string;
  body:       string;
  id:         number;
  schedule:   any;
  autoCancel: boolean;
}

export interface scheduleSettings {
  allowWhileIdle: boolean;
  every:          string;
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

  schedule: scheduleSettings = {
    allowWhileIdle: false,
    every: ''  
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
    this.schedule = {
      allowWhileIdle : false,
      every : ''
    }
    console.log(this.settings);
    console.log(this.schedule);
  }

}

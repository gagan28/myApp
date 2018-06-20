import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsInPage } from './events-in';

@NgModule({
  declarations: [
    EventsInPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsInPage),
  ],
})
export class EventsInPageModule {}

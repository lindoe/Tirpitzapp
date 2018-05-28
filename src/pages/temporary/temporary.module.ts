import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TemporaryPage } from './temporary';

@NgModule({
  declarations: [
    TemporaryPage,
  ],
  imports: [
    IonicPageModule.forChild(TemporaryPage),
  ],
})
export class TemporaryPageModule {}

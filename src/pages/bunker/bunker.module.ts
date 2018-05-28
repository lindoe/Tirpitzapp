import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BunkerPage } from './bunker';

@NgModule({
  declarations: [
    BunkerPage,
  ],
  imports: [
    IonicPageModule.forChild(BunkerPage),
  ],
})
export class BunkerPageModule {}

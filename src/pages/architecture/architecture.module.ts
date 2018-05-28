import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchitecturePage } from './architecture';

@NgModule({
  declarations: [
    ArchitecturePage,
  ],
  imports: [
    IonicPageModule.forChild(ArchitecturePage),
  ],
})
export class ArchitecturePageModule {}

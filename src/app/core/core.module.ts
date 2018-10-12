import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//import { MaterialModule } from '../material';

export const COMPONENTS = [

];

@NgModule({
  imports: [
      CommonModule, 
      RouterModule, 
      //MaterialModule
    ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class CoreModule {}

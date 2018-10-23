import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackListComponent } from './containers/stack-list/stack-list.component';
import { StackDetailComponent } from './containers/stack-detail/stack-detail.component';
import { CardStackComponent } from './components/card-stack/card-stack.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { AddStackComponent } from './components/add-stack/add-stack.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { StackRoutingModule } from './stack-routing.module';

import {
  MatNativeDateModule,
  MatSelectModule,
  MatTooltipModule,
  MatInputModule,
  MatCheckboxModule } from '@angular/material'
import { ItemFormComponent } from './form/item-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    StackRoutingModule,
    MatSelectModule,
    MatTooltipModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  declarations: [
    StackListComponent,
    StackDetailComponent,
    CardStackComponent,
    CardItemComponent,
    AddStackComponent,
    AddItemComponent,
    ItemFormComponent
  ],
  
})
export class StackModule { }

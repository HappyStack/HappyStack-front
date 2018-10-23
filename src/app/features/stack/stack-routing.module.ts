import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StackListComponent } from './containers/stack-list/stack-list.component';
import { StackDetailComponent } from './containers/stack-detail/stack-detail.component';

const routes: Routes = [
    // - V2
    // { path: '', component: StackListComponent },
    // { path: ':id', component: StackDetailComponent },

    // - V1
    { path: '', component: StackDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackRoutingModule { }

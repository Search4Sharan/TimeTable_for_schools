import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStatusComponent } from './view-status/view-status.component';

const routes: Routes = [
  {
    path: '',
    component: ViewStatusComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class ViewRoutingModule {}

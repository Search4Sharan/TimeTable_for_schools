import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditStatusComponent } from './edit/edit-status.component';

const routes: Routes = [
  {
    path: '',
    component: EditStatusComponent,
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)],
  providers: [],
})
export class EditRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditStatusComponent } from './edit/edit-status.component';
import { EditRoutingModule } from './edit-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [EditStatusComponent],
  imports: [CommonModule, EditRoutingModule, CoreModule],
})
export class EditStatusModule {}

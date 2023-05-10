import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewStatusComponent } from './view-status/view-status.component';
import { ViewRoutingModule } from './view-routing.module';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [ViewStatusComponent],
  imports: [CommonModule, ViewRoutingModule, CoreModule],
})
export class ViewStatusModule {}

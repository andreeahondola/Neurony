import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FeaturesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule
  ],
  exports: [
    FeaturesComponent
  ]
})
export class FeaturesModule {
}

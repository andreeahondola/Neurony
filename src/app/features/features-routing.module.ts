import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

// tslint:disable:typedef
const featuresRoutes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: '', redirectTo: 'acasa', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(featuresRoutes)],
  exports: [RouterModule]
})

export class FeaturesRoutingModule {
}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { ListComponent } from './features/list/list.component';


const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {path: '', redirectTo: 'list', pathMatch: 'full'},
      {path: 'list', component: ListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

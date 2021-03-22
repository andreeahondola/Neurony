import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent
  ]
})

export class SharedModule {

}

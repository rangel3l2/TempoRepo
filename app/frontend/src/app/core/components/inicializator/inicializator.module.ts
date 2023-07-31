import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ModalInicializatorComponent } from './modal-inicializator/modal-inicializator.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ ModalInicializatorComponent],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    RouterModule,

  ],
  exports:[
   ModalInicializatorComponent
  ]

})
export class InicializatorModule { }

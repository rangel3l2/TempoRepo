import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';

const COMPONENTS = [
  MatIconModule, 
  MatDialogModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule, 
  MatRadioModule,
  MatProgressSpinnerModule,
  MatTooltipModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    COMPONENTS,
  ]
})
export class MaterialModule { }

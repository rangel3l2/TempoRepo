import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicializatorComponent } from './inicializator/inicializator.component';
import { DataManagerComponent } from './data-manager/data-manager.component';
import { WebscrapingManagerComponent } from './webscraping-manager/webscraping-manager.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ModalInicializatorComponent } from './inicializator/modal-inicializator/modal-inicializator.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material/material.module';

import {FormsModule} from '@angular/forms';
import { InicializatorModule } from './inicializator/inicializator.module';
import { ShareDataService } from '../services/share-data/share-data.service';
const COMPONENTS= [
  HeaderComponent,
  FooterComponent,
  InicializatorComponent,
  WebscrapingManagerComponent,
  DataManagerComponent,


]

@NgModule({

  declarations: [
    COMPONENTS,

  ],
  providers: [ShareDataService],

  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    InicializatorModule

  ],
  exports:[
    COMPONENTS
  ]
})
export class ComponentsModule { }

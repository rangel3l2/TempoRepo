import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './core/layout/default/default.component';
import { WebscrapingManagerComponent } from './core/components/webscraping-manager/webscraping-manager.component';
import { InicializatorComponent } from './core/components/inicializator/inicializator.component';
import { DataManagerComponent } from './core/components/data-manager/data-manager.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: 'web',
        component: WebscrapingManagerComponent,
        children: [
          {
            path: 'inicializator',
            component: InicializatorComponent
          },
          {
            path: 'data-manager',
            component: DataManagerComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

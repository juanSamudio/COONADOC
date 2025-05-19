import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { FormatosComponent } from './components/formatos/formatos.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { CreditosComponent } from './components/creditos/creditos.component';
import { TurismoComponent } from './components/turismo/turismo.component';

const routes: Routes =[
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home',             component: ComponentsComponent },
    {path: 'formatos',         component: FormatosComponent },
    {path: 'politicas',       component: PoliticasComponent },
    {path: 'creditos',        component: CreditosComponent },
    {path: 'turismo',          component: TurismoComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }

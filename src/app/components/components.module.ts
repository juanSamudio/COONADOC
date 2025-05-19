import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { NavigationComponent } from './navigation/navigation.component';
import { ComponentsComponent } from './components.component';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './start/start.component';
import { Footer2Component } from './footer2/footer2.component';
import { FormatosComponent } from './formatos/formatos.component';
import { PoliticasComponent } from './politicas/politicas.component';
import { CreditosComponent } from './creditos/creditos.component';
import { TurismoComponent } from './turismo/turismo.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [
        ComponentsComponent,
        NavigationComponent,
        FooterComponent,
        StartComponent,
        Footer2Component,
        FormatosComponent,
        PoliticasComponent,
        CreditosComponent,
        TurismoComponent,
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }

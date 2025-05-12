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
        StartComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }

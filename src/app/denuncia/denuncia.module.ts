import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { denunciaPage } from './denuncia.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { denunciaPageRoutingModule } from './denuncia-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ReactiveFormsModule,
    denunciaPageRoutingModule
  ],
  declarations: [denunciaPage]
})
export class denunciaPageModule {}

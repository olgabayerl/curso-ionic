import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { CepPage } from './cep.page';

import { CepPageRoutingModule } from './cep-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CepPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CepPage]
})
export class CepPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaDenunciasPageRoutingModule } from './lista-denuncias-routing.module';

import { ListaDenunciasPage } from './lista-denuncias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaDenunciasPageRoutingModule
  ],
  declarations: [ListaDenunciasPage]
})
export class ListaDenunciasPageModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaDenunciasPage } from './lista-denuncias.page';

const routes: Routes = [
  {
    path: '',
    component: ListaDenunciasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaDenunciasPageRoutingModule {}

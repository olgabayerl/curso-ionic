import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { denunciaPage } from './denuncia.page';

const routes: Routes = [
  {
    path: '',
    component: denunciaPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class denunciaPageRoutingModule {}

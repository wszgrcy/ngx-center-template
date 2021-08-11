import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'project1',
    loadChildren: () =>
      fetch('http://127.0.0.1:4222/bootstrap.json')
        .then((item) => item.json())
        .then((item) => loadRemoteModuleManifest(item))
        .then((item) => item.module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

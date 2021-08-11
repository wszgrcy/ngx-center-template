import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
const routes: Routes = [
  {
    path: 'project1',
    loadChildren: () =>
      fetch(`${environment.project1Prefix}bootstrap.json`)
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

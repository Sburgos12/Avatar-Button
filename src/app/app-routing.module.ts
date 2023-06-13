import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'avatar', loadChildren: () => import('./pages/avatar/avatar.module').then( m => m.AvatarPageModule)},
  { path: 'botones', loadChildren: () => import('./pages/botones/botones.module').then( m => m.BotonesPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

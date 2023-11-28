import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './pages/user/user.module';
import { IndexModule } from './pages/index/index.module';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'users', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule,
    IndexModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

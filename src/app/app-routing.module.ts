import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './pages/user/user.module';
import { IndexModule } from './pages/index/index.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AuthGuardService } from './core/services/authGuard/auth-guard.service';	

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'users', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/projects/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' }
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

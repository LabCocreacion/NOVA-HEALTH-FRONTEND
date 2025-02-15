import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './pages/user/user.module';
import { IndexModule } from './pages/index/index.module';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { AuthGuardService } from './core/services/authGuard/auth-guard.service';

const routes: Routes = [
  { path: 'index', loadChildren: () => import('./pages/index/index.module').then(m => m.IndexModule) },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'cocreamos-usuarios', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule), canActivate: [AuthGuardService] },
  { path: 'dashboard', loadChildren: () => import('./pages/projects/dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthGuardService] },
  { path: 'phantom', loadChildren: () => import('./pages/projects/phantom/phantom.module').then(m => m.PhantomModule), canActivate: [AuthGuardService] },
  { path: 'tamizacion-mama', loadChildren: () => import('./pages/projects/tmama/tmama.module').then(m => m.TmamaModule), canActivate: [AuthGuardService] },
  
  // Forever End
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: '**', redirectTo: '/index' },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    IndexModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

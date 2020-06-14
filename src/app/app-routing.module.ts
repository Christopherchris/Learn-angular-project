import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { P404Component } from './p404/p404.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ng-fundamentals', loadChildren: () => import('./ng-fundamentals/fundamentals.module').then(m => m.FundamentalsModule) },
  { path: 'typescript', loadChildren: () => import('./typescript/typescript.module').then(m => m.TypescriptModule) },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

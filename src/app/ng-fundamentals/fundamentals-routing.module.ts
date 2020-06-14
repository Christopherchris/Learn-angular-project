import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundamentalsComponent } from './fundamentals.component';

const routes: Routes = [
  { path: '', component: FundamentalsComponent },
  { path: 'components', loadChildren: () => import('./fundamentals/components/components.module').then(m => m.ComponentsModule) },
  { path: 'directives', loadChildren: () => import('./fundamentals/directives/directives.module').then(m => m.DirectivesModule) },
  { path: 'templates', loadChildren: () => import('./fundamentals/templates/templates.module').then(m => m.TemplatesModule) },
  { path: 'services', loadChildren: () => import('./fundamentals/services/services.module').then(m => m.ServicesModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundamentalsRoutingModule { }

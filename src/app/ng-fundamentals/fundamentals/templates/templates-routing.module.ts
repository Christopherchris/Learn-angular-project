import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemplateComponent } from './template/template.component';
import { TemplatesComponent } from './templates.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const routes: Routes = [
  {
    path: '', component: TemplatesComponent,
    children: [
      { path: '', component: TemplateComponent },
      { path: 'property-binding', component: PropertyBindingComponent },
      { path: 'attribute-binding', component: AttributeBindingComponent },
      { path: 'class-binding', component: ClassBindingComponent },
      { path: 'style-binding', component: StyleBindingComponent },
      { path: 'event-binding', component: EventBindingComponent },
      { path: 'event-filtering', component: EventFilteringComponent },
      { path: 'template-variables', component: TemplateVariablesComponent },
      { path: 'two-way-binding', component: TwoWayBindingComponent },
      { path: 'pipes', component: PipesComponent },
      { path: 'custom-pipes', component: CustomPipesComponent },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }

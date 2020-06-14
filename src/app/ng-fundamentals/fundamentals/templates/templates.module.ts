import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplatesRoutingModule } from './templates-routing.module';
import { TemplatesComponent } from './templates.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { TemplateComponent } from './template/template.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { TemplateVariablesComponent } from './template-variables/template-variables.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';


@NgModule({
  declarations: [TemplatesComponent, PropertyBindingComponent, TemplateComponent, AttributeBindingComponent, ClassBindingComponent, StyleBindingComponent, EventBindingComponent, TwoWayBindingComponent, EventFilteringComponent, TemplateVariablesComponent, PipesComponent, CustomPipesComponent],
  imports: [
    CommonModule,
    TemplatesRoutingModule
  ]
})
export class TemplatesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttrDirective } from './attr.directive';
import { StructDirective } from './struct.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AttrDirective, StructDirective],
  exports: [AttrDirective, StructDirective]
})
export class ShowcaseModule { }

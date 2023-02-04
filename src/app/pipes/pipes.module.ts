import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ExtensionPipe } from './extension.pipe';



@NgModule({
  declarations: [SafePipe, ExtensionPipe],
  imports: [
    CommonModule
  ],
  exports: [SafePipe, ExtensionPipe]
})
export class PipesModule { }

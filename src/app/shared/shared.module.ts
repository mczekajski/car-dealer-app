import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from './ui/tooltip/tooltip.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, TooltipModule],
  exports: [TooltipModule],
})
export class SharedModule {}

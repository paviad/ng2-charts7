import { NgModule } from '@angular/core';
import { ChartsComponent as ChartsComponent } from './charts.component';
import { BaseChartDirective } from './base-chart.directive';

@NgModule({
  declarations: [ChartsComponent, BaseChartDirective],
  imports: [
  ],
  exports: [ChartsComponent]
})
export class ChartsModule { }

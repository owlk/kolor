import { Component } from '@angular/core';
import * as color from 'color';
import { ColorCalculationService } from './color-calculation/color-calculation.service';
import { ColorSet } from './color-calculation/color-set';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ColorCalculationService: ColorCalculationService;

  baseColorCode = '#AA0000';

  colorSet: ColorSet;

   constructor(ColorCalculationService: ColorCalculationService) {
     this.ColorCalculationService = ColorCalculationService;
     this.calculateColors();
  }

  baseColorChanged() {
      this.calculateColors();
  }

  private calculateColors() {
    this.colorSet = this.ColorCalculationService.calculateColorSet(this.baseColorCode);
  }

  

}

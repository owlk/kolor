import { Injectable } from '@angular/core';
import { ColorSet } from './color-set'
import * as Color from 'color';

@Injectable()
export class ColorCalculationService {

  private white = Color('#ffffff');
  private black = Color('#000000');

  constructor() { }

  calculateColorSet(baseColorCode: string): ColorSet {
    console.log('color set calculated', baseColorCode)
    try {
      const baseColor = Color(baseColorCode);
      const complementaryColor = this.calculateComplementaryColor(baseColor);
      const mixedBaseColor = this.mixColor(baseColor, complementaryColor);
      const mixedComplementaryColor = this.mixColor(complementaryColor, baseColor);
      
      const baseNeutrals = this.calculateNeutrals(mixedBaseColor);
      const complementaryNeutrals = this.calculateNeutrals(mixedComplementaryColor);

      return new ColorSet(baseColor, complementaryColor, 
                          mixedBaseColor, mixedComplementaryColor, baseNeutrals, complementaryNeutrals);
    } catch(e) {
      return new ColorSet(null, null, null, null, [], []);
    }
  }

  private calculateNeutrals(color: Color.Color){
    
      return [color.mix(this.white, .2), color.mix(this.white, .5), color.mix(this.black, .6)];
  }

  private mixColor(color1: Color.Color, color2: Color.Color){
      return color1.mix(color2, .8);
  }

  private calculateComplementaryColor(baseColor: Color.Color){
      return baseColor.rotate(180);
  }

}

import * as color from 'color';

export class ColorSet {

  constructor(public baseColor: color.Color,
              public complementaryColor: color.Color,
              public mixedBaseColor: color.Color,
              public mixedComplementaryColor: color.Color,
              public baseNeutrals: Array<color.Color>,  
              public complementaryNeutrals : Array<color.Color>) { 
  }

}
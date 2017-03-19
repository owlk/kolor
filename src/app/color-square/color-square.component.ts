import { Component, OnInit, Input } from '@angular/core';
import * as color from 'color';

@Component({
  selector: 'color-square',
  templateUrl: './color-square.component.html',
  styleUrls: ['./color-square.component.scss']
})
export class ColorSquareComponent implements OnInit {

  @Input() color: color.Color;

  constructor() { }

  ngOnInit() {
  }

}

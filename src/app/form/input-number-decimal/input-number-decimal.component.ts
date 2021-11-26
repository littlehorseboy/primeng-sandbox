import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number-decimal',
  templateUrl: './input-number-decimal.component.html',
  styleUrls: ['./input-number-decimal.component.scss']
})
export class InputNumberDecimalComponent implements OnInit {

  public value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

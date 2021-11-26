import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number-basic',
  templateUrl: './input-number-basic.component.html',
  styleUrls: ['./input-number-basic.component.scss']
})
export class InputNumberBasicComponent implements OnInit {

  public value = 0;

  constructor() { }

  ngOnInit(): void {
  }

}

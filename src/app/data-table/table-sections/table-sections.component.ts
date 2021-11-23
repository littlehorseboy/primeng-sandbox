import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-sections',
  templateUrl: './table-sections.component.html',
  styleUrls: ['./table-sections.component.scss']
})
export class TableSectionsComponent implements OnInit {

  public cars = [
    { brand: 'Mercedes', year: 1995, color: 'Orange', vin: 'hrtwy34' },
    { brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
    { brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
    { brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
    { brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
    { brand: 'Volvo', year: 2005, color: 'Black', vin: 'jejtyj' },
    { brand: 'Honda', year: 2012, color: 'Yellow', vin: 'g43gr' },
    { brand: 'Ford', year: 2000, color: 'Black', vin: 'h54hw5' },
    { brand: 'Fiat', year: 2013, color: 'Red', vin: '245t2s' },
    { brand: 'Jaguar', year: 2013, color: 'Orange', vin: 'greg34' },
  ];

  public cols = [
    { field: 'vin', header: 'Vin' },
    { field: 'year', header: 'Year' },
    { field: 'brand', header: 'Brand' },
    { field: 'color', header: 'Color' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

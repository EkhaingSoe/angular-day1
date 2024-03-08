import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  InStock:number=0;
  @Input()
  OutOfStock:number=0;

  selectedRadioButton : string ="all"

  

}

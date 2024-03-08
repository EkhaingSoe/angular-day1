import { Component, EventEmitter, Input, Output } from '@angular/core';

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

  @Output() SelectedRadioButtonChanged = new EventEmitter<string>();

  sendDataToParent(){

    console.log(this.selectedRadioButton);
    this.SelectedRadioButtonChanged.emit(this.selectedRadioButton)
    

  }

  

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() showExpired: boolean = false;
  @Output() changeCheckExpired: EventEmitter<boolean> = new EventEmitter(); 
  @Output() changeOrderBy: EventEmitter<string> = new EventEmitter();
  @Output() changeOrdinate: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeShowExpired() {
    this.changeCheckExpired.emit(this.showExpired);
  }

  changeField(event: any) {
    this.changeOrderBy.emit(event.target.value)
  }

  changeOrder(event: any) {
    this.changeOrdinate.emit(event.target.value)
  }

}

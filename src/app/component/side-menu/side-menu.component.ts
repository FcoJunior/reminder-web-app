import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  @Input() showExpired: boolean = false;
  @Output() changeCheckExpired: EventEmitter<boolean> = new EventEmitter(); 

  constructor() { }

  ngOnInit() {
  }

  changeShowExpired() {
    this.changeCheckExpired.emit(this.showExpired);
  }

}

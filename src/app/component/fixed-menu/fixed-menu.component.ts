import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-fixed-menu',
  templateUrl: './fixed-menu.component.html',
  styleUrls: ['./fixed-menu.component.scss']
})
export class FixedMenuComponent implements OnInit {

  @Output() newReminder: EventEmitter<null> = new EventEmitter();
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() badgeCount = 0;

  constructor() { }

  ngOnInit() {
  }

  menuButtonClick() {
    this.newReminder.emit(null);
  }

  changeSearch(event: any) {
    this.search.emit(event.target.value);
  }

}

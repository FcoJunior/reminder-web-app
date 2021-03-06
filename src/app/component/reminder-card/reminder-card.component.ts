import { ReminderDomain } from './../../domain/reminder.domain';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-reminder-card',
  templateUrl: './reminder-card.component.html',
  styleUrls: ['./reminder-card.component.scss']
})
export class ReminderCardComponent implements OnInit {

  @Input() reminder: ReminderDomain = new ReminderDomain();

  constructor() { }

  ngOnInit() {
  }

}

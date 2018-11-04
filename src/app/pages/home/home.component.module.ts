import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { ReminderService } from '../../service/reminder.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ReminderService
  ],
})
export class HomeComponentModule {}

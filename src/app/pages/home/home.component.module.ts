import { ReminderCardComponent } from './../../component/reminder-card/reminder-card.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { BsDatepickerModule, TimepickerModule } from 'ngx-bootstrap';
import { ReminderService } from '../../service/reminder.service';
import { CommonModule } from '@angular/common';
import { FixedMenuComponent } from '../../component/fixed-menu/fixed-menu.component';
import { SideMenuComponent } from '../../component/side-menu/side-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationProvider } from '../../provider/notification.provider';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [
    HomeComponent,
    FixedMenuComponent,
    SideMenuComponent,
    ReminderCardComponent
  ],
  imports: [
    CommonModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    ReminderService,
    NotificationProvider
  ],
})
export class HomeComponentModule {}

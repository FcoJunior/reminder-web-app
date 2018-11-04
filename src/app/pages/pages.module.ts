import { NgModule } from '@angular/core';
import { HomeComponentModule } from './home/home.component.module';
import { ModalModule, TimepickerModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    ModalModule.forRoot(),
    TimepickerModule.forRoot(),
    HomeComponentModule
  ],
  exports: [
    HomeComponentModule
  ],
  providers: []
})
export class PagesModule {}

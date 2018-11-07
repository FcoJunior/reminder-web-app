import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routing } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { HttpModule } from '@angular/http';
import {SnotifyModule, SnotifyService, ToastDefaults} from 'ng-snotify';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Routing,
    PagesModule,
    HttpModule,
    SnotifyModule
  ],
  providers: [
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

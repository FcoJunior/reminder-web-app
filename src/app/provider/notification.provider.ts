import { Injectable } from "@angular/core";
import { SnotifyService } from "ng-snotify";
import { ReminderDomain } from "../domain/reminder.domain";

@Injectable()
export class NotificationProvider {
  private readonly _localKey: string = 'reminder_notifications'; 

  constructor(private _snotifyService: SnotifyService) { 
    if (!localStorage.getItem(this._localKey)) {
      localStorage.setItem(this._localKey, JSON.stringify([]));
    }
  }

  wasShowScreen(reminderId: string): boolean {
    let list = this._getNotificationList();
    return list.filter(x => x.id == reminderId).length > 0;
  }

  showNotify(reminder: ReminderDomain) {
    let html = this._buildHtml(reminder);

    let toaster = this._snotifyService.confirm(null, {
      timeout: 10000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      html: html,
      buttons: [ ]
    }).on('click', toast => {
      let list = this._getNotificationList();
      for (let index = 0; index < list.length; index++) {
        let element = list[index];
        if (element.toasterId == toast.id) {
          element.clicked = true;
          break;
        }
      }
      this._saveCacheList(list);
    });

    let list = this._getNotificationList();
    list.push(Object.assign({ clicked: false, toasterId: toaster.id }, reminder));
    this._saveCacheList(list);
  }

  private _getNotificationList(): any[] {
    var list = localStorage.getItem(this._localKey);
    return JSON.parse(list);
  }

  private _saveCacheList(list: any[]) {
    list = list.filter(x => { if (new Date(x.dateString) >= new Date()) { return x } })
    localStorage.setItem(this._localKey, JSON.stringify(list));
  }

  private _buildHtml(reminder: ReminderDomain): string {
    return `<div class="snotifyToast__title">${ reminder.title }</div>
    <div class="snotifyToast__body"><b>${ reminder.date_format }</b><div>
    <div class="snotifyToast__body">${ reminder.description }</div>
    <div class="mt-2 font-italic font-weight-bold">${ reminder.sponsor }</div>`;
  }
}
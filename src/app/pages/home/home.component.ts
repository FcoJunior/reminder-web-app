import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { defineLocale, ptBrLocale, BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap';
import { ReminderService } from '../../service/reminder.service';
import { ReminderDomain } from '../../domain/reminder.domain';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReminderSelector } from '../../selector/reminder.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  modalRef: BsModalRef;
  bsConfig: Partial<BsDatepickerConfig>;
  stickyNotes: ReminderDomain[] = [];
  showExpired: boolean = true;
  formGroup: FormGroup;
  reminder: ReminderDomain = new ReminderDomain();
  selector: ReminderSelector = new ReminderSelector();

  constructor(
    private _modalService: BsModalService,
    private _localeService: BsLocaleService,
    private _reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });
    defineLocale('pt-br', ptBrLocale);
    this._localeService.use('pt-br');

    this._searchItems();

    this.formGroup = new FormGroup({
      'title': new FormControl(this.reminder.title, Validators.required),
      'description': new FormControl(this.reminder.description, Validators.required),
      'day': new FormControl(this.reminder.day, Validators.required),
      'time': new FormControl(this.reminder.time, Validators.required),
      'sponsor': new FormControl(this.reminder.sponsor, Validators.required)
    });
  }

  save() {
    this._reminderService.create(this.reminder).subscribe(x => {
      this.stickyNotes.push(x);
    })
    this.reminder = new ReminderDomain();
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

  searchByTitle(value) {
    this.selector.Title = value;
    this._searchItems();
  }

  changeOrdinate(value) {
    this.selector.Ordination = value;
    this._searchItems();
  }

  changeOrderBy(value) {
    this.selector.OrderByField = value;
    this._searchItems();
  }

  private _searchItems() {
    this._reminderService.get(this.selector)
      .subscribe(x => { this.stickyNotes = x });
  }

}

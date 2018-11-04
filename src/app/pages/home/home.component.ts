import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { defineLocale, ptBrLocale, BsDatepickerConfig, BsLocaleService } from 'ngx-bootstrap';
import { ReminderService } from '../../service/reminder.service';
import { ReminderDomain } from '../../domain/reminder.domain';

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

  constructor(
    private _modalService: BsModalService,
    private _localeService: BsLocaleService,
    private _reminderService: ReminderService
  ) {}

  ngOnInit() {
    this.bsConfig = Object.assign({}, { containerClass: 'theme-red' });
    defineLocale('pt-br', ptBrLocale);
    this._localeService.use('pt-br');

    this._reminderService.get().subscribe(x => { this.stickyNotes = x });
  }


  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(
      template,
      Object.assign({}, { class: 'modal-lg' })
    );
  }

}

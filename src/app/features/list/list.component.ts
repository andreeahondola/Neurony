import { Component, TemplateRef } from '@angular/core';
import { ListService } from '../../core/services/list.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ListItem } from '../../core/models/list-item.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent {
  searchKey = undefined;
  listItems: Array<ListItem> = [];
  modalRef: BsModalRef;

  constructor(private listService: ListService,
              private modalService: BsModalService) {
  }

  submit(): void {
    this.listService.getList(this.searchKey).subscribe(
      (data: Array<ListItem>): void => {
        this.listItems = [...data];

        this.listItems = this.listItems.sort((a, b) => a.ups < b.ups ? 1 : -1);
        this.listItems = this.listItems.slice(0, 10);
      },
      (err: HttpErrorResponse): void => {
        this.listItems = [];
      });
  }

  showInfo(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}

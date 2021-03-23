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

        this.sortItems();
      },
      (err: HttpErrorResponse): void => {
        this.listItems = [];
      });
  }

  showInfo(template: TemplateRef<any>) {
    const modalConfig = {
      animated: true,
      class: 'modal-dialog-centered modal-lg'
    };
    this.modalRef = this.modalService.show(template, modalConfig);
  }

  private sortItems(): void {
    this.listItems = this.listItems.sort((item1, item2) => item1.ups < item2.ups ? 1 : -1);
    this.listItems = this.listItems.slice(0, 10);
  }
}

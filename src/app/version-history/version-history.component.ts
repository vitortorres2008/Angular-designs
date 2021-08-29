import { ModalBtnComponent } from './../components/modal-btn/modal-btn.component';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as objectjson from '../side-bar.json';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-version-history',
  templateUrl: './version-history.component.html',
  styleUrls: ['./version-history.component.css']
})
export class VersionHistoryComponent implements OnInit {

  objjson: any = {}
  item: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.objjson = objectjson
  }

  public restoreConfirm(){

  } 

  public async restoreVersion(){
    const modalRef = this.modalService.open(ModalBtnComponent);
    let restore = false;
    modalRef.componentInstance.onRestore = () => {
      modalRef.close();
      restore = true;
    }
    modalRef.componentInstance.onCancel = () => {
      modalRef.dismiss();
    }

    await modalRef.result;

    if(restore) {
      this.restoreConfirm();
    }
  }

  openModal(item: { openModal: boolean; }){
    item.openModal = !item.openModal
  }
}

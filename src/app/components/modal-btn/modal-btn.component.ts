import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-btn',
  templateUrl: './modal-btn.component.html',
  styleUrls: ['./modal-btn.component.css']
})
export class ModalBtnComponent implements OnInit {

  @Input() 
  public onRestore!: () => void;

  @Input()
  public onCancel!: () => void;

  public someDate: string = "19/08/2021"
  public projectName: string = "Project1"

  constructor() { }

  ngOnInit(): void {
  }
}

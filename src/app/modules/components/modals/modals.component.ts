import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Mercancia } from 'src/app/model/mercancia';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css']
})
export class ModalsComponent implements OnInit {

  @Output() closeModal : EventEmitter<any> = new EventEmitter();
  @Input() mercanciaResponse : Mercancia; 
  @Input() mensajeModal : string;

  constructor() { }

  ngOnInit(): void {
  }

  closeModalConfirm(){
    console.log("entr")
    this.closeModal.emit();
  }

}

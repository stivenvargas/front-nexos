import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Mercancia } from 'src/app/model/mercancia';
import { MercanciaService } from 'src/app/service/mercanciaService';
import { UsuarioService } from 'src/app/service/usuarioService';

@Component({
  selector: 'app-mercancia',
  templateUrl: './mercancia.component.html',
  styleUrls: ['./mercancia.component.css']
})
export class MercanciaComponent implements OnInit {

  constructor(private userService: UsuarioService, private mercanciaService : MercanciaService,
    private config: NgbModalConfig, private modalService: NgbModal) {
      this.config.backdrop = 'static';
      this.config.keyboard = false;
     }
     subcriptionUser : Subscription;
     subcriptionMercancia : Subscription;
     @ViewChild("contentModal") contenModal : ElementRef;
     @ViewChild("contentModalEdit") contenModalEdit : ElementRef;
     mensajeModal = '';
     listMercancia : Mercancia[];
     mercanciaEdit : Mercancia;

  ngOnInit(): void {
    this.getAllMercanciaService();
  }

  getAllMercanciaService(){
    this.listMercancia = [];
    this.subcriptionMercancia = this.mercanciaService.getAllMercancia().subscribe(response => {
      this.listMercancia = response;
      console.log("Lista: ", this.listMercancia);
    },error => {
      this.mensajeModal = `Error al procesar`;
      this.modalService.open(this.contenModal,this.config);
      console.error(error);
    })
  }

  editMercancia(mercancia : Mercancia){
      this.mercanciaEdit = mercancia;
      console.log("edit : ", this.editMercancia);
      this.modalService.open(this.contenModalEdit,this.config);
  }

  closeModalHome(){
    this.modalService.dismissAll();
    this.getAllMercanciaService();
  }

  deleteMercancia(id : number){
    this.subcriptionMercancia = this.mercanciaService.deleteMercancia(id).subscribe(response=> {
      console.log(response);
      this.getAllMercanciaService();
    })
  }

}

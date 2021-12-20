import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { Mercancia } from 'src/app/model/mercancia';
import { Usuario } from 'src/app/model/usuario';
import { MercanciaService } from 'src/app/service/mercanciaService';
import { UsuarioService } from 'src/app/service/usuarioService';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild("contentModal") contenModal : ElementRef;
  mercancia : Mercancia;
  usuario : Usuario;
  subcriptionUser : Subscription;
  subcriptionMercancia : Subscription;
  lisUsuario : Usuario[];
  nombreProducto: string = '';
  fechaRegistro : Date;
  cantidad : number; 
  prueb : string = '';
  mercanciaResponse : Mercancia;
  mensajeModal = '';


  constructor(private userService: UsuarioService, private mercanciaService : MercanciaService,
              private config: NgbModalConfig, private modalService: NgbModal) { 
                this.config.backdrop = 'static';
                this.config.keyboard = false;
              }

  ngOnInit(): void {
    this.getUser();
    console.log("usu: ",this.usuario);
  }

  getUser(){
  this.subcriptionUser = this.userService.getAllUser().subscribe(response =>{
        this.lisUsuario = response;
  },error => {
    this.mensajeModal = `Error al procesar`;
    this.modalService.open(this.contenModal,this.config);
    console.error(error);
  })
  }

  closeModalHome(){
    this.mercancia = new Mercancia();
    this.usuario = undefined;
    this.nombreProducto = '';
    this.cantidad = undefined;
    this.modalService.dismissAll();
  }

  createMercancia(usuario : Usuario){
    this.mercancia = new Mercancia();
    this.fechaRegistro = new Date();
    this.mercancia.cantidad = this.cantidad;
    this.mercancia.nombreProducto = this.nombreProducto;
    this.mercancia.fechaIngreso = this.fechaRegistro;
    this.mercancia.usuario = usuario;
    this.addMercanciaService(this.mercancia);
    //this.modalService.open(this.contenModal,this.config);
  }

  addMercanciaService(mercancia : Mercancia){
    this.mensajeModal = '';
      this.subcriptionMercancia = this.mercanciaService.addMercancia(mercancia).subscribe(response =>{
          this.mercanciaResponse = response;
          this.modalService.open(this.contenModal,this.config);
          this.mensajeModal = `El producto ${this.mercanciaResponse.nombreProducto} se registro con exito`;
          console.log("registro Ok : " , this.mercanciaResponse);
      },error => {
        this.mensajeModal = `Error al procesar`;
        this.modalService.open(this.contenModal,this.config);
        console.error(error);
      })
  }

  metodoPrueba() {
    //console.log("entraaa: ",this.usuario);
  }

}

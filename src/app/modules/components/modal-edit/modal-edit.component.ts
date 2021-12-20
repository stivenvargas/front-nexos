import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { Mercancia } from 'src/app/model/mercancia';
import { Usuario } from 'src/app/model/usuario';
import { MercanciaService } from 'src/app/service/mercanciaService';
import { UsuarioService } from 'src/app/service/usuarioService';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.css']
})
export class ModalEditComponent implements OnInit {

  @Input() mercanciaEdit : Mercancia;
  @Output() closeModal : EventEmitter<any> = new EventEmitter(); 
  usuario : Usuario;
  lisUsuario : Usuario[];
  subcriptionUser : Subscription;
  mercanciaResponse : Mercancia;
  subcriptionMercancia : Subscription;

  constructor(private userService: UsuarioService, private mercanciaService : MercanciaService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.subcriptionUser = this.userService.getAllUser().subscribe(response =>{
          this.lisUsuario = response;
    })
    }

    addMercanciaService(mercancia : Mercancia){
        this.subcriptionMercancia = this.mercanciaService.addMercancia(mercancia).subscribe(response =>{
            this.mercanciaResponse = response;
        },error => {
          console.error(error);
        })
    }

    editMercancia(){
      let fecha : Date = new Date();
      this.mercanciaEdit.fechaIngreso = fecha;
      this.addMercanciaService(this.mercanciaEdit);
      this.closeModal.emit();
      //this.modalService.open(this.contenModal,this.config);
    }

  metodoPrueba() {
    //console.log("entraaa: ",this.usuario);
  }

}

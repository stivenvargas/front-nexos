import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { Usuario } from "../model/usuario";
import { map,catchError } from "rxjs/operators";

@Injectable()
export class UsuarioService {
  private urlEndPoint: string = 'http://localhost:8080';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  getAllUser(): Observable<Usuario[]>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/allUsuarios`).pipe(
        map((response : any) => response as Usuario[]),
        catchError(e=> {
            return throwError(e);
        })
    );
  }

}


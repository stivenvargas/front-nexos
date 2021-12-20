import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, throwError } from "rxjs";
import { Usuario } from "../model/usuario";
import { map,catchError } from "rxjs/operators";
import { Mercancia } from "../model/mercancia";

@Injectable()
export class MercanciaService {
  private urlEndPoint: string = 'http://localhost:8080';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private router: Router) { }

  addMercancia(mercancia : Mercancia): Observable<Mercancia>{
    return this.http.post(`${this.urlEndPoint}/addMercancia`,mercancia,{headers: this.httpHeaders}).pipe(
        map((response : any) => response as Mercancia),
        catchError(e=> {
            return throwError(e);
        })
    )
  }

  getAllMercancia(): Observable<Mercancia[]>{
    return this.http.get<Mercancia>(`${this.urlEndPoint}/allMercancia`).pipe(
        map((response : any) => response as Mercancia[]),
        catchError(e=> {
            return throwError(e);
        })
    );
  }

  deleteMercancia(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlEndPoint}/mercancia/${id}`, { headers: this.httpHeaders }).pipe(
      catchError(e => {
        console.error(e.error.mensaje);
        return throwError(e);
      })
    );
  }

}
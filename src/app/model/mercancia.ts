import { Usuario } from "./usuario";

export class Mercancia {
    idmercancia : number;
    nombreProducto : string;
    cantidad : number;
    fechaIngreso : Date;
    usuario : Usuario;
}
import { Direccion } from "./Direccion";
import { type DiaDePreferencia } from "./Preferencia";
import { TipoCliente } from "./TipoCliente";

export interface Cliente {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: Direccion;
  fechaRegistro?: Date | null;
  tipoCliente: TipoCliente;
  cuit?: number | string;
  diaDePreferencia: DiaDePreferencia;
}

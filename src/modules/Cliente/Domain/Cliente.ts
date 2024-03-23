import { Direccion } from "./Direccion";

export interface Cliente {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  direccion: Direccion;
  fechaRegistro?: Date | null;
}

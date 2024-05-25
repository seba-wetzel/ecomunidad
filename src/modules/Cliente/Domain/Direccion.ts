// Array with all 24 provinces of Argentina and CABA
import type { Provincias } from "./Jurisdicciones";

export interface Direccion {
  calle: string;
  entreCalles?: {
    calle1: string;
    calle2: string;
  };
  numero: number | undefined;
  piso?: number | undefined;
  barrio?: string;
  localidad: string;
  provincia?: Provincias;
  referencia?: string | null;
  plusCode?: string;
  googleValidated?: boolean;
  googleData?: any;
}

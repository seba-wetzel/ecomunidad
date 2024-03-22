export interface Direccion {
  calle: string;
  entreCalles: {
    calle1: string;
    calle2: string;
  };
  numero: number;
  piso: number | null;
  barrio: string;
}

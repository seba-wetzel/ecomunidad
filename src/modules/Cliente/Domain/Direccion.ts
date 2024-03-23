export interface Direccion {
  calle: string;
  entreCalles: {
    calle1: string;
    calle2: string;
  };
  numero: number | undefined;
  piso: number | undefined;
  barrio: string;
}

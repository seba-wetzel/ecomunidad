export interface Direccion {
  calle: string;
  entreCales: {
    calle1: string;
    calle2: string;
  };
  numero: string;
  piso: string | null;
  barrio: string;
}

export const DiasDePreferencia = {
  LUNES: "LUNES",
  MARTES: "MARTES",
  MIERCOLES: "MIERCOLES",
  JUEVES: "JUEVES",
  VIERNES: "VIERNES",
  //   SABADO: "SABADO",
  //   DOMINGO: "DOMINGO",
} as const;
export type DiaDePreferencia =
  (typeof DiasDePreferencia)[keyof typeof DiasDePreferencia];

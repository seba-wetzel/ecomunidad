import { Direccion } from "@/modules/Cliente/Domain";
import { addressValidationUrl } from "./googleConfig";

export type AddressValidationInput = Pick<
  Direccion,
  "calle" | "numero" | "provincia" | "localidad"
>;

const regionCode = "AR";
// const veredict = {
//   verdict: {
//     inputGranularity: "PREMISE",
//     validationGranularity: "PREMISE_PROXIMITY",
//     geocodeGranularity: "PREMISE_PROXIMITY",
//     hasUnconfirmedComponents: true,
//     hasInferredComponents: true,
//   },
// };
// const response = {
//   geocode: {
//     location: {
//       latitude: -34.8884013,
//       longitude: -58.3901407,
//     },
//     plusCode: {
//       globalCode: "48Q34J65+JW",
//     },
//     bounds: {
//       low: {
//         latitude: -34.9099884,
//         longitude: -58.4159088,
//       },
//       high: {
//         latitude: -34.8648376,
//         longitude: -58.346424,
//       },
//     },
//     featureSizeMeters: 4771.699,
//     placeId: "ChIJHR_tiEXVvJURQ-Myax9BkSA",
//     placeTypes: ["locality", "political"],
//   },
// };

export const addressValidator = async (direccion: AddressValidationInput) => {
  const { calle, numero, localidad, provincia = "Buenos Aires" } = direccion;
  const response = await fetch(addressValidationUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: {
        regionCode,
        addressLines: [`${calle} ${numero}`, `${localidad}, ${provincia}`],
      },
    }),
  });
  if (!response.ok) {
    throw new Error("Error en la validación de la dirección");
  }
  return await response.json();
};

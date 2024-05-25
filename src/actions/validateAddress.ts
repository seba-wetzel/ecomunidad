"use server";
import {
  addressValidator,
  type AddressValidationInput,
} from "@/lib/google/addressValidator";
import { Direccion } from "@/modules/Cliente/Domain";

export const validateAddress = async ({
  calle,
  numero,
  localidad = "Glew",
  provincia = "Buenos Aires",
}: Direccion) => {
  const { result } = await addressValidator({
    calle,
    numero,
    localidad,
    provincia,
  } as unknown as AddressValidationInput);

  return result;
};

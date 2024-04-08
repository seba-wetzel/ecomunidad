"use server";
import {
  addressValidator,
  type AddressValidationInput,
} from "@/lib/google/addressValidator";

export const validateAddress = async (prevState: any, formData: FormData) => {
  console.log("Validating address", prevState, formData);
  const data = Object.fromEntries(formData);
  const {
    calle,
    numero,
    localidad = "Glew",
    provincia = "Buenos Aires",
  } = data;
  const { result } = await addressValidator({
    calle,
    numero,
    localidad,
    provincia,
  } as unknown as AddressValidationInput);
  return { message: "esta cheta la dirección", result };
};

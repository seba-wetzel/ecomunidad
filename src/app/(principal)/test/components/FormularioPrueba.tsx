"use client";

import { validateAddress } from "@/actions/validateAddress";
// import { BotonForm } from "@/components/BotonForm";
import { useFormState } from "react-dom";

const initialState = {
  message: "",
};

export function Formulario() {
  const [state, formAction] = useFormState(validateAddress, initialState);

  return (
    <form
      action={formAction}
      className="flex flex-col m-4 p-4 gap-4 rounded-lg bg-slate-200"
    >
      <label htmlFor="dir">Direccion</label>
      <input type="text" id="dir" name="calle" required />
      <label htmlFor="num">Numero</label>
      <input type="number" id="num" name="numero" required />

      <p aria-live="polite" className="text-black">
        {state?.message}
      </p>
      {/* <BotonForm /> */}
    </form>
  );
}

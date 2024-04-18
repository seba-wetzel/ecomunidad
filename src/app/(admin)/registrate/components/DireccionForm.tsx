"use client";
import { FormButton } from "@/components/FormButton";
import Mapa from "@/components/Mapa";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";

export function DireccionForm() {
  const form = useForm({
    defaultValues: {
      calle: "",
      numero: "",
      barrio: "",
      piso: "",
      referencia: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log({ data });
    fetch("/api/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="text-2xl flex flex-row gap-4 mb-4 flex-wrap justify-between">
          <FormField
            control={form.control}
            name="calle"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Calle</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Calle" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Nombre de la calle
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Numero" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Numeracion
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="barrio"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Barrio</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Barrio" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Barrio
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="piso"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Piso</FormLabel>
                <FormControl>
                  <Input type="number" {...field} placeholder="Piso" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Piso
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="referencia"
            render={({ field }) => (
              <FormItem className="w-full  flex flex-col items-start">
                <FormLabel>Referencia</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Referencia"
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Descripcion para encontrar el domicilio
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h3 className="text-base  text-start">
            Lamentablemente no pudimos validar la dirección
          </h3>
          <p className="text-sm text-start font-light">
            No encontramos la dirección exacta pero tenemos una ubicación
            aproximada, podrias confirmar si es la que figura en el mapa?
          </p>
          <p className="text-sm text-start font-light">
            De no ser el punto exacto, podés mover el marcador.
          </p>
          <Mapa />
        </div>
        <div className="mt-10 flex justify-around">
          <FormButton className="bg-verde-secundario">
            Validar dirección
          </FormButton>
          <Button
            type="button"
            className="disabled:bg-verde-principal bg-verde-secundario"
          >
            Guardar!
          </Button>
        </div>
      </form>
    </Form>
  );
}

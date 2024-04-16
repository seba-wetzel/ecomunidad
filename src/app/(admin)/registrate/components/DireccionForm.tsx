"use client";
import Mapa from "@/components/Mapa";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// import { useActionState } from "react";
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

  // const actionState = useActionState(()=>null, {});
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="text-2xl flex flex-row gap-4 flex-wrap text-center justify-center">
          <FormField
            control={form.control}
            name="calle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Calle</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Calle" />
                </FormControl>
                <FormDescription>Calle</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero</FormLabel>
                <FormControl>
                  <Input {...field} type="number" placeholder="Numero" />
                </FormControl>
                <FormDescription>numeracion</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="barrio"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Barrio</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Barrio" />
                </FormControl>
                <FormDescription>Barrio</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="piso"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Piso</FormLabel>
                <FormControl>
                  <Input type="number" {...field} placeholder="Piso" />
                </FormControl>
                <FormDescription>Piso</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="referencia"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Referencia</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Referencia"
                    className="resize-y"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Descripcion para encontrar el domicilio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-2 m-4">
          <h3 className="text-base  text-start">
            Lamentablemente no pudimos validar la direccion
          </h3>
          <p className="text-sm text-start font-light">
            No encontramos la direccion exacta pero tenemos una ubicacion
            aproximada, podrias confirmar si es la que figura en el mapa?
          </p>
          <p className="text-sm text-start font-light">
            De no ser el punto exacto, podes mover el marcador.
          </p>
          <Mapa />
        </div>
        <div className="mt-10 flex justify-around">
          <Button className="bg-verde-secundario">Validar direccion</Button>
          <Button
            disabled
            className="disabled:bg-verde-principal bg-verde-secundario"
          >
            Guardar!
          </Button>
        </div>
      </form>
    </Form>
  );
}

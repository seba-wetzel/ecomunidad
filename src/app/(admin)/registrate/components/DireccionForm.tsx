"use client";
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
import { useEffect, useState } from "react";

import {
  DireccionDefaultValues,
  DireccionResolver,
} from "@/modules/shared/adapters/ClienteSchema.zod";
import { useForm } from "react-hook-form";

export function DireccionForm() {
  const form = useForm({
    resolver: DireccionResolver,
    defaultValues: DireccionDefaultValues,
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (result) {
      console.log(result);
    }
  }, [result]);

  const onSubmit = (data: any) => {
    setLoading(true);
    const clientData = window.localStorage.getItem("cliente") || "{}";
    fetch("/api/registro", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...JSON.parse(clientData),
        direccion: { ...data, provincia: "Buenos Aires", localidad: "Glew" },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        {error && <div className="text-red-500">{error}</div>}
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
          {/* ENTRECALLES */}
          <FormField
            control={form.control}
            name="entreCalles.calle1"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Entre calles</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Entre calle 1" />
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
            name="entreCalles.calle2"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel className="text-transparent hidden md:block">
                  .
                </FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Entre calle 2" />
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
                    placeholder="Descripción de la fachada, puntos de referencia para encontrar la dirección, etc. "
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
          <Button
            disabled={loading}
            className="disabled:bg-verde-principal bg-verde-secundario"
          >
            Validar dirección
          </Button>
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

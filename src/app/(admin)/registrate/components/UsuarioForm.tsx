"use client";
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
import { useEffect } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cliente } from "@/modules/Cliente/Domain/Cliente";
import { DiasDePreferencia } from "@/modules/Cliente/Domain/Preferencia";
import {
  ClienteDefaultValues,
  ClienteSinDireccionResolver,
} from "@/modules/shared/adapters/ClienteSchema.zod";
import { useForm } from "react-hook-form";

interface Props {
  handlerNext: () => void;
}

export function UsuarioForm({ handlerNext }: Props) {
  const form = useForm<Cliente>({
    resolver: ClienteSinDireccionResolver,
    defaultValues: ClienteDefaultValues,
    // reValidateMode: "onBlur",
  });
  const onSubmit = (data: any) => {
    console.log("Enviando datos");
    // console.log(data);
    window.localStorage.setItem("cliente", JSON.stringify(data));
    if (handlerNext) handlerNext();
  };
  useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("cliente") || "{}");
    if (data.fechaRegistro) {
      data.fechaRegistro = new Date(data.fechaRegistro);
    }

    form.reset(data);
  }, [form]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="text-2xl flex flex-row gap-4 mb-4 flex-wrap justify-between">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Nombre del usuario.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Apellido" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Apellido del usuario.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Email" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Email del usuario.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem className="flex flex-col flex-grow items-start w-full md:w-auto">
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} placeholder="Teléfono" />
                </FormControl>
                {/* <FormDescription className="text-start ml-4">
                  Telefono del usuario.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diaDePreferencia"
            render={({ field }) => (
              <FormItem className="hidden ">
                <FormLabel>Dia de preferencia</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccione que dia pasar por el domicilio" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.values(DiasDePreferencia).map((dia) => (
                      <SelectItem key={dia} value={dia}>
                        {dia}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {/* <FormDescription className="text-start ml-4">
                  Que dia es preferible pasar por el domicilio
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-row flex-grow gap-4 mb-4 flex-wrap justify-between">
            <FormField
              control={form.control}
              name="tipoCliente"
              render={({ field }) => (
                <FormItem className="flex flex-col flex-grow items-start w-full md:max-w-[251px]">
                  <FormLabel>Tipo de usuario</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a verified email to display" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="residencial">Residencial</SelectItem>
                      <SelectItem value="gran_generador">
                        Gran generador
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {/* <FormDescription className="text-start ml-4">
                    Selecciona el tipo de usuario de la cuenta
                  </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("tipoCliente") === "gran_generador" && (
              <FormField
                control={form.control}
                name="cuit"
                render={({ field }) => (
                  <FormItem className="flex flex-col  items-start w-full md:max-w-[251px]">
                    <FormLabel>Cuit</FormLabel>
                    <FormControl>
                      <Input {...field} type="number" placeholder="Cuit" />
                    </FormControl>
                    {/* <FormDescription className="text-start ml-4">
                      Cuit del establecimiento.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            <FormField
              control={form.control}
              name="fechaRegistro"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="hidden"
                      {...field}
                      value={field.value?.toString()}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button
          type="submit"
          className="bg-verde-secundario"
          // disabled={Object.keys(form.formState.errors).length > 0}
        >
          Siguiente
        </Button>
      </form>
    </Form>
  );
}

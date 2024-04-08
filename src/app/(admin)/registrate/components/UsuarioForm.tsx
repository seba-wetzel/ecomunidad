"use client";
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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DiasDePreferencia } from "@/modules/Cliente/Domain/Preferencia";
import { useForm } from "react-hook-form";

export function UsuarioForm() {
  const form = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      tipoCliente: "residencial",
      cuit: "",
      diaDePreferencia: "LUNES",
    },
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <div className="text-2xl flex flex-row gap-4 flex-wrap text-center justify-start">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Nombre" {...field} />
                </FormControl>
                <FormDescription>Nombre del usuario.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="apellido"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input {...field} placeholder="Apellido" />
                </FormControl>
                <FormDescription>Apellido del usuario.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Email" />
                </FormControl>
                <FormDescription>Email del usuario.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefono</FormLabel>
                <FormControl>
                  <Input type="tel" {...field} placeholder="Telefono" />
                </FormControl>
                <FormDescription>Telefono del usuario.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="diaDePreferencia"
            render={({ field }) => (
              <FormItem>
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
                <FormDescription>
                  Que dia es preferible pasar por el domicilio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex  gap-4">
            <FormField
              control={form.control}
              name="tipoCliente"
              render={({ field }) => (
                <FormItem>
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
                      <SelectItem value="comercial">Comercial</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Selecciona el tipo de usuario de la cuenta
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            {form.watch("tipoCliente") === "comercial" && (
              <FormField
                control={form.control}
                name="cuit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cuit</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Cuit" />
                    </FormControl>
                    <FormDescription>
                      Cuit del comercio del usuario.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
          </div>
        </div>
        <Button>Siguiente</Button>
      </form>
    </Form>
  );
}

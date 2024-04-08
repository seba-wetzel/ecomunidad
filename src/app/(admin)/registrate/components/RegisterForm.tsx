"use client";

// import { validateAddress } from "@/actions/validateAddress";

export default function RegisterForm() {
  return null;
  //   // 1. Define your form.
  //   const form = useForm<Cliente>({
  //     resolver: zodResolver(ClienteSchema),
  //     defaultValues: ClienteDefaultValues,
  //   });

  //   // 2. Define a submit handler.
  //   function onSubmit(values: Cliente) {
  //     const { direccion } = values;
  //     //validateAddress(direccion.calle);
  //     console.log(values);
  //   }

  //   return (
  //     <Form {...form}>
  //       <form onSubmit={form.handleSubmit(onSubmit)} className="">
  //         <div className="text-2xl flex flex-row gap-4 flex-wrap text-center justify-center">
  //           <FormField
  //             control={form.control}
  //             name="nombre"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Nombre</FormLabel>
  //                 <FormControl>
  //                   <Input placeholder="Nombre" {...field} />
  //                 </FormControl>
  //                 <FormDescription>Nombre del usuario.</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <FormField
  //             control={form.control}
  //             name="apellido"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Apellido</FormLabel>
  //                 <FormControl>
  //                   <Input {...field} placeholder="Apellido" />
  //                 </FormControl>
  //                 <FormDescription>Apellido del usuario.</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <FormField
  //             control={form.control}
  //             name="email"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Email</FormLabel>
  //                 <FormControl>
  //                   <Input type="email" {...field} placeholder="Email" />
  //                 </FormControl>
  //                 <FormDescription>Email del usuario.</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />

  //           <FormField
  //             control={form.control}
  //             name="telefono"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Telefono</FormLabel>
  //                 <FormControl>
  //                   <Input type="tel" {...field} placeholder="Telefono" />
  //                 </FormControl>
  //                 <FormDescription>Telefono del usuario.</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <div className="text-2xl flex flex-row gap-4 flex-wrap text-center justify-center">
  //           <FormField
  //             control={form.control}
  //             name="direccion.calle"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Calle</FormLabel>
  //                 <FormControl>
  //                   <Input {...field} placeholder="Calle" />
  //                 </FormControl>
  //                 <FormDescription>Calle</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="direccion.numero"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Numero</FormLabel>
  //                 <FormControl>
  //                   <Input {...field} type="number" placeholder="Numero" />
  //                 </FormControl>
  //                 <FormDescription>numeracion</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="direccion.barrio"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Barrio</FormLabel>
  //                 <FormControl>
  //                   <Input {...field} placeholder="Barrio" />
  //                 </FormControl>
  //                 <FormDescription>Barrio</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //           <FormField
  //             control={form.control}
  //             name="direccion.piso"
  //             render={({ field }) => (
  //               <FormItem>
  //                 <FormLabel>Piso</FormLabel>
  //                 <FormControl>
  //                   <Input type="number" {...field} placeholder="Piso" />
  //                 </FormControl>
  //                 <FormDescription>Piso</FormDescription>
  //                 <FormMessage />
  //               </FormItem>
  //             )}
  //           />
  //         </div>
  //         <Button type="submit">Guardar</Button>
  //       </form>
  //     </Form>
  //   );
}

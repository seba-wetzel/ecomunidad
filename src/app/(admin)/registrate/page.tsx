"use client";
import Logo from "@/app/assets/vectores/Logo Ecomunidad neg OK.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { useState } from "react";

import { DireccionForm } from "./components/DireccionForm";
import { UsuarioForm } from "./components/UsuarioForm";

const RegisterPage: React.FC = () => {
  // const clientes = await getClientes(SupabaseClienteRepository());
  // console.log(clientes);
  const [tab, setTab] = useState("cuenta");
  const handlerNext = () => {
    setTab("direccion");
  };
  return (
    <>
      <Image
        className="mx-auto my-10 px-4 md:px-0"
        src={Logo}
        alt="ecoMunidad Logo"
        width={512}
        height={23 * 1.5}
        priority
      />
      <Tabs
        defaultValue="cuenta"
        value={tab}
        className="w-[600px]   space-y-8 max-w-fit  m-auto px-4"
      >
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger className=" text-verde-secundario" value="cuenta">
            Usuario
          </TabsTrigger>
          <TabsTrigger value="direccion">Direccion</TabsTrigger>
        </TabsList>
        <TabsContent value="cuenta">
          <Card className=" text-verde-secundario">
            <CardHeader>
              <CardTitle className="tracking-wide">
                Cuenta del Usuario
              </CardTitle>
              <CardDescription>Datos del nuevo usuario</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <UsuarioForm handlerNext={handlerNext} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="direccion">
          <Card className=" text-verde-secundario">
            <CardHeader>
              <CardTitle className="tracking-wide">Direccion</CardTitle>
              <CardDescription>
                Datos de la direccion del usuario.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <DireccionForm />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* 
            <input
                type="text"
                name="name"
                placeholder="Name"
                value={client.name}
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={client.email}
                onChange={handleInputChange}
            />
            <button onClick={handleRegister}>Register</button> */}
    </>
  );
};

export default RegisterPage;

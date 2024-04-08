import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DireccionForm } from "./components/DireccionForm";
import { UsuarioForm } from "./components/UsuarioForm";

const RegisterPage: React.FC = async () => {
  // const clientes = await getClientes(SupabaseClienteRepository());
  // console.log(clientes);
  return (
    <>
      <Tabs
        defaultValue="cuenta"
        className="w-[600px] my-36  space-y-8 max-w-lg m-auto"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cuenta">Usuario</TabsTrigger>
          <TabsTrigger value="direccion">Direccion</TabsTrigger>
        </TabsList>
        <TabsContent value="cuenta">
          <Card>
            <CardHeader>
              <CardTitle>Cuenta del Usuario</CardTitle>
              <CardDescription>Datos del nuevo usuario</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <UsuarioForm />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="direccion">
          <Card>
            <CardHeader>
              <CardTitle>Direccion</CardTitle>
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

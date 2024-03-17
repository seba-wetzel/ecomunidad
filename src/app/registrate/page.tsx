import { getClientes } from "@/modules/Cliente/Aplication/getClientes";
import { SupabaseClienteRepository } from "@/modules/Cliente/Infrastructure/SupabaseClienteRespository";

const RegisterPage: React.FC = async () => {
  const clientes = await getClientes(SupabaseClienteRepository());
  console.log(clientes);
  return (
    <div>
      <h1>Register Page {}</h1>
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
    </div>
  );
};

export default RegisterPage;

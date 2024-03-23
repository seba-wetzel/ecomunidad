import RegisterForm from "@/app/(admin)/registrate/components/RegisterForm";

const RegisterPage: React.FC = async () => {
  // const clientes = await getClientes(SupabaseClienteRepository());
  // console.log(clientes);
  return (
    <>
      <h1>Register Page {}</h1>
      <RegisterForm />
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

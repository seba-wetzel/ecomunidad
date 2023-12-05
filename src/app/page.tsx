import Image from "next/image";
import Logo from "./assets/imgs/logo.svg";
import Manos from "./assets/imgs/manos.png";

export default function Home() {
  return (
    <main className="flex flex-col flex-wrap  min-h-screen  w-full sm:w-[592px] mx-auto">
      <header className="grid items-center justify-center h-32 mt-6  bg-verde-secundario">
        <Image
          className=""
          src={Logo}
          alt="ecoMunidad Logo"
          width={180 * 1.5}
          height={23 * 1.5}
          priority
        />
      </header>
      <picture className="relative">
        <Image
          className="w-full h-96 object-cover contrast-less:"
          src={Manos}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <h1 className="absolute text-white text-5xl font-gotham font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
          Somos una comunidad consiente.
        </h1>
      </picture>
      <article className="flex-grow flex justify-center items-center sm:items-start p-10">
        <p className="text-white font-gotham font-semibold text-3xl text-center">
          Muy pronto vas a poder formar parte de una red comunitaria de
          reciclaje, sustentabilidad y economía popular.
        </p>
      </article>
    </main>
  );
}

import Image from "next/image";
import escudo from "/public/escudo.png";

export default function Home() {
  return (
    <main className="w-scree flex-col gap-5 h-screen flex items-center justify-center bg-white">
      <h1 className="text-5xl lg:text-7xl font-bold text-[#65C9FB]">
        Proximamente...
      </h1>
      <Image src={escudo} alt="escudo" width={200} height={200} />
    </main>
  );
}

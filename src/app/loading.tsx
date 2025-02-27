import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <Image
        src="/loader/loading.gif"
        alt="Carregando..."
        width={0}
        height={0}
        sizes="100vw"
        className="h-auto w-48 object-contain"
        priority
      />
    </div>
  );
}

import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <>
      <div className="flex flex-col bg-white rounded-lg shadow-md p-4">
        <Image
          src={service.image.url}
          alt={service.name}
          width={80}
          height={80}
          priority
          objectFit="cover"
        />

        <h1 className="text-xl font-semibold mb-2">{service.name}</h1>
        <p className="mb-2">{service.desc}</p>
        <p className=" font-bold">{service.charge}</p>
      </div>
    </>
  );
}

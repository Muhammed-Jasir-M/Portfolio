import { certificates } from "@/constants/about";
import Image from "next/image";

const Certificates = () => {
  return (
    <div className="container mx-auto mb-5" id="certificates">
      <h2 className="capitalize text-3xl md:text-5xl font-bold text-center pt-5">
        {certificates.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 py-10 px-4">
        {certificates.items.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center gap-4 border-2 px-4 py-4 md:py-8 rounded-2xl"
            >
              <a href={item.image} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.image}
                  alt="certificate"
                  width={300}
                  height={200}
                  quality={100}
                  priority
                  className="bg-white/60 rounded-xl object-cover"
                />
              </a>
              <h2 className="text-accent text-2xl font-bold text-center">
                {item.title}
              </h2>
              <h5 className="text-xl font-semibold text-center">
                {item.issuer}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;

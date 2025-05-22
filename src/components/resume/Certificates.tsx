import { certificates } from "@/constants/resume";
import Image from "next/image";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const Certificates = () => {
  return (
    <div className="container mx-auto mb-5" id="certificates">
      <h2 className="capitalize text-3xl md:text-5xl font-bold text-center pt-5">
        {certificates.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 py-10 px-4">
        {certificates.items.map((item, index) => (
          <Card
            key={index}
            className="transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href={item.image} target="_blank" rel="noopener noreferrer">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={230}
                  quality={100}
                  priority
                  className="rounded-lg w-full h-[250px] bg-primary"
                />
              </div>
            </a>

            <CardContent className="">
              <CardTitle className="text-accent text-xl lg:text-2xl lg:h-[65px] font-bold text-center line-clamp-2 mb-2">
                {item.title}
              </CardTitle>

              <CardDescription className="text-lg lg:text-xl font-semibold text-white mb-2 text-center">
                {item.issuer}
              </CardDescription>

              <p className="text-center font-medium text-white/60 text-sm line-clamp-4 leading-relaxed">
                {item.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Certificates;

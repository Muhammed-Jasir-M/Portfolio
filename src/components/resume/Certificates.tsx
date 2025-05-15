import { certificates } from "@/constants/resume";
import Image from "next/image";
import {
  Card,
  CardHeader,
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
            className="flex flex-col items-center gap-4 p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <CardHeader className="items-center p-0">
              <a href={item.image} target="_blank" rel="noopener noreferrer">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={200}
                  quality={100}
                  priority
                  className="bg-white/60 rounded-xl object-cover"
                />
              </a>
            </CardHeader>

            <CardContent className="flex flex-col items-center gap-2 p-0">
              <CardTitle className="text-accent text-xl lg:text-2xl h-[65px] font-bold text-center line-clamp-2 text-accent">
                {item.title}
              </CardTitle>

              <CardDescription className="text-lg lg:text-xl font-semibold text-white">
                {item.issuer}
              </CardDescription>

              <p className="text-center font-medium text-white/60 text-base">
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

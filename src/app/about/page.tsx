import Image from "next/image";

const about = {
  title: "About me",
  description:
    "I'm a passionate developer from Kerala, India, with a strong enthusiasm for building software and creating impactful solutions that make a difference. My expertise lies in Flutter, React, and MERN stack development, and I am always eager to learn and explore new technologies to enhance my skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Muhammed Jasir M",
    },
    {
      fieldName: "Email",
      fieldValue: "jasirmm307@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91 95392 75280",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Place",
      fieldValue: "Malappuram, Kerala",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Malayalam, Hindi",
    },
    {
      fieldName: "Hobbies",
      fieldValue: "Reading, Writing, Coding, Travelling, Gaming",
    },
    {
      fieldName: "Interests",
      fieldValue: "Web Dev, Mobile Dev, AI/ML, Open Source",
    },
  ],
};

const About = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center pt-5">{about.title}</h2>
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-16 justify-between items-center py-10 px-4">
          <div className="border-2 shadow-lg rounded-2xl bg-accent p-2.5 min-w-[252.5px] lg:max-w-[350px]">
            <Image
              src="/assets/image.png"
              alt="Jasir"
              className="rounded-xl object-cover"
              width={250}
              height={358}
              priority
              quality={100}
            />
          </div>

          <div className="flex-1 flex flex-col gap-2.5">
            <p className="text-white/60 text-center lg:text-left">
              {about.description}
            </p>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              {about.info.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="flex justify-center lg:justify-start gap-1.5"
                  >
                    <span className="text-white/60">{item.fieldName}:</span>
                    <span className="text-white/80">{item.fieldValue}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

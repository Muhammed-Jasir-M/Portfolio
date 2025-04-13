"use client";

import CountUp from "react-countup";

const Stats = () => {
  const stats = [
    {
      num: 1,
      text: "Years of experience",
    },

    {
      num: 20,
      text: "Projects completed",
    },

    {
      num: 5,
      text: "Technologies mastered",
    },

    {
      num: 500,
      text: "Code commits",
    },
  ];
  return (
    <section className="pt-4 pb-12 lg:pt-0 lg:pb-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-2 sm:gap-6 max-w-[80vw] mx-auto lg-max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 gap-1.5 sm:gap-4 items-center justify-center lg:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl lg:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;

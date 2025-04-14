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
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-[90vw] mx-auto">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 lg:gap-4 lg:flex-row items-center text-center lg:text-left"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  suffix={"+"}
                  className="text-4xl lg:text-6xl font-extrabold font-mono"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80 text-sm sm:text-base`}
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

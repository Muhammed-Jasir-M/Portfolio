import { skills } from "@/constants/about";

const Skills = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold text-center pt-5">
        {skills.title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 py-10 px-4">
        {skills.skillList.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col gap-6 border-2 shadow-lg rounded-2xl p-4"
            >
              <h3 className="text-3xl font-semibold text-center">
                {item.subTitle}
              </h3>
              <div className="flex flex-wrap gap-6 justify-center">
                {item.skills.map((skill, index) => {
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-1 p-1"
                    >
                      <span className="text-5xl text-accent">{skill.icon}</span>
                      <span className="text-white/80">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

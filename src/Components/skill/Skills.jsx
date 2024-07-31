import SkillLevel from "./SkillLevel";

const Skills = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className="sm:order-2 font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              SKILLS
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Skills
            </h1>
          </div>
          <div className="text-slate-500 sm:order-1">
            <SkillLevel skillsName="HTML, CSS" percentage="90%" />
            <SkillLevel skillsName="Figma" percentage="80%" />
            <SkillLevel skillsName="React" percentage="85%" />
            <SkillLevel skillsName="Vue" percentage="75%" />
            <SkillLevel skillsName="Tailwind" percentage="85%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import TileWithIcon from '@/components/tile-with-icon';
import skills from '@/app/data/skills';

const Skills = () => {
  return (
    <section id="skills" className="min-h-dvh flex flex-col items-center relative gap-20 sm:gap-56 overflow-clip">
      <h1 className="text-heading-01-normal mt-35">
        Skills
        <span className="block w-3/4 border-b-2 border-primary-500 mx-auto mt-5"></span>
      </h1>
      <div className="flex justify-center flex-wrap gap-8  pb-8">
        {skills.map((skill) => (
          <TileWithIcon key={skill.title} text={skill.title} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
};

export default Skills;

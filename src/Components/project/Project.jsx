/* eslint-disable react/prop-types */

const projects = [
  {
    title: "Home Control System (B.Eng. Project, Year 3 Semester 1)",
    description: [
      "Applied good UI/UX design principles and prototyped on Figma.",
      "Developed the interfaces using Visual Studio Basic.",
      "Also used Arduino Board for implementation.",
    ],
  },
  {
    title: "Hospital Management System (B.Eng. Project, Year 1)",
    description: [
      "Designed and developed a command line interface Application using C language.",
      "A Hospital Management System (HMS) designed using C programming is a software solution that helps manage various aspects of hospital operations, such as patient records, staff schedules, billing, and inventory. ",
    ],
  },

  {
    title: "Parking assistant (B. Eng. Project, Year 3 Semester 1)",
    description: [
      "Designed and developed using Arduino Uno, ultrasonic sensor, Buzzer.",
      "A parking assistant is a simple yet effective project that enhances vehicle safety and assists with parking.",
      " It combines basic electronics with programming to create a functional tool that aids drivers in maneuvering their vehicles more safely",
    ],
  },
];

const ProjectCard = ({ title, description, duration }) => (
  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="list-disc list-inside mb-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {duration && <p className="text-gray-600">{duration}</p>}
  </div>
);

const Projects = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            duration={project.duration}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

/* eslint-disable react/prop-types */

const projects = [
  {
    title: "Internship Management System (PHP & MySQL)",
    description: [
      "Built a web-based platform for students to register, submit internship reports, and track progress.",
      "Implemented authentication, admin dashboard, and real-time feedback tracking.",
      "Technologies: PHP, MySQL, HTML, CSS, JavaScript",
    ],
    link: "https://github.com/joe123-a/Internship-management-system",
  },
  {
    title: "Library Management System (PHP & MySQL)",
    description: [
      "Designed and developed a library system with forms to submit and manage book data.",
      "Enabled functionality for book borrowing, returns, and tracking.",
      "Technologies: PHP, MySQL, HTML/CSS",
    ],
    link: "https://github.com/joe123-a/EXAM-BENG",
  },
  {
    title: "Home Control System (B.Eng. Project, Year 3 Semester 1)",
    description: [
      "Applied good UI/UX design principles and prototyped on Figma.",
      "Developed the interfaces using Visual Studio Basic.",
      "Also used Arduino Board for implementation.",
    ],
  },
  {
    title: "Parking Assistant (B.Eng. Project, Year 3 Semester 1)",
    description: [
      "Designed and developed using Arduino Uno, ultrasonic sensor, and buzzer.",
      "Enhances vehicle safety and assists with parking.",
      "Combines basic electronics with programming for real-world application.",
    ],
  },
  {
    title: "Hospital Management System (B.Eng. Project, Year 1)",
    description: [
      "Designed and developed a command line interface application using C language.",
      "Manages hospital operations: patient records, staff schedules, billing, and inventory.",
    ],
  },
];

const ProjectCard = ({ title, description, duration, link }) => (
  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md mb-6">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <ul className="list-disc list-inside mb-2">
      {description.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    {duration && <p className="text-gray-600">{duration}</p>}
    {link && (
      <a
        href={link}
        className="text-blue-600 underline mt-2 inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
    )}
  </div>
);

const Projects = () => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            duration={project.duration}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

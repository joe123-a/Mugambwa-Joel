import ServicesBox from "./ServicesBox";

const Services = () => {
  return (
    <section className="bg-secondary dark:bg-gray-900 dark:text-white py-10">
      <div className="container flex flex-col items-center">
        <h1 className="inline-block text-3xl text-center font-bold mb-3 border-b-2 border-primary pb-1">
          Services
        </h1>
        <p className="text-slate-500 text-center md:w-[50%] mx-auto">
          A full-stack developer offers a comprehensive range of services
          including front-end development, where they implement UI/UX designs
          into functional web interfaces using HTML, CSS, and JavaScript,
          ensuring responsiveness across devices and integrating interactive
          elements with frameworks like React, Angular, or Vue.js. They also
          handle back-end development, creating and maintaining server-side
          applications with languages such as Node.js, Python, Ruby, Java, or
          PHP, managing databases, and implementing server-side logic.
        </p>
      </div>
      <div>
        <ServicesBox />
      </div>
    </section>
  );
};

export default Services;

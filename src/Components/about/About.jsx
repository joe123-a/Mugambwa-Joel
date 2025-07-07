const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          <div className=" font-bold relative">
            <div className=" text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              About me
            </h1>
          </div>
          <div className="text-slate-500">
            <p>
              My passion lies in creating visually stunning and user-friendly
              websites that help clients establish a strong online presence.
              With a keen eye for detail and a deep understanding of modern
              design principles, I ensure that every project I undertake is both
              aesthetically pleasing and highly functional.As an accomplished
              graphics designer, I specialize in crafting captivating visual
              content, including logos, brochures, and social media graphics,
              that effectively communicate and engage audiences. My work is
              characterized by creativity, precision, and a comprehensive
              understanding of branding.
            </p>
            <br />
            <p>
              In addition to design, I am a proficient full stack developer
              capable of handling both front-end and back-end development tasks.
              Utilizing technologies such as HTML, CSS, JavaScript, React,PHP
              and Node.js, I build robust, scalable, and high-performing
              applications. My commitment to clean, maintainable code and best
              practices ensures that my projects are not only functional but
              also future-proof. My versatility and dedication to excellence
              make me a valuable asset for any project. Whether you are looking
              to create a new website, revamp your brand visual identity, or
              develop a complex web application, I have the skills and
              experience to deliver exceptional results. I consistently strive
              to exceed client expectations and bring their visions to life.
            </p>
            <div className="">
              <a
                href="/MUGAMBWA JOEL RESUME.pdf"
                className="primary-btn my-6 mr-6 inline-block"
                download
              >
                Download Resume
              </a>
              <a
                href="tel:+256 779180593"
                title="Call +256 779180593"
                className="outline-btn my-6"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import personImg from "../../assets/joel.jpg";

const Hero = () => {
  return (
    <>
      <section className="w-full bg-secondary dark:bg-gray-900 dark:text-white">
        <div className="container grid grid-cols-1 sm:grid-cols-2 items-center sm:h-[600px] space-y-4 py-12 sm:py-0 ">
          <div className="">
            <div className="space-y-2 grid justify-items-center sm:justify-items-start">
              <p className="uppercase ">My Personal Portfolio</p>
              <p className="text-4xl md:text-6xl font-bold text-black/80 dark:text-white">
                I am Mugambwa Joel
              </p>
              <p className="text-3xl text-gray-700 dark:text-white">
                Freelance web, Graphics Designer & <br /> Full stack Developer
              </p>
              <p className="text-black/75 dark:text-white/70 text-center sm:text-left">
                A versatile freelance professional skilled in web design,
                graphics design, and full stack development. He creates visually
                stunning and user-friendly websites, engaging visual content,
                and robust applications using technologies like HTML, CSS,
                JavaScript, React,Tailwind Css, PHP, Django and Node.js. Known
                for his creativity, precision, and understanding of modern
                design principles and branding, Joel ensures seamless
                functionality across devices and adherence to best practices.
                His dedication to excellence and ability to exceed client
                expectations make him a valuable asset for any project.
              </p>
              <a
                href="mugambwajoel5@gmail.com"
                className="inline-block primary-btn !my-3"
              >
                Hire me
              </a>
            </div>
          </div>
          {/* image section */}

          <div>
            <img src={personImg} className="" alt="person" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

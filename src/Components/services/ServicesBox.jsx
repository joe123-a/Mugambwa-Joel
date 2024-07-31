import { AiFillLayout } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { MdSecurity } from "react-icons/md";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { PiGraphicsCardDuotone } from "react-icons/pi";

const Services = [
  {
    name: "HCI research",
    description:
      "UX (User Experience), UI (User Interface), and UD (User Design) are all crucial aspects of design, particularly in the digital and product design fields. Each focuses on different elements of the design process to create products that are not only functional but also enjoyable and accessible to use.",
    image: "https://picsum.photos/200/300",
    icon: <AiFillLayout className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "App Development",
    description:
      "App development is the process of creating software applications for mobile devices, desktops, and other platforms. This involves several stages, from conceptualization to deployment and maintenance. The field is diverse and includes various types of apps, such as native, web, and hybrid apps, each with its own development process and tools.",
    image: "https://picsum.photos/200/301",
    icon: <MdOutlinePhoneAndroid className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Web App Development",
    description:
      "Web development is the process of creating and maintaining websites and web applications. It encompasses a wide range of tasks, from coding and programming to content creation and design. Web development is divided into two main areas: front-end development and back-end development, each focusing on different aspects of a website or web application.",
    image: "https://picsum.photos/200/302",
    icon: <HiMiniComputerDesktop className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "CyberSecurity",
    description:
      "Cybersecurity refers to the practices, technologies, and processes designed to protect networks, devices, programs, and data from attack, damage, or unauthorized access. It is a crucial field in today's digital age, where cyber threats are constantly evolving.",
    image: "https://picsum.photos/200/303",
    icon: <MdSecurity className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "Digital Marketing",
    description:
      "Digital marketing refers to the use of digital channels, platforms, and technologies to promote products, services, and brands. It encompasses a wide range of strategies and tactics to reach and engage with target audiences online.",
    image: "https://picsum.photos/200/303",
    icon: <LiaDigitalTachographSolid className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
  {
    name: "Graphics Design",
    description:
      "Graphic design is a field that involves creating visual content to communicate messages. By applying visual hierarchy and page layout techniques, graphic designers use typography and pictures to meet users' specific needs and focus on the logic of displaying elements in interactive designs to optimize the user experience.",
    image: "https://picsum.photos/200/303",
    icon: <PiGraphicsCardDuotone className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServicesBox = () => {
  return (
    <section id="services" className="my-10 container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Services.map(({ name, description, image, icon, bgColor }) => (
          <div
            key={name}
            className={` ${bgColor} rounded-xl  bg-blue-500/70 text-white  bg-[url('${image}')] bg-cover bg-no-repeat bg-center bg-blend-overlay`}
          >
            <div className="p-3 md:p-16 backdrop-blur-sm space-y-3 rounded-xl">
              {icon}
              <h1 className="text-2xl font-bold">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;

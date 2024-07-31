import {
  MailIcon,
  PhoneIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="  bg-slate-200 bg-gradient-to-r from-purple-500 to-indigo-500  p-8 rounded-lg shadow-lg w-full h-full flex flex-col justify-center items-center"
    >
      <h2 className="text-3xl font-bold mb-6 text-center ">Contact Me</h2>
      <div className="space-y-4 w-full max-w-sm">
        <div className="flex items-center">
          <MailIcon className="w-6 h-6 mr-3" />
          <span>mugambwajoel5@gmail.com</span>
        </div>
        <div className="flex items-center">
          <PhoneIcon className="w-6 h-6 mr-3" />
          <span>+256 779180593</span>
        </div>
        <div className="flex items-center">
          <LocationMarkerIcon className="w-6 h-6 mr-3" />
          <span>BULOBA, KAMPALA, UGANDA</span>
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="https://facebook.com/mugambwajoel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-500"
        >
          <FaFacebook className="w-6 h-6 mr-2" />
          <span>Mugambwa Joel</span>
        </a>
        <a
          href="https://twitter.com/mugambwajoel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-400"
        >
          <FaTwitter className="w-6 h-6 mr-2" />
          <span>Mugambwa Joel</span>
        </a>
        <a
          href="https://instagram.com/mugambwajoel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-pink-500"
        >
          <FaInstagram className="w-6 h-6 mr-2" />
          <span>Mugambwa Joel</span>
        </a>
        <a
          href="https://linkedin.com/in/mugambwajoel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-blue-700"
        >
          <FaLinkedin className="w-6 h-6 mr-2" />
          <span>Mugambwa Joel</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
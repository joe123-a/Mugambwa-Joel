import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { PropTypes } from "prop-types";
// eslint-disable-next-line react/prop-types
const ContactForm = ({ sx, handleContactModel }) => {
  const form = useRef();

  const handleEmailSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          window.alert("SUCCESS MESSAGE");
          handleContactModel();
        },
        (error) => {
          window.alert("FAILURE MESSAGE", error);
        }
      );
  };

  return (
    <>
      <div
        className={` ${sx} fixed p-8 w-screen h-screen z-40 top-0 left-0 bottom-0 bg-[rgba(0,0,0,.5)] flex items-center justify-center`}
      >
        <div className="relative w-full max-w-[40rem]">
          <button
            className="text-black text-2xl absolute top-8 right-8"
            onClick={() => handleContactModel()}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <form
            ref={form}
            className="w-full bg-white p-8 flex flex-col gap-4"
            onSubmit={handleEmailSubmit}
          >
            <label>
              Name
              <input className="ml-4 outline-dotted" type="text" name="name" />
            </label>

            <label>
              Email
              <input
                className="ml-4 outline-dotted"
                type="email"
                required
                name="user_email"
              />
            </label>

            <label>
              Message
              <textarea
                className="ml-4 outline-dotted"
                required
                name="message"
              ></textarea>
            </label>

            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 text-white rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
ContactForm.propTypes = {
  sx: PropTypes.string,
};
export default ContactForm;

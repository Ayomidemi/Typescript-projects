import * as React from "react";
import ToastNotification from "../models/ToastNotification";
import { MdOutlineWarning, MdCheck } from "react-icons/md";

interface IContactProps {}

const Contact: React.FunctionComponent<IContactProps> = (props) => {
  const [submit, setSubmit] = React.useState(false);
  const [message, setMessage] = React.useState({
    type: "",
    msg: "",
  });

  const [contact, setContact] = React.useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_no: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };
  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setContact((previousDetails) => {
      return { ...previousDetails, [e.target.name]: e.target.value };
    });
  };

  const handleCloseNotification = () => {
    setMessage({
      type: "",
      msg: "",
    });
  };

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmit(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...contact,
      }),
    })
      .then((res) => {
        setMessage({
          type: "success",
          msg: 'message',
        });
        setTimeout(() => {
          setMessage({
            type: "",
            msg: "",
          });
          setSubmit(false);
        }, 8000);

        setContact({
          first_name: "",
          last_name: "",
          email: "",
          phone_no: "",
          message: "",
        });
      })

      .catch((err) => {
        setSubmit(false);
        setMessage({
          type: "error",
          msg: err.message,
        });

        setTimeout(() => {
          setMessage({
            type: "",
            msg: "",
          });
        }, 8000);
      });
  };

  return (
    <div className="projects" id="contact">
      <div className="projects-container">
        <h1 className="skills-title-h1" style={{ margin: "3rem 0" }}>
          Contact Me
        </h1>

        {message.msg !== "" && (
          <ToastNotification
            type={message.type}
            text={
              message.type === "error"
                ? message.msg
                : "Thank you for reaching out! I'll reply as soon as I can."
            }
            onclick={handleCloseNotification}
            icon={message.type === "success" ? MdCheck : MdOutlineWarning}
          />
        )}
        {submit}

        <div className="contact-container">
          <div className="contact-map">
            <iframe
              title="University of Lagos"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0467727887876!2d3.387656014422043!3d6.5157643250617525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d24c04d3e75%3A0x7347f1a6be13e004!2sUniversity%20of%20Lagos!5e0!3m2!1sen!2sng!4v1646560178180!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="contact-form">
            <h1>Get In Touch</h1>

            <form
              className="get-in-touch"
              name="contact"
              action="/"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              data-netlify-recaptcha="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact"></input>
              <div hidden>
                <input name="bot-field" />
              </div>

              <div className="contact-input-flex">
                <input
                  type="text"
                  name="first_name"
                  value={contact.first_name}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  style={{ marginRight: "1rem" }}
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  onChange={handleInputChange}
                  value={contact.last_name}
                  placeholder="Last Name"
                  required
                />
              </div>

              <div className="contact-input-flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={handleInputChange}
                  value={contact.email}
                  required
                  style={{ marginRight: "1rem" }}
                />
                <input
                  type="tel"
                  name="phone_no"
                  onChange={handleInputChange}
                  value={contact.phone_no}
                  required
                  placeholder="Phone No."
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                onChange={handleTextAreaChange}
                value={contact.message}
                  required
                  style={{ height: "150px" }}
              ></textarea>

              <button type="submit" className="header-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

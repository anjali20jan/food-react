import "./Contact.css";
import Navigation from "../navigation/Navigation";
import ContactForm from "../contactForm/ContactForm";

const Contact = () => {
  return (
    <div className="main-container">
      <Navigation />

      <div className="contact-body">
        <h1>CONTACT US</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
          laboriosam labore cupiditate perspiciatis soluta impedit consequatur
          delectus voluptatem et id. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Eius odio cupiditate illum 
        </p>
        <ContactForm/>
      </div>
    </div>
  );
};

export default Contact;

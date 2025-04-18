import React from "react";
import "./Home.css";

const HomeContent = () => {
  return (
    <div className="home">
      <section className="section about" id="about">
        <h2>👨‍💻 About Us</h2>
        <p>
          We are a team of passionate developers focused on building fast,
          responsive, and user-friendly React applications. Our goal is to
          simplify complex UIs using modern tools like React Router, Redux,
          and Tailwind CSS.
        </p>
        <p>
          Our apps are crafted with care, ensuring great UX, accessibility, and
          mobile-friendliness.
        </p>
      </section>

      <section className="section services" id="services">
        <h2>💼 Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>SPA Development</h3>
            <p>Seamless Single Page Applications using React & React Router.</p>
          </div>
          <div className="service-card">
            <h3>Responsive Design</h3>
            <p>Pixel-perfect layouts across all devices with modern CSS.</p>
          </div>
          <div className="service-card">
            <h3>Component Architecture</h3>
            <p>Reusable, maintainable component structures for scalability.</p>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>📬 Contact Us</h2>
        <p>Have questions or want to collaborate? Reach out!</p>
        <ul>
          <li>Email: contact@reactmagic.dev</li>
          <li>Phone: +1 234 567 890</li>
          <li>Location: Remote Worldwide 🌍</li>
        </ul>
      </section>

      <section className="section faq" id="faq">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-box">
          <h4>Q: Is this app mobile-friendly?</h4>
          <p>Yes! It adapts to all screen sizes with responsive design.</p>
        </div>
        <div className="faq-box">
          <h4>Q: Can I use this as a template?</h4>
          <p>Absolutely! Feel free to customize it as per your needs.</p>
        </div>
        <div className="faq-box">
          <h4>Q: How do I navigate?</h4>
          <p>Use the navbar or scroll through the landing sections.</p>
        </div>
      </section>
    </div>
  );
};

export default HomeContent;

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaWhatsapp,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "../styles/contact.css";

function Contact() {
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_n4vtudl",
        "template_bq3vidb",
        form.current,
        "gNDz-MF_gIp8fZoIH"
      )
      .then(() => {
        alert("Solicitação enviada com sucesso!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Erro ao enviar a solicitação.");
      });
  };

  return (
    <section id="contato" className="contact">

      <h2>Solicite uma Demonstração</h2>

      <p>
        Descubra como a Duo Insight pode ajudar sua empresa com Dashboards,
        Inteligência Artificial e Automação.
      </p>

      <div className="contact-container">

        <form ref={form} onSubmit={enviarEmail}>

          <input
            type="text"
            name="name"
            placeholder="Seu nome"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Empresa"
          />

          <input
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="WhatsApp"
          />

          <textarea
            name="message"
            placeholder="Como podemos ajudar?"
            required
          />

          <button type="submit">
            Enviar Solicitação
          </button>

        </form>

        <div className="contact-card">

          <h3>Fale Conosco</h3>

          <p>
            Nossa equipe responde rapidamente às solicitações enviadas pelo site.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>duoalves.inteligencia@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaWhatsapp />
            <span>(31) 99912-6371</span>
          </div>

          <div className="contact-item">
            <FaClock />
            <span>Segunda a Sexta • 08h às 18h</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Atendimento em todo o Brasil</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;
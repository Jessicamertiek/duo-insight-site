import { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        ></textarea>

        <button type="submit">
          Enviar Solicitação
        </button>
      </form>

      <div className="contact-info">
        <p>📧 duoalves.inteligencia@gmail.com</p>

        <p>📱 (31) 99912-6371</p>
      </div>
    </section>
  );
}

export default Contact;
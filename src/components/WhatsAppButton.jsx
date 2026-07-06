import "../styles/whatsapp.css";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const mensagem =
    "Olá! Conheci a Duo Insight pelo site e gostaria de solicitar uma demonstração.";

  const link = `https://wa.me/5531999126371?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <a
      href={link}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={34} />
    </a>
  );
}

export default WhatsAppButton;
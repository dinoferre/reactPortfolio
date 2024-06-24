import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-1 flex items-center justify-center py-1">
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://github.com/dinoferre" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/dinoferre" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/dino.ferre" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:dino1986ferre@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://api.whatsapp.com/send?phone=5491155795177" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
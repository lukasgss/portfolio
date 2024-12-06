import logo from "../assets/images/lgLogo.png";

export default function Footer() {
  return (
    <footer className="p-8 bg-[#1a1a1a34] border-t border-[rgba(255,255,255,0.1)]">
      <h2 className="font-bold text-center text-xl">
        <a href="#home">
          <img
            src={logo.src}
            alt="Logo"
            loading="lazy"
            className="w-14 mx-auto"
          />
        </a>
      </h2>

      <p className="text-center mt-6">Desenvolvido com ❤️ por Lucas Gomes</p>
    </footer>
  );
}

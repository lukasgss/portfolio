import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ["home", "about", "skills", "projects", "contact"];

      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    <header
      className={`hidden md:flex bg-transparent fixed top-0 left-0 justify-between items-center h-[70px] md:px-20 lg:px-28 w-full mx-auto 
        transition-all duration-500 z-[100000] ${
          isScrolled ? "bg-[#141414] opacity-90 shadow" : ""
        }`}
    >
      <div>
        <h2 className="font-bold text-xl">Lucas Gomes</h2>
      </div>

      <div className="hidden md:block">
        <ul className="flex gap-5">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`
                  relative
                  transition-colors duration-300
                  text-lg
                  hover:text-white
                  ${activeSection === section ? "text-white" : "text-[#b7b4b9]"}
                  after:content-['']
                  after:absolute
                  after:bottom-0
                  after:left
                  after:w-0
                  after:h-[1.5px]
                  after:bg-white
                  after:transition-all
                  after:duration-500
                  after:ease-out
                  after:left-0
                  hover:after:w-full
                  hover:after:left-0
                  ${
                    activeSection === section
                      ? "after:w-full after:left-0"
                      : "after:w-0 after:left-1/2"
                  }
                `}
              >
                {section === "home"
                  ? t("header.inicio")
                  : section === "about"
                  ? t("header.sobre")
                  : section === "skills"
                  ? t("header.skills")
                  : section === "projects"
                  ? t("header.projetos")
                  : t("header.contato")}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

import { useState } from "react";
import { useTranslation } from "react-i18next";
import acheMeuPet from "../assets/images/acheMeuPet.webp";
import bsCommerce from "../assets/images/bsCommerce.webp";
import esporti from "../assets/images/eSporti.webp";
import multisports from "../assets/images/multisports.webp";
import schools from "../assets/images/schools.webp";
import surpriseLove from "../assets/images/surpriseLove.webp";
import theConsulting from "../assets/images/theConsulting.webp";
import youin from "../assets/images/youin.webp";

type ProjectType = "all" | "work" | "personal";

export default function Projects() {
  const [currentActiveFilter, setCurrentActiveFilter] =
    useState<ProjectType>("all");

  const { t } = useTranslation();

  const projects = [
    {
      type: "personal",
      name: "AcheMeuPet",
      description: t("projects.descricaoAcheMeuPet"),
      image: acheMeuPet.src,
      link: "https://achemeupet.com.br/",
    },
    {
      type: "personal",
      name: "Surpries",
      description: t("projects.descricaoSurpriseLove"),
      image: surpriseLove.src,
      link: "https://surpries.com",
    },
    {
      type: "work",
      name: "YouIn",
      description: t("projects.descricaoYouIn"),
      image: youin.src,
      link: "https://youin.digital/",
    },
    {
      type: "work",
      name: "BS Commerce",
      description: t("projects.descricaoBsCommerce"),
      image: bsCommerce.src,
      link: "https://portal.brunsker.com.br/solucoes/bs-ecommerce",
    },
    {
      type: "work",
      name: "The Consulting",
      description: t("projects.descricaoTheConsulting"),
      image: theConsulting.src,
      link: "https://www.grupothe.com.br/the-consulting",
    },
    {
      type: "work",
      name: "e-SporTI",
      description: t("projects.descricaoESporti"),
      image: esporti.src,
      link: "https://www.sporti.com.br/esports.html",
    },
    {
      type: "work",
      name: "Multisports",
      description: t("projects.descricaoMultisports"),
      image: multisports.src,
      link: "https://www.sporti.com.br/multisports.html",
    },
    {
      type: "work",
      name: "Schools",
      description: t("projects.descricaoSchools"),
      image: schools.src,
      link: "https://www.sporti.com.br/schools.html",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-transparent w-[85%] md:w-[70%] lg:w-[90%] xl:w-[70%] 
      mx-auto scroll-p-10 transition-all duration-200 scroll-m-[40px]"
    >
      <h2 className="text-3xl md:text-5xl mt-20 md:mt-6 mb-8">
        {t("projects.projetos")}
      </h2>

      <div className="flex mt-4 gap-5">
        <button
          type="button"
          onClick={() => setCurrentActiveFilter("all")}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === "all"
              ? "bg-white text-black font-semibold"
              : "text-[#d9d9d9] bg-transparent"
          }`}
        >
          {t("projects.todos")}
        </button>

        <button
          type="button"
          onClick={() => setCurrentActiveFilter("work")}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === "work"
              ? "bg-white text-black font-semibold"
              : "text-[#d9d9d9] bg-transparent hover:bg-[#d9d9d9] hover:text-black"
          }`}
        >
          {t("projects.profissional")}
        </button>

        <button
          type="button"
          onClick={() => setCurrentActiveFilter("personal")}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === "personal"
              ? "bg-white text-black font-semibold"
              : "text-[#d9d9d9] bg-transparent hover:bg-[#d9d9d9] hover:text-black"
          }`}
        >
          {t("projects.pessoal")}
        </button>
      </div>

      <div className="grid gap-3 md:gap-8 grid-cols-1 lg:grid-cols-3 mt-8">
        {projects
          .filter(
            (project) =>
              project.type === currentActiveFilter ||
              currentActiveFilter === "all"
          )
          .map((project) => (
            <a
              href={project.link}
              target="_blank"
              key={project.name}
              className="group h-[350px]"
            >
              <div className="h-full mt-3 bg-[#1a1a1a34] rounded-lg border border-[rgba(255,255,255,0.1)] p-4">
                <div className="relative w-fit mx-auto">
                  <img
                    src={project.image}
                    alt={project.name}
                    loading="lazy"
                    className="rounded-2xl h-[170px] w-auto"
                  />
                  <div
                    className="group-hover:opacity-100 absolute top-0 left-0 w-full h-full bg-black/70 text-white flex 
                items-center justify-center opacity-0 rounded-2xl transition-opacity duration-300 ease-in-out"
                  >
                    <p>{t("projects.visualizar")}</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                <p className="text-[#d0cfcf] mt-2">{project.description}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  );
}

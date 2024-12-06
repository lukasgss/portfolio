import { useTranslation } from "react-i18next";
import brFlag from "../assets/images/brFlag.webp";
import usFlag from "../assets/images/usFlag.webp";

export default function ChooseLanguage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex gap-3.5 absolute top-6 md:top-20 lg:top-28 xl:top-20 right-10">
      <button
        type="button"
        onClick={() => i18n.changeLanguage("en")}
        title={t("linguagens.ingles")}
      >
        <img
          src={usFlag.src}
          alt={t("bandeiras.eua")}
          className={`h-[25px] w-[25px] ${
            i18n.language !== "en" ? "grayscale" : ""
          }`}
        />
      </button>
      <button
        type="button"
        onClick={() => i18n.changeLanguage("ptBR")}
        title={t("linguagens.portugues")}
      >
        <img
          src={brFlag.src}
          alt={t("bandeiras.brasil")}
          className={`h-[25px] w-[25px] ${
            i18n.language !== "ptBR" ? "grayscale" : ""
          }`}
        />
      </button>
    </div>
  );
}

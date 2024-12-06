import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { TypeAnimation } from "react-type-animation";
import ButtonLink from "./common/ButtonLink";

type IconProps = {
  className?: string;
};

function IconLinkedin({ className }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
}

function IconGithub({ className }: Readonly<IconProps>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function IconSend() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 14l11 -11" />
      <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
    </svg>
  );
}

function IconMouse() {
  return (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 247 390"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 1.5,
      }}
    >
      <path
        className="animate-[scroll_2s_ease_infinite]"
        d="M123.359,79.775l0,72.843"
        style={{ fill: "none", stroke: "#b7b4b9", strokeWidth: "20px" }}
      ></path>
      <path
        id="mouse"
        d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
        style={{ fill: "none", stroke: "#b7b4b9", strokeWidth: "20px" }}
      ></path>
    </svg>
  );
}

function IconArrowDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d0d0d1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M18 13l-6 6" />
      <path d="M6 13l6 6" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

export default function Introduction() {
  const { t, i18n } = useTranslation();
  const [sequence, setSequence] = useState([
    "Lucas Gomes",
    2000,
    t("introduction.subtitle"),
    2000,
  ]);

  useEffect(() => {
    const newSequence = ["Lucas Gomes", 2000, t("introduction.subtitle"), 2000];
    setSequence(newSequence);
  }, [t, i18n.language]);

  return (
    <section
      id="home"
      className="bg-transparent w-[90%] md:w-[59%] lg:w-[80%] xl:w-[70%] mx-auto transition-all duration-200 min-h-screen 
      h-fit pt-20 md:pt-36 scroll-m-[500px]"
    >
      <div className="flex flex-col items-center lg:grid lg:gap-5 xl:gap-0 gap-0 lg:grid-cols-9">
        <div className="md:mx-auto lg:mx-0 flex gap-5">
          <div className="flex flex-col justify-center gap-5 mt-5 col-span-1">
            <a
              href="https://www.linkedin.com/in/lucasgsilva1/"
              target="_blank"
              className="text-[#bfbfbf] hover:text-white"
            >
              <IconLinkedin className="lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://github.com/lukasgss/"
              target="_blank"
              className="text-[#bfbfbf] hover:text-white"
            >
              <IconGithub className="lg:w-8 lg:h-8" />
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5531984282118&text=Olá! Vi seu portfólio e gostaria de entrar em contato.&type=phone_number&app_absent=1"
              target="_blank"
              className="text-[#bfbfbf] hover:text-white"
            >
              <IconWhatsApp />
            </a>
          </div>

          <div className="lg:hidden home-img col-span-4" />
        </div>

        <div className="animation-container col-span-4 mt-8">
          <h3 className="text-2xl font-semibold text-[#831699]">
            {t("introduction.title")}
          </h3>
          <div className="text-container" key={i18n.language}>
            <TypeAnimation
              sequence={["Lucas Gomes", 2000, t("introduction.subtitle"), 2000]}
              speed={10}
              deletionSpeed={55}
              repeat={Infinity}
            />
          </div>

          <p className="max-w-[450px] text-slate-300 text-lg md:text-xl lg:mt-3">
            {t("introduction.description")}
          </p>

          <ButtonLink
            link="#contact"
            icon={<IconSend />}
            className="mt-8 md:mt-16"
          >
            {t("introduction.entreEmContato")}
          </ButtonLink>
        </div>

        <div className="hidden lg:block home-img col-span-4" />
      </div>

      <div className="hidden lg:block absolute left-[42.5%] bottom-8 animate-[customBounce_1s_ease-in-out_infinite]">
        <a href="#about" className="flex items-center gap-2">
          <IconMouse />
          <p className="text-[#d0d0d1]">{t("introduction.rolarParaBaixo")}</p>
          <IconArrowDown />
        </a>
      </div>
    </section>
  );
}

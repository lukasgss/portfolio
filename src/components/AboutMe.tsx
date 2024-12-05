import ButtonLink from './common/ButtonLink'

import lucasGomes from '../assets/images/lucas-gomes-2.jpg'

function AwardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d9d9d9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4v3m-4 -3v6m8 -6v6" />
      <path d="M12 18.5l-3 1.5l.5 -3.5l-2 -2l3 -.5l1.5 -3l1.5 3l3 .5l-2 2l.5 3.5z" />
    </svg>
  )
}

function WorkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d9d9d9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
      <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" />
      <path d="M12 12l0 .01" />
      <path d="M3 13a20 20 0 0 0 18 0" />
    </svg>
  )
}

function WorldIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6"
    >
      <rect width="256" height="256" fill="none" />
      <circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke="#d9d9d9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M75.88,123.26,89.2,100a8,8,0,0,1,6.94-4h16.71a7.9,7.9,0,0,0,3.86-1L129,88.24a7.12,7.12,0,0,0,1.49-1.07l26.92-24.33A8,8,0,0,0,159,53l-10.5-18.81"
        fill="none"
        stroke="#d9d9d9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M67.78,53.23,56,81.08A8,8,0,0,0,55.88,87l11.5,30.67a8,8,0,0,0,5.81,5l21.43,4.61a8,8,0,0,1,5.52,4.33l3.8,7.87a8,8,0,0,0,7.2,4.51h13.8"
        fill="none"
        stroke="#d9d9d9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <path
        d="M213.09,172.48l-52.38-32.22a8.11,8.11,0,0,0-3.12-1.11l-22.82-3.08a8,8,0,0,0-8.38,4.67l-13.7,30.74a8,8,0,0,0,1.44,8.69l19.74,20.33a8,8,0,0,1,2,6.95l-3.17,16.44"
        fill="none"
        stroke="#d9d9d9"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  )
}

function ResumeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className="w-6"
    >
      <rect width="256" height="256" fill="none" />
      <rect
        x="53.87"
        y="34.21"
        width="148.27"
        height="187.59"
        rx="8"
        transform="translate(24.22 -20.31) rotate(10.02)"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="16"
      />
      <line
        x1="97.22"
        y1="59.81"
        x2="180.2"
        y2="74.47"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="174.66"
        y1="105.98"
        x2="91.67"
        y2="91.33"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="127.62"
        y1="130.17"
        x2="86.13"
        y2="122.84"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  )
}

export default function AboutMe() {
  const currentYear = new Date().getFullYear()

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center bg-transparent w-[85%] md:w-[59%] mx-auto scroll-m-[60px]
       transition-all duration-200 mt-8 md:pt-0"
    >
      <h2 className="text-3xl md:text-5xl text-center mt-8 mb-6">Sobre mim</h2>

      <img
        src={lucasGomes.src}
        alt="Lucas Gomes"
        className="rounded-full w-[200px] h-[200px]"
      />

      <div className="flex gap-2.5 sm:gap-5 mt-6">
        <div
          className="bg-[#1a1a1a34] w-[100px] md:min-w-[135px] flex flex-col gap-0.5 items-center rounded-md 
        border border-[rgba(255,255,255,.1)] p-1 md:p-3"
        >
          <AwardIcon />
          <p className="text-sm sm:text-base text-[#d9d9d9] mb-0.5">
            Experiência
          </p>
          <p className="text-[#737274] text-xs">+{currentYear - 2021} anos</p>
        </div>

        <div
          className="bg-[#1a1a1a34] w-[100px] md:min-w-[135px] flex flex-col gap-0.5 items-center rounded-md
         border border-[rgba(255,255,255,.1)] p-1 md:p-3"
        >
          <WorkIcon />
          <p className="text-sm sm:text-base text-[#d9d9d9] mb-0.5">Projetos</p>
          <p className="responsive-text text-[#737274] text-xs text-ellipsis overflow-hidden"></p>
        </div>

        <div
          className="bg-[#1a1a1a34] w-[100px] md:min-w-[135px] flex flex-col gap-0.5 items-center rounded-md
         border border-[rgba(255,255,255,.1)] p-1 md:p-3"
        >
          <WorldIcon />
          <p className="text-sm sm:text-base text-[#d9d9d9] mb-0.5">Idiomas</p>
          <p className="text-[#737274] text-xs">2 fluentes</p>
        </div>
      </div>

      <p className="text-slate-200 w-full lg:max-w-[75%] mt-7">
        Desenvolvedor .NET especializado em criar aplicações web robustas e
        escaláveis. Experiência em desenvolvimento full stack com .NET, xUnit e
        bancos de dados SQL e NoSQL. Foco na arquitetura adequada pro projeto e
        princípios SOLID para entregar soluções de alta qualidade com interfaces
        modernas e intuitivas.
      </p>

      <ButtonLink
        newPage
        link="https://drive.google.com/file/d/1s3w24bmDPxA3ZV0uhsK2A7LWRXjJvEY_/view?usp=sharing"
        className="mt-12"
      >
        Baixar currículo
        <ResumeIcon />
      </ButtonLink>
    </section>
  )
}

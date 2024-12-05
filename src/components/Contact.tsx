function SendMailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d6d6d6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7h3" />
      <path d="M3 11h2" />
      <path d="M9.02 8.801l-.6 6a2 2 0 0 0 1.99 2.199h7.98a2 2 0 0 0 1.99 -1.801l.6 -6a2 2 0 0 0 -1.99 -2.199h-7.98a2 2 0 0 0 -1.99 1.801z" />
      <path d="M9.8 7.5l2.982 3.28a3 3 0 0 0 4.238 .202l3.28 -2.982" />
    </svg>
  )
}

function LinkedinIcon() {
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
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  )
}

function WhatsAppIcon() {
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
  )
}

function RightArrowIcon() {
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
      <path d="M5 12l14 0" />
      <path d="M13 18l6 -6" />
      <path d="M13 6l6 6" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen mt-20 flex flex-col items-center bg-transparent w-[85%] md:w-[59%] mx-auto scroll-m-[60px]
      transition-all duration-200 mb-16 md:mb-0"
    >
      <h2 className="text-3xl md:text-5xl mt-12 mb-8">Contato</h2>

      <div className="bg-[#1a1a1a34] rounded-md px-8 md:px-16 py-4 md:py-12 border-2 mt-8 border-[rgba(255,255,255,0.1)]">
        <h5 className="text-center text-xl md:text-3xl mb-6">Fale comigo</h5>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10">
          <a
            href="mailto:lukasgss37@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center group min-w-60"
          >
            <div className="bg-[#1a1a1a34] w-full group-hover:brightness-150 px-5 py-5 flex flex-col items-center rounded-md border border-[rgba(255,255,255,0.1)]">
              <SendMailIcon />
              <p className="text-[#e5e5e5]">E-mail</p>

              <p className="text-[#a09ba2]">lukasgss37@gmail.com</p>

              <p className="flex gap-2 mt-2 text-[#bab6bc]">
                Enviar e-mail
                <RightArrowIcon />
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/lucasgsilva1/"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center group min-w-60"
          >
            <div className="bg-[#1a1a1a34] w-full group-hover:brightness-150 px-5 py-5 flex flex-col items-center rounded-md border border-[rgba(255,255,255,0.1)]">
              <LinkedinIcon />
              <p className="text-[#e5e5e5] mt-2">LinkedIn</p>

              <p className="text-[#a09ba2]">Lucas Gomes</p>

              <p className="flex gap-2 mt-2 text-[#bab6bc]">
                Visitar perfil
                <RightArrowIcon />
              </p>
            </div>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=5531984282118&text=Olá! Vi seu portfolio e gostaria de entrar em contato.&type=phone_number&app_absent=1"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center group min-w-60"
          >
            <div className="bg-[#1a1a1a34] w-full group-hover:brightness-150 px-5 py-5 flex flex-col items-center rounded-md border border-[rgba(255,255,255,0.1)]">
              <WhatsAppIcon />
              <p className="text-[#e5e5e5] mt-2">WhatsApp</p>

              <p className="text-[#a09ba2] mt-1">+55 (31) 98428-2118</p>

              <p className="flex gap-2 mt-2 text-[#bab6bc]">
                Entrar em contato
                <RightArrowIcon />
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

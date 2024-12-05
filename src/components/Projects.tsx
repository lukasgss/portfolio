import { useState } from 'react'
import acheMeuPet from '../assets/images/acheMeuPet.png'
import bsCommerce from '../assets/images/bsCommerce.png'
import esporti from '../assets/images/eSporti.png'
import multisports from '../assets/images/multisports.png'
import schools from '../assets/images/schools.png'
import surpriseLove from '../assets/images/surpriseLove.png'
import theConsulting from '../assets/images/theConsulting.png'
import youin from '../assets/images/youin.png'

type ProjectType = 'all' | 'work' | 'personal'

export default function Projects() {
  const [currentActiveFilter, setCurrentActiveFilter] =
    useState<ProjectType>('all')

  const projects = [
    {
      type: 'personal',
      name: 'AcheMeuPet',
      description:
        'Aplicação web para encontrar um lar a animais de rua, seja perdidos, abandonados ou para adoção.',
      image: acheMeuPet.src,
      link: 'https://achemeupet.com.br/',
    },
    {
      type: 'personal',
      name: 'SurpriseLove',
      description:
        'SaaS criado para surpreender o(a) namorado(a) com um site personalizado.',
      image: surpriseLove.src,
      link: 'https://surprise-love-landing-page.vercel.app/',
    },
    {
      type: 'work',
      name: 'YouIn',
      description:
        'Canal de ética e ouvidoria para tratagem de denúncias, sugestões e muitos outros na organização.',
      image: youin.src,
      link: 'https://youin.digital/',
    },
    {
      type: 'work',
      name: 'BS Commerce',
      description:
        'Sincronização bidirecional dos dados entre o e-commerce com o ERP do cliente.',
      image: bsCommerce.src,
      link: 'https://portal.brunsker.com.br/solucoes/bs-ecommerce',
    },
    {
      type: 'work',
      name: 'The Consulting',
      description:
        'Ferramenta de recrutamento de candidatos utilizando banco de talentos.',
      image: theConsulting.src,
      link: 'https://www.grupothe.com.br/the-consulting',
    },
    {
      type: 'work',
      name: 'e-SporTI',
      description:
        'Aplicação web para organização de torneios de games online ou presenciais.',
      image: esporti.src,
      link: 'https://www.sporti.com.br/esports.html',
    },
    {
      type: 'work',
      name: 'Multisports',
      description:
        'Plataforma de gestão esportiva para torneios, ligas, federações, projetos e organizações esportivas.',
      image: multisports.src,
      link: 'https://www.sporti.com.br/multisports.html',
    },
    {
      type: 'work',
      name: 'Schools',
      description:
        'Plataforma para gestão de escolas, franquias e redes de escolas de esporte.',
      image: schools.src,
      link: 'https://www.sporti.com.br/schools.html',
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center bg-transparent w-[85%] md:w-[70%] lg:w-[90%] xl:w-[70%] 
      mx-auto scroll-p-10 transition-all duration-200 scroll-m-[40px]"
    >
      <h2 className="text-3xl md:text-5xl mt-20 md:mt-6 mb-8">Projetos</h2>

      <div className="flex mt-4 gap-5">
        <button
          type="button"
          onClick={() => setCurrentActiveFilter('all')}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === 'all'
              ? 'bg-white text-black font-semibold'
              : 'text-[#d9d9d9] bg-transparent'
          }`}
        >
          Todos
        </button>

        <button
          type="button"
          onClick={() => setCurrentActiveFilter('work')}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === 'work'
              ? 'bg-white text-black font-semibold'
              : 'text-[#d9d9d9] bg-transparent hover:bg-[#d9d9d9] hover:text-black'
          }`}
        >
          Profissional
        </button>

        <button
          type="button"
          onClick={() => setCurrentActiveFilter('personal')}
          className={`px-3 py-1 rounded-md ${
            currentActiveFilter === 'personal'
              ? 'bg-white text-black font-semibold'
              : 'text-[#d9d9d9] bg-transparent hover:bg-[#d9d9d9] hover:text-black'
          }`}
        >
          Pessoal
        </button>
      </div>

      <div className="grid gap-3 md:gap-8 grid-cols-1 lg:grid-cols-3 mt-8">
        {projects
          .filter(
            (project) =>
              project.type === currentActiveFilter ||
              currentActiveFilter === 'all',
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
                    <p>Visualizar</p>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{project.name}</h3>
                <p className="text-[#d0cfcf] mt-2">{project.description}</p>
              </div>
            </a>
          ))}
      </div>
    </section>
  )
}

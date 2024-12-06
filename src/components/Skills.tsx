import javascript from "../assets/images/tech/javascript.webp";
import reactQuery from "../assets/images/tech/react-query.webp";
import react from "../assets/images/tech/react.webp";
import tailwind from "../assets/images/tech/tailwind.webp";
import typescript from "../assets/images/tech/typescript.webp";

import { useTranslation } from "react-i18next";
import azurePipelines from "../assets/images/tech/azure-pipelines.webp";
import docker from "../assets/images/tech/docker.webp";
import dotnet from "../assets/images/tech/dotnet.webp";
import efCore from "../assets/images/tech/efCore.webp";
import kafka from "../assets/images/tech/kafka.webp";
import kubernetes from "../assets/images/tech/kubernetes.svg";
import postgres from "../assets/images/tech/postgresql.webp";
import rabbitmq from "../assets/images/tech/rabbitmq.svg";
import redis from "../assets/images/tech/redis.svg";
import xunit from "../assets/images/tech/xunit.webp";

function IconDesktop() {
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
      <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z" />
      <path d="M7 20h10" />
      <path d="M9 16v4" />
      <path d="M15 16v4" />
    </svg>
  );
}

function IconServer() {
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
      <path d="M3 4m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M3 12m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v2a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" />
      <path d="M7 8l0 .01" />
      <path d="M7 16l0 .01" />
    </svg>
  );
}

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center bg-transparent w-[85%] md:w-[59%] mx-auto scroll-p-10 
      transition-all duration-200 scroll-m-[60px] mt-12 md:mt-0"
    >
      <h2 className="text-3xl md:text-5xl text-center mt-12 mb-8">
        {t("skills.habilidadesTecnicas")}
      </h2>

      <div className="flex flex-col gap-10">
        <div className="bg-[#1a1a1a34] rounded-md border border-[rgba(255,255,255,0.1)] px-8 md:px-16 py-6 md:py-12">
          <div className="flex justify-center gap-2 mb-5 text-[#d9d9d9]">
            <IconDesktop />
            <p>Front end</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center">
            <img
              src={javascript.src}
              title="JavaScript"
              alt="JavaScript"
              className="w-[50px] h-auto"
            />
            <img
              src={typescript.src}
              title="TypeScript"
              alt="TypeScript"
              className="w-[50px] h-auto"
            />
            <img
              src={react.src}
              alt="React"
              title="React"
              className="w-[50px] h-auto"
            />
            <img
              src={tailwind.src}
              alt="Tailwind"
              title="Tailwind"
              className="w-[50px] h-auto"
            />
            <img
              src={reactQuery.src}
              title="React Query"
              alt="React Query"
              className="w-[50px] h-auto"
            />
          </div>
        </div>

        <div className="bg-[#1a1a1a34] rounded-md border border-[rgba(255,255,255,0.1)] px-8 md:px-16 py-6 md:py-12">
          <div className="flex justify-center gap-2 mb-5 text-[#d9d9d9]">
            <IconServer />
            <p>Back end</p>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-row gap-6 items-center">
              <img
                src={dotnet.src}
                title=".NET"
                alt=".NET"
                className="w-[50px] h-auto rounded-full"
              />
              <img
                src={efCore.src}
                title="Entity Framework"
                alt="Entity Framework"
                className="w-[50px] h-auto rounded-full"
              />
              <img
                src={xunit.src}
                title="xUnit"
                alt="xUNit"
                className="w-[50px] h-auto"
              />
              <img
                src={postgres.src}
                title="PostgreSQL"
                alt="PostgreSQL"
                className="w-[50px] h-auto"
              />
              <img
                src={azurePipelines.src}
                title="Pipelines"
                alt="Pipelines"
                className="w-[50px] h-auto"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-6 items-center mt-8">
              <img
                src={docker.src}
                title="Docker"
                alt="Docker"
                className="w-[50px] h-auto"
              />
              <img
                src={kubernetes.src}
                title="Kubernetes"
                alt="Kubernetes"
                className="w-[50px] h-auto"
              />
              <img
                src={rabbitmq.src}
                title="RabbitMQ"
                alt="RabbitMQ"
                className="w-[50px] h-auto"
              />
              <img
                src={redis.src}
                title="Redis"
                alt="Redis"
                className="w-[50px] h-auto"
              />
              <img
                src={kafka.src}
                title="Apache Kafka"
                alt="Apache Kafka"
                className="w-[50px] h-auto rounded-full"
              />
            </div>
          </div>

          <div className="block lg:hidden">
            <div className="grid grid-cols-2 gap-6 justify-center items-center">
              <img
                src={dotnet.src}
                title=".NET"
                alt=".NET"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={efCore.src}
                title="Entity Framework"
                alt="Entity Framework"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={xunit.src}
                title="xUnit"
                alt="xUNit"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={postgres.src}
                title="PostgreSQL"
                alt="PostgreSQL"
                className="w-[50px] h-auto mx-auto"
              />
              <img
                src={azurePipelines.src}
                title="Pipelines"
                alt="Pipelines"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={docker.src}
                title="Docker"
                alt="Docker"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={kubernetes.src}
                title="Kubernetes"
                alt="Kubernetes"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={rabbitmq.src}
                title="RabbitMQ"
                alt="RabbitMQ"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
              <img
                src={redis.src}
                title="Redis"
                alt="Redis"
                className="w-[50px] h-auto mx-auto"
              />
              <img
                src={kafka.src}
                title="Apache Kafka"
                alt="Apache Kafka"
                className="w-[50px] h-auto mx-auto rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

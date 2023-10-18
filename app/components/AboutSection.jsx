"use client";
import { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-4 gap-4">
        <li>React JS</li>
        <li>Next JS</li>
        <li>React Native Expo</li>
        <li>JavaScript</li>
        <li>MUI</li>
        <li>Tailwind</li>
        <li>Node JS</li>
        <li>Expressjs</li>
        <li>PHP</li>
        <li>Laravel</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>SQL</li>
        <li>Linux</li>
        <li>Wordpress</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Trainee, Codi Tech</li>
        <li>BS Computer Science, LU</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src={"/images/developer.jpg"} alt="" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Junior Developer with a passion for creating dynamic and
            user-friendly applications. With expertise in both frontend and
            backend development, I offer well-rounded solutions to meet your
            needs.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

"use client";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Scorin",
    stack: "MERN",
    effort: "Individual Effort",
    description:
      "Mobile application for booking stadiums by location, it shows you the nearest stadiums available to book.",
    image: "/images/scorin.png",
    tag: ["All", "Mobile"],
    previewUrl:
      "https://play.google.com/store/apps/details?id=com.mahmoudkh01.Scorin",
  },
  {
    id: 2,
    title: "Alfazairy",
    stack: "MERN",
    effort: "Team Effort",
    description:
      "Website for customers to browse various wedding dress categories and view item details.",
    image: "/images/alFazairy.png",
    tag: ["All", "Web"],
    gitUrl: "https://gitlab.com/alumni-group-11/frontend",
  },
  {
    id: 3,
    title: "Top Design",
    stack: "MERN",
    effort: "Team Effort",
    description:
      "Event planning agency website that showcases the businesses events and services for kids.",
    image: "/images/TopDesign.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mahmoudkhoder01/Front-end-real-client",
  },
  {
    id: 4,
    title: "LMS",
    stack: "LAMP",
    effort: "Team Effort",
    description:
      "LMS project to create a system for teachers to take attendance for students by date.",
    image: "/images/LMS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Mahmoudkhoder01/Front-end-Advanced-project",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              title={project.title}
              stack={project.stack}
              effort={project.effort}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;

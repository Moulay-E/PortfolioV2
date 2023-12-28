import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import { projectData } from '@/constants';

import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/mountains.webp) ' }}
      className=" w-screen h-screen flex pt-[100px] items-center justify-center bg-center bg-cover "
    >
      <div className="overflow-scroll md:overflow-hidden grid grid-cols-1 gap-8 md:gap-5 md:grid-cols-2 flex-col w-[80%] h-[80%] md:w-[90%] md:h-[70%] mb-12">
        {projectData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            text={project.text}
            image={project.src}
            githubIcon={project.githubIcon}
            webIcon={project.webIcon}
            githubLink={project.githubLink}
            webLink={project.webLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;

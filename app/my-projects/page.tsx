import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';
import { projectData } from '@/constants';

import React from 'react';

const Page = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/mountain2.webp)' }}
      className=" w-screen h-screen flex pt-[100px] items-center justify-center bg-center bg-cover flex-col "
    >
      <h2 className="font-semibold text-white text-2xl w-full text-center h-[8%] ">
        Portfo
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
          lio{' '}
        </span>
      </h2>
      <div className="overflow-scroll md:overflow-hidden grid grid-cols-1 gap-8 md:gap-8 md:grid-cols-2 flex-col w-[80%] h-[80%]  md:max-w-[80%] lg:max-w-[60%] md:h-[70%] mb-20  ">
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

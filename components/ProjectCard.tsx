'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  image: string;
  title: string;
  text: string;
  githubIcon: string;
  webIcon: string;
  githubLink: string;
  webLink: string;
}

const ProjectCard = ({
  image,
  title,
  text,
  githubIcon,
  webIcon,
  githubLink,
  webLink,
}: Props) => {
  const [isFlipped, setIsflipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  function handleFlip() {
    if (!isAnimating) {
      setIsflipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const handleLinkClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={handleFlip}
      className="  w-full h-[250px] md:h-full rounded-md  "
    >
      <motion.div
        className="flip-card-inner w-full h-full "
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.6, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        {/* front of the card */}
        <div
          style={{
            backgroundImage: `url(${image}) `,
          }}
          className="cursor-pointer w-full h-full group relative flip-card-front bg-cover bg-center text-white rounded-lg p-4 "
        >
          <div className="" />
          <div className="absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center ">
            Learn more &gt;
          </div>
        </div>
        {/* backside of the card */}
        <div
          style={{
            backgroundImage: `url(${image}) `,
          }}
          className="opacity-60 w-full h-full group relative flip-card-back bg-cover bg-center text-white rounded-lg "
        >
          <div className=" absolute inset-0 w-full h-full rounded-md  " />
          <div className="w-full inline-flex flex-col text-center gap-16 md:gap-20 py-3 z-[30] ">
            <h1 className="bg-white text-black text-2xl font-semibold ">
              {title}
            </h1>
            <div className="absolute bottom-0 w-full rounded-b-[5px] bg-gradient-to-r from-[#413890] to-[#941f94] ">
              <p className="text-gray-200 text-[16px] ">{text}</p>
              <div className="flex ">
                <Link
                  href={webLink}
                  className="w-1/2 flex justify-center"
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={webIcon}
                    alt="icon & link to webSite"
                    width={44}
                    height={44}
                  />
                </Link>

                <Link
                  href={githubLink}
                  className="w-1/2 flex justify-center "
                  onClick={handleLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={githubIcon}
                    alt="icon & link to webSite"
                    width={44}
                    height={44}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;

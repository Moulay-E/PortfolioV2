'use client';
import { NavLinks } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Transition from './Transition';
import Image from 'next/image';

const Navigation = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [isActive, setisActive] = useState(path);
  const [prevPath, setprevPath] = useState('/');
  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);
  useEffect(() => {
    if (isRouting) {
      setprevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);
      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <div
      style={{ color: 'red' }}
      className="absolute z-[50] left-[10%] md:left-[20%] h-[65px] bottom-0 w-[80%] md:w-[60%]  max-h-[150px] lg:max-h-10%]  rounded-tr-[75px] rounded-tl-[75px] flex justify-between items-center border border-white bg-black border-b-transparent px-4 "
    >
      {isRouting && <Transition />}
      {NavLinks.map((nav) => (
        <Link
          key={nav.name}
          href={nav.link}
          className=" min-w-[20%] flex justify-center items-center h-[100px]"
        >
          <nav.icon
            className={` w-[24px] h-[24px] lg:w-[24px] lg:h-[24px]  ${
              path === nav.name ? 'text-purple-800' : 'text-white'
            } `}
          />
        </Link>
      ))}
    </div>
  );
};

export default Navigation;

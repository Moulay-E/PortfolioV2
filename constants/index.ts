import { RxHome } from 'react-icons/rx';
import { MdContacts } from 'react-icons/md';
import { LuBrainCircuit } from 'react-icons/lu';
import { HiWallet } from 'react-icons/hi2';

export const SkillData = [
  {
    name: 'Html 5',
    Image: '/html.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'Css',
    Image: '/css.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'JavaScript',
    Image: '/js.webp',
    width: 65,
    height: 65,
  },
  {
    name: 'Tailwind Css',
    Image: '/tailwind.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'React',
    Image: '/react.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'Redux',
    Image: '/redux.webp',
    width: 80,
    height: 80,
  },

  {
    name: 'TypeScript',
    Image: '/ts.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'Next js 13',
    Image: '/next.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'Framer Motion',
    Image: '/framer.webp',
    width: 80,
    height: 80,
  },
  // {
  //   name: 'Stripe Payment',
  //   Image: '/stripe.webp',
  //   width: 80,
  //   height: 80,
  // },
  {
    name: 'Node js',
    Image: '/node-js.webp',
    width: 80,
    height: 80,
  },
  {
    name: 'Mongo db',
    Image: '/mongodbSvg.svg',
    width: 80,
    height: 80,
  },
];

export const Socials = [
  {
    name: ' Github',
    src: '/githubSvg.svg',
    link: 'https://github.com/Moulay-E',
  },
  {
    name: 'Linkedin',
    src: '/linkedinSvg.svg',
    link: 'https://www.linkedin.com/in/moulay-edda-a94604293/',
  },
  // {
  //   name: 'Discord',
  //   src: '/discordSvg.svg',
  // },
];
export const Projects = [
  {
    title: 'Modern Nextjs Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/NextWebsite.png',
  },
  {
    title: 'Space Themed Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/SpaceWebsite.png',
  },
  {
    title: 'Modern Nextjs Portfolio',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/WebPortfolio.png',
  },
  {
    title: 'Matrix themed Website',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    src: '/Matrix.png',
  },
];

export const NavLinks = [
  {
    name: '/',
    icon: RxHome,
    link: '/',
  },
  {
    name: '/my-skills',
    icon: LuBrainCircuit,
    link: '/my-skills',
  },
  {
    name: '/my-projects',
    icon: HiWallet,
    link: '/my-projects',
  },
  {
    name: '/contact-me',
    icon: MdContacts,
    link: '/contact-me',
  },
];

export const projectData = [
  {
    title: 'Kasa',
    text: "Refonte Innovante du Site de Location d'Appartements avec React",
    description:
      "J'ai dirigé la refonte complète d'un site web dédié à la location d'appartements, en utilisant React pour moderniser l'interface utilisateur et améliorer l'expérience utilisateur globale. Ce projet a impliqué la conception méticuleuse et l'implémentation de composants personnalisés, ainsi que le développement de routes spécifiques pour naviguer efficacement dans l'application. J'ai également intégré une fonctionnalité dynamique pour afficher les informations des hôtes, les descriptions détaillées des logements, ainsi que les évaluations des utilisateurs. Mon objectif était de créer une plateforme intuitive et réactive, offrant aux utilisateurs un accès facile et une interaction fluide avec les informations des logements.",
    src: '/kasa.webp',
    link: 'https://celadon-duckanoo-5ff650.netlify.app/',
    tags: ['React', 'Js', 'Figma'],
    webIcon: '/webIcon.svg',
    webLink: 'https://celadon-duckanoo-5ff650.netlify.app',
    githubIcon: 'githubSvg.svg',
    githubLink: 'https://github.com/Moulay-E/Project_8_Kasa_OpenClassroom',
  },

  {
    title: 'oh my food',
    text: 'Conception Mobile-First pour une Expérience Utilisateur Optimalisée',
    description:
      "Dans ce projet, j'ai adopté une approche de conception 'mobile-first' afin de garantir une expérience utilisateur fluide et réactive sur tous les appareils. J'ai enrichi le site web avec des animations élégantes et un indicateur de chargement interactif pour améliorer l'engagement et la convivialité. En outre, j'ai utilisé Sass pour organiser et optimiser le code, ce qui a permis d'améliorer l'efficacité du développement et de maintenir une structure de code claire et facile à gérer. Cette approche stratégique a non seulement rendu le site esthétiquement agréable, mais a également assuré une performance et une accessibilité maximales, indépendamment de l'appareil utilisé par les visiteurs.",
    src: '/ohMyFood.webp',
    link: 'https://moulay-e.github.io/p4__OC__OhMyFood/',
    tags: ['Html', 'Sass', 'Js', 'Figma'],
    webIcon: '/webIcon.svg',
    webLink: 'https://moulay-e.github.io/projectOpenClass4/',
    githubIcon: 'githubSvg.svg',
    githubLink: 'https://github.com/Moulay-E/projectOpenClass4',
  },

  {
    title: 'Booki',
    text: 'Transformation de Concepts de Design en une Réalité Numérique',
    description:
      "Dans le cadre de ce projet, j'ai eu le privilège de transformer les concepts innovants de l'UI designer en une interface web tangible et fonctionnelle, en utilisant HTML et CSS. Ma mission principale était de créer un site web hautement réactif, conçu pour offrir une expérience utilisateur fluide et cohérente sur une multitude de tailles d'écran, des smartphones aux grands écrans de bureau. L'accent a été mis sur une mise en œuvre précise des designs, tout en assurant que le site soit flexible et accessible, quel que soit l'appareil utilisé par les utilisateurs finaux. Ce travail a nécessité une attention particulière à la responsive design, garantissant ainsi que chaque élément du site s'adapte harmonieusement à différents environnements de visualisation.",
    src: '/booki.webp',
    link: 'https://moulay-e.github.io/P3_OpenC_Booki/',
    tags: ['Html', 'Css', 'figma'],
    webIcon: '/webIcon.svg',
    webLink: 'https://moulay-e.github.io/P3_OpenC_Booki/',
    githubIcon: 'githubSvg.svg',
    githubLink: 'https://github.com/Moulay-E/P3_OpenC_Booki',
  },
  {
    title: '724 Events',
    text: 'Optimisation et Débogage du Site Web pour 724events',
    description:
      "Dans ce projet passionnant, j'ai été chargé de peaufiner et de déboguer le site web d'une agence événementielle de premier plan, 724events. Initialement développé par un freelance, le site – conçu comme une page unique – présentait des défis techniques non résolus et plusieurs bugs. Ma tâche consistait à identifier et résoudre ces problèmes, compléter minutieusement le cahier de recette, et assurer une performance optimale du site. L'objectif était de garantir une expérience utilisateur sans faille, répondant précisément aux attentes et aux standards de qualité élevés de l'agence.",
    src: '/724Event.webp',
    link: 'https://superb-bavarois-45f940.netlify.app/',
    tags: ['React', 'Js', 'Jest'],
    webIcon: '/webIcon.svg',
    webLink: 'https://superb-bavarois-45f940.netlify.app',
    githubIcon: 'githubSvg.svg',
    githubLink: 'https://github.com/Moulay-E/P10_724events',
  },
];

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mysql,
  blender,
  unreal,
  unity,
  django,
  spring,
  python,
  cpp,
  html,
  css,
  reactjs,
  nodejs,
  git,
  docker,
  meta,
  cll,
  ieee,
  starbucks,
  tesla,
  shopify,
  paymee,
  etudiantstartuppeur,
  scoretracker,
  microservices,
  pathfinding,
  mychess,
  compiler,
  assets,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "extra",
    title: "Extra",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Spring",
    icon: spring,
  },
  {
    name: "Mysql",
    icon: mysql,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const activities = [
  {
    title: "IEEEXtreme 16.0",
    organisation_name: "Institute of Electrical and Electronics Engineers",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "It is a global challenge in which teams of IEEE Student members – advised and proctored by an IEEE member, and often supported by an IEEE Student Branch – compete in a 24-hour time span against each other to solve a set of programming problems.",
      "We used C++ to tackle the hackathon challenges.",
      "Codebusters2 ranked 1253 globally, 116 nationally, and 4 at the university level.",
    ],
  },
  {
    title: "CLL Hackathon",
    organisation_name: "Club des Logiciels Libres",
    icon: cll,
    iconBg: "#383E56",
    date: "2021",
    points: [
      "It is a competition in which we design a dynamic web application for the CLL club.",
      "My task involves developing the frontend side of the web application using CSS and HTML5.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Score Tracker Solution",
    description:
      "Score Tracker Solution is a dynamic web application designed to monitor and record the current ranking and score of each member of the FST Startup Nation club. It comprises of two distinct sections, namely the member page and the administrator page.",
    tags: [
      {
        name: "Expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "Docker",
        color: "green-text-gradient",
      },
      {
        name: "GoogleAPI",
        color: "pink-text-gradient",
      },
    ],
    image: scoretracker,
    source_code_link: "https://github.com/Anas4444/Score-Tracker-Solution",
    demo_link: "",
    art_link : "",
  },
  {
    name: "Etudiant Startuppeur",
    description:
      "Etudiant Startuppeur is a dynamic web application built with the Django Framework that allows users to register for an online Entrepreneurial Event hosted by the FST Startup Nation club.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "GmailAPI",
        color: "pink-text-gradient",
      },
    ],
    image: etudiantstartuppeur,
    source_code_link: "https://github.com/Anas4444/Etudiant-Startuppeur",
    demo_link: "",
    art_link : "",
  },
  {
    name: "Micro-services",
    description:
      "This project is an implementation of the micro-services architecture using spring boot and spring cloud, where configuration files were externalized to a git repository using spring cloud config-server, each micro-service is registered to a discovery server eureka server, and for each request, the gateway server obtains client information from eureka server and roots it into a given path.",
    tags: [
      {
        name: "Springboot",
        color: "blue-text-gradient",
      },
      {
        name: "Springcloud",
        color: "green-text-gradient",
      },
      {
        name: "Eureka",
        color: "pink-text-gradient",
      },
      {
        name: "Keycloak",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "mauve-text-gradient",
      },
    ],
    image: microservices,
    source_code_link: "https://github.com/Anas4444/Microservices",
    demo_link: "",
    art_link : "",
  },
  {
    name: "Payment Template",
    description:
      "Payment Template in a dynamic web application developed with expressJS which integrates the Paymee API for a complete digital payment process.",
    tags: [
      {
        name: "Expressjs",
        color: "blue-text-gradient",
      },
      {
        name: "PaymeeAPI",
        color: "green-text-gradient",
      },
      {
        name: "GoogleAPI",
        color: "pink-text-gradient",
      },
    ],
    image: paymee,
    source_code_link: "https://github.com/Anas4444/Payment-template",
    demo_link: "",
    art_link : "",
  },
  {
    name: "Maze Game",
    description:
      "Maze Game features an AI agent that uses path finding algorithms to navigate the maze, determining the shortest path to a destination or tracking down an enemy. Maze generation is based on a text file dynamically converted into 3D objects at the start of each game.",
    tags: [
      {
        name: "UnrealEngine",
        color: "blue-text-gradient",
      },
      {
        name: "C++",
        color: "green-text-gradient",
      },
      {
        name: "Blueprints",
        color: "pink-text-gradient",
      },
    ],
    image: pathfinding,
    source_code_link: "https://github.com/Anas4444/Maze-Game",
    demo_link: "https://youtu.be/G98tCVbPJy8",
    art_link : "",
  },
  {
    name: "Mychess",
    description:
      "Mychess is a Windows-based 2D chess game that was developed in 2020 using Pygame, an open-source cross-platform library.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pygame",
        color: "green-text-gradient",
      },
    ],
    image: mychess,
    source_code_link: "https://github.com/Anas4444/Mychess",
    demo_link: "",
    art_link : "",
  },
  {
    name: "Compiler",
    description:
      "A compiler including a Lexical, Syntactic and Semantic Analyzer using the java language and generating a C++ code.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
    ],
    image: compiler,
    source_code_link: "https://github.com/Anas4444/Compiler-Project",
    demo_link: "",
    art_link : "",
  },
  {
    name: "3D Assets",
    description:
      "A selection of the 3D models I have created comprising of both lowpoly and stylized assets.",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
    ],
    image: assets,
    source_code_link: "https://github.com/Anas4444/3D-Assets",
    demo_link: "",
    art_link : "https://fluffy-homburg-682.notion.site/Portfolio-4a5d11985d594858a8a26fea467f5523",
  },
];

export { services, technologies, experiences, activities, testimonials, projects };

/**
 * Central portfolio data — generated from Pradip's resume (Pradip_Patil.pdf).
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Patil Pradip Vikas',
  displayName: 'Pradip Patil',
  firstName: 'Pradip',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A Patil ORIGINAL',
  role: 'Full-Stack Developer',
  tagline: ['Full-Stack Developer', 'Java', 'SpringBoot'],
  intro:
    'A B.Tech Computer Science student (CGPA 7.0) and aspiring Java Full Stack Developer with hands-on internship experience building web applications and HRMS solutions. Skilled in Java, Spring Boot, React, JavaScript, PHP, Laravel and MySQL, with a strong interest in backend development, REST APIs and building scalable, user-friendly applications.',
  location: 'Pune',
  email: 'patilp9931@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/pradeep-patil-2b5896331?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/Ppradeep123',
  },
  resumePdf: '/assets/software%20developer.pdf',
  portrait: {
    src: '/assets/myimg.png',
    alt: 'Portrait of Pradip Patil',
  },
  interests: ['Web Development', 'Java Development', 'Machine Learning', 'Artificial Intelligence'],
};

export const education = [
  {
    school: 'Ashokrao Mane Group Of Institution Vathar',
    place: 'Kolhapur',
    degree: 'Bachelor of Technology — Computer Science And Engineering',
    period: 'October 2022 – 2026',
    score: 'CGPA 7.5',
  },
  {
    school: 'Westfield junior college of science, Rajmachi',
    place: 'Karad',
    degree: 'HSC Science',
    period: 'June 2022',
    score: '84 %',
  },
   {
    school: 'Krishna English Medium Wathar',
    place: 'Karad',
    degree: 'SSC',
    period: 'June 2019',
    score: '72 %',
  },
];

export const experience = [
  {
    company: 'Seaquid Technology Pvt Ltd',
    role: 'Intern',
    place: 'Kolhapur, MH',
    period: 'April 2025 – Sep 2026',
    points: [
      'Completed a 6-month internship at Seaquid Technology, Kolhapur, gaining hands-on experience in web application development using PHP and Laravel.',
      'Developed and maintained HRMS modules, including responsive dashboards, login pages, and employee data entry forms.',
      'Worked with MySQL database operations, implemented backend functionality, and participated in debugging and testing.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};


export const projects: Project[] = [
  {
    id: 'hrms',
    title: 'Human Resource Management System',
    year: '2026',
    genre: 'Full-Stack • HRMS • Internship',
    logline: 'A web-based HR management system designed to manage employee information and streamline HR operations.',
    stack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    build: [
      'Contributed to the development of an HRMS application during a 6-month internship at Seaquid Technology, Kolhapur.',
      'Developed and worked on HRMS dashboards, login functionality, employee forms, and MySQL database operations.',
    ],
    features: [
      'Employee management',
      'HRMS dashboard',
      'Login and authentication interface',
      'Employee data entry forms',
      'MySQL database integration',
    ],
    metrics: [],
    palette: {
      from: '#10251d',
      via: '#276749',
      to: '#07130e',
      accent: '#5ee0a0',
    },
    motif: 'flow',
  },
  {
    id: 'professor-portfolio',
    title: 'Professor Portfolio Website',
    year: '2026',
    genre: 'Full-Stack • Client Project • CMS',
    logline: 'A dynamic academic portfolio website with an admin dashboard for managing professional information and academic content.',
    stack: ['React', 'PHP', 'MySQL', 'Tailwind CSS', 'REST API'],
    build: [
      'Developed a responsive academic portfolio website to showcase profile information, education, teaching experience, research, achievements, and gallery content.',
      'Implemented an admin dashboard with backend APIs for managing academic information, uploading documents, and maintaining website content.',
    ],
    features: [
      'Responsive portfolio website',
      'Admin login dashboard',
      'Profile and education management',
      'Teaching and research sections',
      'PDF certificate upload and management',
      'PHP API and MySQL integration',
    ],
    metrics: [],
    palette: {
      from: '#17251b',
      via: '#54765c',
      to: '#0b120d',
      accent: '#a8d5a2',
    },
    motif: 'shield',
  },
  {
    id: 'foodrescue',
    title: 'FoodRescue',
    year: '2026',
    genre: 'Full-Stack • Social Impact • Web Application',
    logline: 'A food donation platform connecting food donors with NGOs and volunteers to reduce food waste.',
    stack: ['Java 17', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'React'],
    build: [
      'Designed a full-stack food donation platform to connect people and organizations with NGOs and volunteers.',
      'Planned REST API integration, user authentication, food donation management, and database operations.',
    ],
    features: [
      'User registration and login',
      'Food donation management',
      'NGO and volunteer coordination',
      'JWT-based authentication',
      'REST API integration',
      'MySQL database management',
    ],
    metrics: [],
    palette: {
      from: '#251c0d',
      via: '#80602a',
      to: '#100d08',
      accent: '#ffc66d',
    },
    motif: 'flow',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'problem-solver',
    title: 'Problem Solver',
    org: 'Logical Thinking',
    detail: 'I enjoy solving programming challenges, understanding problems logically, and developing efficient solutions.',
    laurel: 'Analytical Mindset',
  },
  {
    id: 'project-builder',
    title: 'Project Builder',
    org: 'Practical Development',
    detail: 'I enjoy turning ideas into working applications, from designing user interfaces to implementing backend logic and database operations.',
    laurel: 'Building Real Projects',
  },
  {
    id: 'full-stack-development',
    title: 'Full Stack Explorer',
    org: 'Frontend & Backend',
    detail: 'Exploring frontend and backend technologies while developing skills in Java, Spring Boot, React, PHP, Laravel, and MySQL.',
    laurel: 'Full Stack Development',
  },
  {
    id: 'automation',
    title: 'Automation Enthusiast',
    org: 'Workflow Improvement',
    detail: 'Interested in automating repetitive tasks, simplifying workflows, and building tools that make everyday processes easier.',
    laurel: 'Automation Mindset',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learner',
    org: 'Technology & Innovation',
    detail: 'Always exploring new technologies, strengthening programming fundamentals, and improving through hands-on practice.',
    laurel: 'Always Growing',
  },
];

export type Certification = {
  title: string;
  issuer: string;
  platform: string;
  category: string;
  skills: string[];
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  description: string;
};

export const certifications: Certification[] = [
  {
    title: 'Programming in Java',
    issuer: 'NPTEL',
    platform: 'SWAYAM',
    category: 'Programming',
    skills: ['Core Java', 'OOP', 'Exception Handling', 'Inheritance'],
    issueDate: 'YOUR_COMPLETION_DATE',
    credentialId: '',
    credentialUrl: '',
    description: 'Completed coursework covering Java programming fundamentals and object-oriented programming concepts.',
  },
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    platform: 'SWAYAM',
    category: 'Cloud Computing',
    skills: ['Cloud Architecture', 'Virtualization', 'Cloud Services', 'Distributed Computing'],
    issueDate: 'YOUR_COMPLETION_DATE',
    credentialId: '',
    credentialUrl: '',
    description: 'Studied cloud computing fundamentals, virtualization, cloud infrastructure and service models.',
  },
  {
  title: 'Software Engineering Job Simulation',
  issuer: 'JPMorgan Chase & Co.',
  platform: 'Forage',
  category: 'Software Engineering',
  skills: [
    'Software Development',
    'Problem Solving',
    'Software Engineering',
    'Technical Analysis'
  ],
  issueDate: 'January 6, 2026',
  credentialId: '',
  credentialUrl: '',
  description: 'Completed a practical Software Engineering Job Simulation by JPMorgan Chase & Co., gaining hands-on exposure to real-world software engineering tasks and development workflows.'
},
{
  title: 'Foundation Course on Green Skills and Artificial Intelligence',
  issuer: 'Skills4Future Program',
  platform: 'Ashokrao Mane Group of Institutes',
  category: 'Artificial Intelligence',
  skills: [
    'Artificial Intelligence',
    'Green Skills',
    'Sustainability',
    'Environmental Awareness'
  ],
  issueDate: 'November 2024',
  credentialId: '',
  credentialUrl: '',
  description: 'Successfully completed the Foundation Course on Green Skills and Artificial Intelligence under the Skills4Future Program at Ashokrao Mane Group of Institutes.'
},
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' }

    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side logic',
    skills: [
      { name: 'PHP', mono: 'PHP' },
      { name: 'Laravel', mono: 'La' },
      { name: 'Spring Boot', mono: 'SB' },
    ],
  },
  {
    id: 'infra',
    title: 'Infra & Tools',
    subtitle: 'Shipping & architecture',
    skills: [
      { name: 'Docker', mono: 'Dk' },
      { name: 'Docker Compose', mono: 'Dc' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'Microservices', mono: 'Ms' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Indexing • Normalization',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'MySQL', mono: 'My' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OS', mono: 'Os' },
      { name: 'CN', mono: 'Cn' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'OOPs', mono: 'Oo' },
      { name: 'Collections', mono: 'Co' },
      { name: 'Multithreading', mono: 'Mt' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Learning New Technologies', mono: 'Ln' },
      { name: 'Building Real-World Projects', mono: 'Pr' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {

};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'Schooling',
    period: '2019 - 2020',
    synopsis: 'Completed SSC education at Krishna English Medium School, Wathar, scoring 72%.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'Krishna English Medium School',
        description: 'Completed SSC (10th Standard) at Krishna English Medium School, Wathar, with 72%.',
        tags: ['SSC', '10th Standard', '72%'],
        runtime: 'Wathar',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Junior College',
    period: '2020 - 2022',
    synopsis: 'Completed HSC Science education with 84%.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'HSC Science',
        description: 'Completed 12th Standard in the Science stream with 84%.',
        tags: ['HSC', 'Science', '84%'],
        runtime: '2022',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'B.Tech',
    period: '2022 - 2026',
    synopsis: 'Pursuing a Bachelor of Technology in Computer Science and Engineering.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Computer Science & Engineering',
        description: 'Pursuing B.Tech in Computer Science and Engineering at Ashokrao Mane Group of Institutes.',
        tags: ['B.Tech', 'Computer Science', 'CGPA 7.0'],
        runtime: 'Undergraduate Degree',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Professional Experience',
    period: '2026',
    synopsis: 'Gaining practical software development experience through a six-month internship at Seaquid Technology, Kolhapur.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Software Development Internship',
        description: 'Completed a six-month internship at Seaquid Technology, Kolhapur, working on live projects involving HRMS development, user authentication, forms, dashboard interfaces and database operations.',
        tags: ['Internship', 'PHP', 'Laravel', 'MySQL'],
        runtime: '6 Months',
        palette: amber,
      },
    ],
  },
  {
    number: 5,
    title: 'Projects',
    period: '2026',
    synopsis: 'A collection of practical projects showcasing my experience in full-stack development, database integration and application automation.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Professor Portfolio Website',
        description: 'Developed a responsive portfolio website for a professor with an admin dashboard to manage profile information, education, teaching, research, achievements, certificates and gallery content.',
        tags: ['React', 'PHP', 'MySQL', 'Tailwind CSS'],
        runtime: '2026',
        palette: ocean,
      },
      {
        code: 'S05 E02',
        title: 'Portable HRMS Application',
        description: 'Developing a portable HRMS solution designed to run directly from a USB drive using an automated launcher, portable Laravel environment and database integration without relying on fixed drive paths.',
        tags: ['Laravel', 'PHP', 'MariaDB', 'Batch Scripting', 'WinForms'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S05 E03',
        title: 'Raksha Bandhan Website',
        description: 'Developed a responsive Raksha Bandhan-themed website featuring an attractive user interface, festive design elements and an engaging user experience.',
        tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Web Development'],
        runtime: '2026',
        palette: amber,
      },
      {
        code: 'S05 E04',
        title: 'AI News Automation',
        description: 'Developing an automated news platform with category and region filters, a FastAPI backend, React frontend and automated WhatsApp news delivery.',
        tags: ['Python', 'FastAPI', 'React', 'Gemini API', 'Automation'],
        runtime: '2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 6,
    title: 'Technical Interests',
    period: 'Currently Exploring',
    synopsis: 'Continuously improving my development skills and exploring modern technologies to build practical software solutions.',
    episodes: [
      {
        code: 'S06 E01',
        title: 'Java Full Stack Development',
        description: 'Learning and building applications using Java, Spring Boot, REST APIs, React and MySQL.',
        tags: ['Java', 'Spring Boot', 'React', 'MySQL'],
        runtime: 'Ongoing',
        palette: ocean,
      },
      {
        code: 'S06 E02',
        title: 'Web Development',
        description: 'Exploring responsive frontend development, backend programming, API integration and database-driven applications.',
        tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'React'],
        runtime: 'Ongoing',
        palette: amber,
      },
      {
        code: 'S06 E03',
        title: 'Cloud Computing & System Design',
        description: 'Exploring cloud computing, AWS fundamentals, application architecture and software design concepts.',
        tags: ['Cloud Computing', 'AWS', 'System Design'],
        runtime: 'Learning',
        palette: violet,
      },
    ],
  },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · CSE',
    lines: ['Aditya Engineering College, Surampalem', 'October 2023 – Present'],
    chips: ['CGPA 9.10'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Python, C, C++ · React, Node.js, Express.js', 'PostgreSQL, MongoDB, MySQL · Docker, REST, JWT'],
    chips: ['Java', 'Python', 'React', 'Node.js', 'Docker', 'PostgreSQL'],
  },
  {
    kicker: 'Training',
    title: 'The Training Arc',
    lines: ['One year of intensive Full‑Stack Development training', 'Trainee · Technical Hub Pvt Ltd · May 2025 – June 2026', 'Frontend · Backend · Databases · Deployment'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['PolicyGuard AI — 500+ documents, 92% accuracy', 'Payment Gateway — 1,000+ transactions, 99.8% uptime', 'Multi-Tenant SaaS — 50+ tenants, zero unauthorized access'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Tech Fellow — AlgoUniversity', 'Semi-Finalist — Flipkart GRiD 7.0', 'AIML Branch Topper — 9.24 SGPA'],
  },
  {
    kicker: 'Certified',
    title: '16 Certifications',
    lines: ['AWS · MongoDB · Oracle · GitHub · Pearson', 'NPTEL · Cisco · Udemy'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['System Design · Cloud Computing (AWS) · Machine Learning'],
  },
];

export type ProfileId = 'Pradip' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'skills' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
    {
      id: 'Pradip',
      name: 'Pradip',
      blurb: 'The full series, in order',
      color: '#e5132b',
      order: ['about', 'journey', 'originals', 'skills', 'story'],
    },
    {
      id: 'recruiter',
      name: 'Recruiter',
      blurb: 'Resume & skills first',
      color: '#4cc9ff',
      order: ['story', 'skills', 'originals', 'about', 'journey'],
    },
    {
      id: 'developer',
      name: 'Developer',
      blurb: 'Projects, stack & GitHub first',
      color: '#46e3a8',
      order: ['originals', 'skills', 'journey', 'about', 'story'],
    },
    {
      id: 'creative',
      name: 'Creative',
      blurb: 'The story arc first',
      color: '#ffb547',
      order: ['journey', 'originals', 'about', 'skills', 'story'],
    },
  ];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};

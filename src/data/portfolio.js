const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`

export const profile = {
  firstName: 'Megdad',
  lastName: 'Imed',
  fullName: 'Megdad Imed',
  role: 'Web Developer',
  title: 'Full Stack Developer',
  location: 'Algiers, Algeria',
  tagline: 'Transforms ideas into elegant solutions',
  subtitle: 'Building full-stack applications that connect technology with real impact',
  photo: asset('profile.svg'),
  cv: asset('projects/MEGDAD_Imed_CV.pdf'),
  email: 'megdad.officiel@gmail.com',
  phone: '+213 698 567 597',
  github: 'https://github.com/imed3131',
  linkedin: 'https://www.linkedin.com/in/megdad-imed-11715730a',
  website: import.meta.env.VITE_SITE_URL || '',
}

export const about = {
  eyebrow: 'Get to know',
  title: 'About Me',
  intro:
    "Hello, I'm Megdad Imed — a Computer Science Engineer graduated from the Higher School of Computer Science (ESI), passionate about web development. I thrive at the intersection of backend systems and polished frontend experiences, designing relational databases and integrating secure authentication so every product feels both robust and usable.",
  motivation:
    'My motivation is simple: grow as a professional by shipping end-to-end solutions that matter. From internship work on job-management APIs and AI-driven warehouse optimization to freelance builds with Next.js, NestJS, and Django, I actively seek opportunities to deepen my craft and deliver high-impact software in a collaborative environment.',
  facts: [
    { label: 'Education', value: 'ESI Algiers — Engineering Degree (2021–2026)' },
    { label: 'Location', value: 'Algiers, Algeria' },
    { label: 'Focus', value: 'Full-stack web development' },
    { label: 'Status', value: 'Open to opportunities' },
  ],
}

export const skills = {
  eyebrow: 'What skills I have',
  title: 'My Skills',
  categories: [
    {
      name: 'Languages',
      items: ['JavaScript', 'Python', 'SQL', 'Java'],
    },
    {
      name: 'Frontend',
      items: ['Next.js', 'HTML', 'CSS', 'Tailwind', 'JavaScript'],
    },
    {
      name: 'Backend',
      items: ['FastAPI', 'NestJS', 'Django', 'Flask', 'REST APIs', 'JWT', 'OAuth2', 'Redis', 'Celery'],
    },
    {
      name: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'MariaDB'],
    },
    {
      name: 'DevOps',
      items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'CI/CD', 'Nginx', 'Linux'],
    },
    {
      name: 'Other',
      items: ['Web Scraping', 'BeautifulSoup', 'Selenium', 'Debugging'],
    },
  ],
  spoken: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Intermediate' },
    { name: 'English', level: 'Intermediate' },
  ],
}

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'ai-ml', label: 'AI/ML' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'desktop', label: 'Desktop apps' },
]

export const projects = [
  {
    id: 'vestrend',
    title: 'E-commerce Marketplace (Vestrend)',
    year: '2025',
    categories: ['web'],
    description:
      'Multi-vendor e-commerce marketplace connecting local Algerian merchants with buyers. Full-stack work covering vendor onboarding, product listings, order management, and a recommendation system for relevant products.',
    image: asset('projects/vestrend.png'),
    tags: ['Next.js', 'NestJS', 'Recommendations'],
    link: "https://vestrend.shop",
  },
  {
    id: 'agrinet',
    title: 'AgriNet — Agricultural Marketplace',
    year: '2025',
    categories: ['web'],
    description:
      'Classifieds-style marketplace for agriculture, inspired by Ouedkniss but focused on farms, produce, livestock, and agri equipment. Users browse stores and categories in Arabic and English, publish listings, and boost visibility through an internal paid-ads system for promoted placements.',
    image: asset('projects/agrinet.png'),
    tags: ['Marketplace', 'Classifieds', 'Paid Ads'],
    link: "https://frontend-agrinet.vercel.app/",
  },
  {
    id: 'farm-management',
    title: 'Farm Management — Livestock Tracker',
    year: '2025',
    categories: ['desktop'],
    description:
      'Desktop application for managing farms and tracking the full lifecycle of cattle — from breeding and pregnancy to calving. Includes an automated notification system that alerts farmers ahead of upcoming births so they can prepare in time.',
    image: asset('projects/farm_management.png'),
    tags: ['Desktop', 'Livestock', 'Notifications'],
    link: null,
  },
  {
    id: 'mate-in-one',
    title: 'Mate-in-One Chess Generator (GAN)',
    year: '2024',
    categories: ['ai-ml'],
    description:
      'Deep learning model that generates chess positions with a forced mate in one move. Built with a Generative Adversarial Network (GAN) trained to produce valid, tactically sharp board configurations.',
    image: asset('projects/mate-in-one.png'),
    tags: ['GAN', 'Deep Learning', 'Python'],
    link: null,
  },
  {
    id: 'sonatrach',
    title: 'Reporting System (Sonatrach)',
    year: '2025',
    categories: ['web'],
    description:
      'Real-time automated KPI tracking web system for drilling operations. Structured field-report data, cut manual reporting by 70%, and delivered interactive dashboards for project managers.',
    image: asset('projects/Repporting.png'),
    tags: ['Dashboards', 'KPI', 'Python', 'Web'],
    link: null,
  },

  {
    id: 'maklaepress',
    title: 'Food Ordering App (MaklaEpress)',
    year: '2024',
    categories: ['mobile'],
    description:
      'Full-stack food ordering mobile application for restaurants. Backend with Django & PostgreSQL, Kotlin client, plus secure authentication, order management, and payment workflows.',
    image: asset('projects/maklaepress.jpg'),
    tags: ['Django', 'PostgreSQL', 'Kotlin'],
    link: null,
  },
  {
    id: 'ikhtiar',
    title: 'Bank Comparison Website (Ikhtiar)',
    year: '2023',
    categories: ['web'],
    description:
      'Comparison website for loan and banking offers in Algeria. Backend API for financial data aggregation and a clear UI to help users select optimized loan options.',
    image: asset('projects/ikhtiar.jpg'),
    tags: ['Web', 'API', 'FinTech'],
    link: null,
  },
  {
    id: 'autoview',
    title: 'Auto-View (ThynkTech)',
    year: '2024',
    categories: ['web'],
    description:
      'Backend for a job-management web application. Optimized RESTful APIs for speed and scalability, with JWT and OAuth2 authentication for secure access.',
    image: asset('projects/autoview.png'),
    tags: ['Backend', 'REST', 'JWT', 'OAuth2'],
    link: null,
  },
  {
    id: 'warehouse-ai',
    title: 'Multi-Warehouse Prediction & Optimization',
    year: '2025',
    categories: ['ai-ml'],
    description:
      'Multi-warehouse management system built during the Ourquilane AI internship. Forecasts future demand from historical orders with a hybrid SARIMAX + XGBoost model, then allocates products across warehouses. Optimization methods evaluated: Genetic Algorithm, ILP, random search, exact solver, and greedy heuristic — with ILP selected for production.',
    image: asset('projects/warehouse.svg'),
    tags: ['SARIMAX', 'XGBoost', 'ILP', 'Optimization'],
    link: null,
  },
]

export const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact Me', href: '#contact' },
]

export const experience = [
  {
    period: 'Jul 2024 – Sep 2024',
    role: 'Backend Developer — Intern',
    company: 'ThynkTech, Algiers',
  },
  {
    period: 'Oct 2025 – June 2026',
    role: 'AI Engineer — Intern',
    company: 'Ourquilane, Algiers',
  },
  {
    period: '2025 – Present',
    role: 'Freelance Web Developer',
    company: 'Self-employed, Remote',
  },
]

const projects = [
  {
    id: 'laser-sequencer',
    title: 'Laser Sequencer',
    subtitle: 'Full Stack Developer Intern @ ELI Beamlines',
    description:
      "As an intern abroad in Prague, I implemented a state machine with a web interface at the ELI Beamlines facility—home to some of the most powerful lasers in the world. I used React, Python, and SQL to build a laser sequencer that helps operators monitor and control live laser research experiments. I gained experience with helper libraries, including SQLAlchemy, FastAPI, and asyncio (for asynchronous programming). \n\nThis international experience pushed me to collaborate across cultures and technical disciplines. I worked closely with physicists and engineers from around the world, learning how to adapt quickly, communicate clearly, and contribute effectively in a multilingual, high-complexity research setting. Living and working abroad made me a more adaptable, self-directed, and globally minded developer.",
    image: '/src/images/laserSequencer.jpg',
    links: [
      { href: 'https://www.eli-beams.eu/', label: 'ELI Beamlines' },
    ],
  meta: { year: 'June-September 2025', tech: ['Python', 'React', 'SQL', 'EPIC', 'Async Programming'] },
    cards: [],
  },

  {
    id: 'adl',
    title: 'Analogue Design Lab (ADL)',
    subtitle: 'Business Lead and Founding Member',
    description:
      "(ADL is a student-run club at Cal Poly SLO focused on design competitions and product development.) Responsible for industry outreach and managing media strategy to enhance the club's visibility and engagement. Spearheading the brand kit creation and launching the club’s media presence. Quadrupled club member count and organized a 6 week speaker series with design experts from across North America.",
    image: '/src/images/adl.png',
    links: [
      { href: 'https://www.analogue.design/', label: 'Website' }, { href: 'https://www.instagram.com/analogue.design.lab/', label: 'Insta' }, { href: 'https://linktree.analogue.design/', label: 'LinkedIn' }, { href: '#', label: 'LinkTree' }
    ],
  meta: { year: '2023-Present', tech: ['Outreach','Media','Design'] },
    cards: [],
  },

  {
    id: 'bass',
    title: 'Bass',
    subtitle: 'Self-taught bassist',
    description:
      'A collection of covers, band pages, and other bass-related items.',
    image: '/src/images/bass2.jpg',
    links: [{ href: 'https://www.instagram.com/that_bass_girl_/', label: 'Follow' }],
    // separated into covers and bands for clearer rendering
    covers: [
      { id: 'track-1', title: 'Dean Town', thumbnail: '/src/images/deanTown.png', href: 'https://www.instagram.com/that_bass_girl_/reel/C8iQdlRyuc3/?hl=en' },
      { id: 'track-2', title: 'Used to be In love', thumbnail: '/src/images/usedToBe.png', href: 'https://www.instagram.com/that_bass_girl_/reel/DGdw_rYS-QZ/?hl=en' },
      { id: 'track-3', title: 'Lose My Cool', thumbnail: '/src/images/loseMyCool.png', href: 'https://www.instagram.com/that_bass_girl_/reel/C2wmLaMO5n7/?hl=en' },
      { id: 'track-4', title: 'Boom', thumbnail: '/src/images/boom.png', href: 'https://www.instagram.com/that_bass_girl_/reel/C7VfWneNld7/?hl=en' },
    ],
    photos: [
      '/src/images/bass_1.jpg',
      '/src/images/bass_2.jpg',
      '/src/images/bass_3.jpg',
      '/src/images/bass_4.jpg',
      '/src/images/bass_5.jpg',
      '/src/images/bass_6.jpg',
      '/src/images/bass_7.jpg',
      '/src/images/bass_8.jpg',
      '/src/images/bass_9.jpg',
      '/src/images/bass_10.jpg',
      '/src/images/bass_11.jpg',
    ],
    bands: [
      { id: 'band-1', title: 'Quick Turnover', thumbnail: '/src/images/QT.jpg', href: 'https://www.instagram.com/quick.turnover/?hl=en' },
      { id: 'band-2', title: 'The Airwaves', thumbnail: '/src/images/airwaves.jpg', href: 'https://www.instagram.com/theairwavesband/?hl=en' },
      { id: 'band-3', title: 'Planned Obsolescence', thumbnail: '/src/images/bass.jpg', href: '#' }
    ],
    cards: [],
  meta: { year: '2022-Present', tech: ["@that_bass_girl_ on Insta"] },
  },

  {
    id: 'z2k',
    title: 'Z2K',
    subtitle: 'Full Stack Developer',
    description:
      "I’m building the Z2K Templates Marketplace, a platform for Obsidian users to share and sell customizable templates. I’m developing both the frontend and backend, focusing on a smooth, scalable foundation for future growth.\n\nOn the frontend, I’m working with modern web tech (React + Tailwind) to create a clean, responsive interface. On the backend, I’m using FastAPI, SQLite (via SQLModel), and Firebase Auth to handle data management, authentication, and API design.\n\nThis project blends design, functionality, and infrastructure — a full-stack system built to grow with the Z2K Studios ecosystem.\n\nA note about Z2K Studios: \"Z2K Studios is currently in skunkworks, developing a next-generation system for cognitive extension and digital identity. We’re focused on redefining personal knowledge infrastructure for the age of artificial intelligence.\"",
    image: '',
    links: [{ href: 'https://www.linkedin.com/company/z2k-studios/', label: 'LinkedIn' }, { href: 'https://github.com/z2k-studios', label: 'Repo' }],
  meta: { year: 'September 2025-Present', tech: [] },
    cards: [],
  },

  {
    id: 'sensavvy',
    title: 'SenSavvy',
    subtitle: 'Founder',
    description:
      'A startup targetting the technological literacy gap between generations. We empower seniors to become technologically savvy. New developments and updated materials coming soon.',
    image: '/src/images/senSavvyLogo.png',
    links: [{ href: 'https://sensavvy.org/', label: 'Website' }, { href: 'https://instagram.com/sen.savvy/', label: 'Insta' }],
    cards: [
      { id: 'ss-1', title: 'Elevator Pitch', thumbnail: '/src/images/pitch.png', href: 'https://www.loom.com/share/cf69036eb3b346f78be8838875244143?sid=b7e06f98-a772-4d68-b5c1-5c6defc31c84' },
      { id: 'ss-2', title: 'Miro Board', thumbnail: '/src/images/miro.png', href: 'https://miro.com/app/board/uXjVLRNimtc=/' },
    ],
  meta: { year: '2024-Present', tech: ['[In progress]'] },
  },

  {
    id: 'art-portfolio',
    title: 'Art portfolio',
    subtitle: 'A selection of my art over the years',
    description: 'A curated gallery of visual work and experiments. Click on any image to view full size.',
    image: '',
    links: [],
  meta: { year: '2022-Present', tech: [] },
    cards: [
      { id: 'art-1', title: 'Visual Autobiography', thumbnail: '/src/images/visual_autobiography.png', full: '/src/images/visual_autobiography.png', statement: 'An exploration of texture and light.' , href: '#'},
      { id: 'art-2', title: 'Self Portrait', thumbnail: '/src/images/selfPortrait.jpeg', full: '/src/images/selfPortrait.jpeg', statement: 'Thought I\'d play around with colored pencils.', href: '#'},
    { id: 'art-3', title: 'Sister Portrait', thumbnail: '/src/images/sisterPortrait.png', full: '/src/images/sisterPortrait.png', statement: 'Inspired by "one-line" art.', href: '#'},
    { id: 'art-4', title: 'My Existence', thumbnail: '/src/images/myExistence.jpeg', full: '/src/images/myExistence.jpeg', statement: 'A study in muted palettes and composition.', statementLink: { href: 'https://docs.google.com/document/d/1DSlzIh0-JLh2t6RNipRRlDYiaGWAEYdMfIO1McD45HA/edit?usp=sharing', text: 'View the full artist statement here.' }, href: '#'},
    { id: 'art-5', title: 'Painted Flower', thumbnail: '/src/images/finished_flower.png', full: '/src/images/finished_flower.png', statement: 'Painted in Photoshop.', href: '#'},
      { id: 'art-6', title: 'Fish', thumbnail: '/src/images/Fish.png', full: '/src/images/Fish.png', statement: 'Just a little experimenting with shapes.', href: '#'},
    ],
  },
];

export default projects;

import bassPhotoCollections from './bassPhotoCollections.js'

const bassEntry = {
  id: 'bass',
  title: 'Bass',
  subtitle: 'Self-taught bassist',
  description: 'A collection of covers, band pages, and other bass-related items.',
  image: '/images/bassMain.jpg',
  links: [{ href: 'https://www.instagram.com/bassist.in.boots/', label: 'Follow', target: '_blank' }],
  covers: [
    { id: 'track-1', title: 'Dean Town', thumbnail: '/images/deanTown.png', href: 'https://www.instagram.com/bassist.in.boots/reel/C8iQdlRyuc3/?hl=en' },
    { id: 'track-2', title: 'Used to be In love', thumbnail: '/images/usedToBe.png', href: 'https://www.instagram.com/bassist.in.boots/reel/DGdw_rYS-QZ/?hl=en' },
    { id: 'track-3', title: 'Lose My Cool', thumbnail: '/images/loseMyCool.png', href: 'https://www.instagram.com/bassist.in.boots/reel/C2wmLaMO5n7/?hl=en' },
  ],
  studioSessions: [
    { id: 'studio-1', title: 'The Airwaves – Studio Session', youtubeId: 'gu6NFmuMKVg' },
  ],
  photoCollections: bassPhotoCollections,
  bands: [
    { id: 'band-1', title: 'Inkfish', thumbnail: '/images/inkfish.jpg', href: 'https://www.instagram.com/inkfish.band/' },
    { id: 'band-2', title: 'The Airwaves', thumbnail: '/images/airwaves.jpg', href: 'https://www.instagram.com/theairwavesband/?hl=en' },
    { id: 'band-3', title: 'Quick Turnover', thumbnail: '/images/QT.jpg', href: 'https://www.instagram.com/quick.turnover/?hl=en' },
    { id: 'band-4', title: 'bygone', thumbnail: '/images/bygone.jpeg', href: 'https://www.instagram.com/bygonetheband/' },
    { id: 'band-5', title: 'The Essentialists', thumbnail: '/images/theEssentialists.JPG', href: '#' },
    { id: 'band-solo', title: 'bassist.in.boots', thumbnail: '/images/soloInsta.jpg', href: 'https://www.instagram.com/bassist.in.boots/' },
  ],
  cards: [],
  meta: { year: '2022-Present', tech: ['Active member of 5 bands'] },
};

const work = [
  bassEntry,
  {
    id: 'z2k',
    title: 'Z2K',
    subtitle: 'Full Stack Developer',
    description:
      "I'm building the Z2K Templates Marketplace, a platform for Obsidian users to share and sell customizable templates. I'm developing both the frontend and backend, focusing on a smooth, scalable foundation for future growth.\n\nOn the frontend, I'm working with modern web tech (React + Tailwind) to create a clean, responsive interface. On the backend, I'm using FastAPI, SQLite (via SQLModel), and Firebase Auth to handle data management, authentication, and API design.\n\nA note about Z2K Studios: \"Z2K Studios is currently in skunkworks, developing a next-generation system for cognitive extension and digital identity. We're focused on redefining personal knowledge infrastructure for the age of artificial intelligence.\"",
    image: '',
    links: [{ href: 'https://www.linkedin.com/company/z2k-studios/', label: 'LinkedIn' }, { href: 'https://github.com/z2k-studios', label: 'Repo' }],
    meta: { year: 'September 2025–Present', tech: ['React', 'Tailwind', 'FastAPI', 'SQLite', 'Firebase Auth'] },
    cards: [],
  },

  {
    id: 'laser-sequencer',
    title: 'Laser Sequencer',
    subtitle: 'Full Stack Developer Intern @ ELI Beamlines',
    description:
      "As an intern abroad in Prague, I implemented a state machine with a web interface at the ELI Beamlines facility—home to some of the most powerful lasers in the world. I used React, Python, and SQL to build a laser sequencer that helps operators monitor and control live laser research experiments. I gained experience with helper libraries, including SQLAlchemy, FastAPI, and asyncio (for asynchronous programming). \n\nThis international experience pushed me to collaborate across cultures and technical disciplines. I worked closely with physicists and engineers from around the world, learning how to adapt quickly, communicate clearly, and contribute effectively in a multilingual, high-complexity research setting. Living and working abroad made me a more adaptable, self-directed, and globally minded developer.",
    image: '/images/laserSequencer.jpg',
    links: [
      { href: 'https://www.eli-beams.eu/', label: 'ELI Beamlines' },
    ],
    meta: { year: 'June–September 2025', tech: ['Python', 'React', 'SQL', 'EPICS', 'Async Programming'] },
    cards: [],
  },

  {
    id: 'python-teaching',
    title: 'Python Teaching',
    subtitle: 'Instructor',
    description: 'I have experience teaching coding to students of all ages. I was a teaching assistant for Oregon Episcopal School\'s Intro to Python course, as well as a virtual instructor for Coding with Kids for two years. I also wrote my own intro to Python course that I have successfully used to teach two students.',
    image: '',
    links: [{ href: 'https://drive.google.com/drive/folders/1Rp0z_Okz5qt6nLii7ml5Sb46rvYgDPHU?usp=drive_link', label: "Intro to Python Course"}],
    meta: { year: '2020-Present', tech: ['Python', 'Scratch'] },
    cards: [],
  },
];

export default work;

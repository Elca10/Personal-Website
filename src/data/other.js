const other = [
  {
    id: 'achievements',
    title: 'Achievements',
    description: 'Notable awards, recognitions, and milestones.',
    icon: '',
    cards: [
      {
        id: 'ach-1',
        title: 'The American Rocketry Challenge National Champion Team Award',
        description:
          'Awarded in 2021 (rocket had my altitude projection algorithm on it). The OES Aerospace Team was a national finalist again in 2022, under my leadership.',
        link: [
          { text: 'Space.com article', href: 'https://www.space.com/american-rocketry-challenge-2021-championship' },
          { text: 'Learn more here', href: 'https://rocketrychallenge.org/news/oregon-students-crowned-national-champions-in-worlds-largest-rocket-contest/' },
        ],
      },
      {
        id: 'ach-2',
        title: 'OES Mathematics Department Award',
        description: 'Awarded in 2023.',
      },
      {
        id: 'ach-3',
        title: 'National Spanish Exam Gold Medal',
        description: 'Awarded in 2022.',
      },
      {
        id: 'ach-4',
        title: 'Environmental Research OES Science Fair Award',
        description:
          'Awarded for my project "Using Robotics and ML to Record Invasive Ivy Data" (ivy identifying algorithm and mobile robot) in 2022.',
      },
      {
        id: 'ach-5',
        title: '2nd Place in Computer Science and Robotics Research',
        description: 'Awarded for "Using Robotics and ML ..." in 2022.',
      },
      {
        id: 'ach-6',
        title: '2nd Place in Electrical and Mechanical Engineering Research',
        description:
          'Awarded for my project "Processing iPhone Accelerometer Signals to Decipher Typing" (software algorithm) in 2021.',
      },
      {
        id: 'ach-7',
        title: 'Fresh Voices Publication',
        description:
          'My essay, "Low Frequencies, High Impact," was published in the 2025–26 edition of "Fresh Voices: Composition at Cal Poly" (a required textbook for all Cal Poly freshmen).',
        link: { text: 'View the essay here', href: 'https://docs.google.com/document/d/1sqZrtKNbWxxAKe8PTaxgZm25neZSPhC4vewFuzMvIbY/edit?usp=sharing' },
      },
      {
        id: 'ach-8',
        title: 'Czech Article',
        description: 'Interviewed for VědaVýzkum.cz.',
        link: { text: 'View the published article here', href: 'https://vedavyzkum.cz/analyzy/analyzy/ceska-v-americe-americanka-v-cesku-co-muze-cesko-vedcum-a-vedkynim-z-usa-nabidnout' },
      },
    ],
  },

  {
    id: 'coursework',
    title: 'Coursework',
    description: 'Selected classes and projects from coursework.',
    icon: '',
    cards: [
      { id: 'cs-1', title: 'Data Structures', description: 'Introduction to data structures and analysis of algorithms. Abstract data types, specification and implementation of advanced data structures, theoretical and empirical analysis of recursive and iterative algorithms, software performance evaluation and testing techniques.' },
      { id: 'cs-2', title: 'Intro to Computer Organization', description: 'Introduction to computer systems: simple instruction set architecture, the hardware needed to implement that architecture, and machine/assembly language programming.' },
      { id: 'cs-3', title: 'Proj-Based OO Prog and Design', description: 'Object-oriented programming and design with project-based applications. Covers class design, interfaces, inheritance, generics, exceptions, streams, and testing.' },
      { id: 'cs-4', title: 'Discrete Structures', description: 'Discrete Structures (CSC 248): logic, sets, relations, proof techniques, functions, counting methods, basic graph and tree theory, algorithmic applications of discrete math.' },
      { id: 'cs-5', title: 'Systems Programming', description: 'Systems Programming (CSC 357): use of the C programming language from a systems perspective, Unix commands and tools, shell scripting, file systems, editors, and system interfaces.' },
      { id: 'cs-6', title: 'Design & Analysis of Algorithms', description: 'Design & Analysis of Algorithms (often CSC 349): study of algorithmic paradigms (divide & conquer, greedy, dynamic programming), complexity theory, NP-completeness, and advanced topics in pattern matching, file compression, cryptology, exhaustive search, etc.' },
      { id: 'cs-7', title: 'Intro to Database Systems', description: 'Introduction to Database Systems (CSC 365): fundamentals of database management systems, relational model, entity-relationship modeling, SQL, query processing, and database design and application development.' },
      { id: 'cs-8', title: 'Software Engineering I', description: 'Software Engineering I: foundations of software engineering principles, covering requirements, design, testing, software lifecycle, documentation, and team processes.' },
      { id: 'cs-9', title: 'Programming Languages', description: 'Programming Languages (CSC 430): study and comparison of programming paradigms, syntax, semantics, type systems, language features, and design trade-offs.' },
      { id: 'math-1', title: 'Calculus III', description: 'Calculus III (MATH 143): parametric equations, polar coordinates, vector algebra, multivariable differentiation and integration, infinite series, power series, and Taylor series.' },
      { id: 'math-2', title: 'Linear Algebra I', description: 'Linear Algebra I (MATH 206): systems of linear equations, vector spaces, matrix operations, determinants, eigenvalues and eigenvectors, linear transformations.' },
      { id: 'math-3', title: 'Stat Methods for Engineers', description: 'Statistical Methods for Engineers (STAT 312): descriptive and graphical methods; discrete and continuous probability distributions; confidence intervals; hypothesis testing; single-factor ANOVA; regression; introduction to quality control; use of statistical software.' }
    ],
  },
  {
    id: 'identity',
    title: 'Identity',
    description: 'A small portfolio of identity work.',
    icon: '',
    cards: [
      // Three small vertical series cards (image on top, description below) to be shown in one row
      { id: 'id-series-1', title: 'Grow Boldly', thumbnail: '/src/images/growBoldly.png', full: '/src/images/profile.jpg', statement: 'My 2023 commitment', layout: 'vertical' },
      { id: 'id-series-2', title: 'Grow Deeper', thumbnail: '/src/images/growDeeper.png', full: '/src/images/profile.jpg', statement: 'My 2024 commitment', layout: 'vertical' },
      { id: 'id-series-3', title: 'Grow Stronger', thumbnail: '/src/images/growStronger.png', full: '/src/images/profile.jpg', statement: 'My 2025 commitment', layout: 'vertical' },
      // One full-width horizontal card (image left, text right)
      { id: 'id-feature-1', title: 'Personal Symbol', thumbnail: '/src/images/personalSymbol.png', full: '/src/images/profile.jpg', statement: 'The symbol’s red, black, and white palette reflects my love for simplicity and clean design. Its form resembles a confident figure—arms on hips, heart at center—anchored by a red line that represents both my core values and my own physical backbone. The triangles embody femininity and intellect, while their opposing directions suggest growth and movement. Altogether, it’s a minimal yet deeply personal representation of who I am at my core.', layout: 'horizontal' },
    ],
  },
  {
    id: 'travel',
    title: 'Travel',
    description: 'Photography and trip notes.',
    icon: '',
    cards: [
      { id: 'tr-1', title: 'Trip 1', images: ['/src/images/profile.jpg','/src/images/profile.jpg'] , statement: 'A week in the mountains.'},
      { id: 'tr-2', title: 'Trip 2', images: ['/src/images/profile.jpg','/src/images/profile.jpg'], statement: 'Coastal sketches.'},
    ],
  },
]

export default other

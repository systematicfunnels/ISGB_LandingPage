const asset = (path: string) => encodeURI(path)
const campusAsset = (file: string) => asset(`/IGSB_ASSETS/${file}`)
const companyLogoAsset = (file: string) => asset(`/IGSB_ASSETS/company-logos/${file}`)
const recruiterLogoAsset = (file: string) => companyLogoAsset(`recruiter-logos/${file}`)
const storyAsset = (file: string) => asset(`/IGSB_ASSETS/student-success-stories/${file}`)

export const SITE_CONFIG = {
  name: 'IGSB Pune',
  fullName: 'Indira Global School of Business, Pune',
  description:
    'Accelerate your career. Maximize your potential with a placement-oriented MBA from Indira Global School of Business, Pune.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiraigsb.edu.in',
  ogImage: campusAsset('campus-hero-background.png'),
  logo: companyLogoAsset('igsb-logo.png'),
  favicon: companyLogoAsset('indira-logo.png'),
  links: {
    website: 'https://www.indiraigsb.edu.in',
    admissions: 'https://www.indiraigsb.edu.in',
  },
  brochurePath: '/igsb-brochure.pdf',
}

export const CONTACT_INFO = {
  admissions: {
    phone: '+91 9657856103',
    phoneHref: 'tel:+919657856103',
    altPhone: '02114 691417',
    altPhoneHref: 'tel:02114691417',
    email: 'mba.admissions@indiragsb.edu.in',
    emailHref: 'mailto:mba.admissions@indiragsb.edu.in',
  },
  admin: {
    phone: '+91 9657856103',
    phoneHref: 'tel:+919657856103',
    email: 'admin@indiraigsb.edu.in',
    emailHref: 'mailto:admin@indiraigsb.edu.in',
  },
  examCommittee: {
    email: 'exam.committee@indiraigsb.edu.in',
    emailHref: 'mailto:exam.committee@indiraigsb.edu.in',
  },
}

export const HERO_COPY = {
  title: 'Accelerate Your Career. Maximize Your Potential.',
  subtitle: 'Build a Strong Foundation for Business Leadership',
  society: "Shree Chanakya Education Society’s",
  campus: 'Indira Global School of Business, Pune',
  motto: 'Empowering Minds to Elevate Lives',
  approvals: 'AICTE Approved | Affiliated to SPPU, Pune DTE Code – 06976',
  intro:
    'At Indira Global School of Business, Pune, we prepare MBA professionals for successful careers through industry-oriented learning, strategic thinking, and strong placement opportunities.',
  ctaButtons: [
    { label: 'Apply Now', href: '#apply' },
    { label: 'Download Brochure', href: '/igsb-brochure.pdf' },
    { label: 'Speak to an Admission Counselor', href: 'tel:+919657856103' },
  ],
  formLine: 'Fill the form to receive programme details instantly',
}

export const HERO_STATS = [
  { value: '16.5 LPA', label: 'Highest Package' },
  { value: '7.75 LPA', label: 'Average Package' },
  { value: '650+', label: 'Recruiting Partners' },
  { value: '100%', label: 'Placement Assistance' },
]

export const HERO_BADGES = [
  'AICTE Approved',
  'Affiliated to SPPU, Pune',
  'DTE Code – 06976',
]

export const PROGRAMME_DETAILS = {
  duration: '2 Years',
  format: 'Full-Time',
  campus: 'Indira Global School of Business, Pune',
  specializations: [
    'Marketing Management',
    'Financial Management',
    'Human Resource Management',
    'Operations and Supply Chain Management',
  ],
}

export const WHY_CHOOSE_FEATURES = [
  'Industry-Aligned MBA Curriculum',
  'Live Projects & Internship Opportunities',
  'Corporate Exposure & Industry Interaction',
  'Leadership & Personality Development',
  'Placement-Focused Training from Day One',
  'Experiential & Research-Based Learning',
]

export const WHAT_SETS_YOU_APART = [
  'Practical Business Exposure',
  'Industry-Relevant Skills',
  'Strategic Decision-Making Ability',
  'Leadership & Managerial Skills',
  'Career-Ready Professional Approach',
]

export const LEARNING_EXPERIENCES = [
  'Business Case Studies & Simulations',
  'Industry Visits & Expert Sessions',
  'Skill Development Workshops',
  'Project-Based Learning',
  'Corporate Mentoring Sessions',
]

export const PLACEMENT_SUPPORT = [
  'Mock Interviews & Aptitude Training',
  'Resume Building & Profile Development',
  'Internship Opportunities',
  'Corporate Readiness Programmes',
  'Pre-Placement Training & Mentorship',
]

export const RECRUITER_GROUPS = [
  [
    'PwC',
    'EY',
    'BNY Mellon',
    'Mastercard',
    'NielsenIQ',
    'Mondelez International',
    'Nestlé',
    'KPMG',
    'Mercedes-Benz',
    'KPIT',
  ],
  [
    'Infosys',
    'Flipkart',
    'Federal Bank',
    'BlackRock',
    'UBS',
    'FINQAT',
    'FIS',
    'IDFC First Bank',
    'Oriental Insurance',
    'HDFC Life',
  ],
  [
    'Bajaj Allianz',
    'ANZ',
    'Deloitte',
    'Juspay',
    'Philips',
    'Tata Technologies',
    'Whirlpool',
    'Namma Yatri',
    'Hindustan Unilever Limited',
    'Volkswagen',
  ],
  [
    'Atlas Copco',
    'ITC Limited',
    'Berkadia',
    'Landmark Group',
    'Berger Paints',
    "Haldiram's",
    'Vanderlande',
    'Godrej Properties',
    'Xanadu Realty',
    'MRF',
  ],
]

export const TOP_CAREER_ROLES = [
  'Marketing',
  'Finance',
  'HR',
  'Operations',
  'Supply Chain',
  'Consulting',
  'Management',
]

export const CAMPUS_HIGHLIGHTS = [
  {
    title: 'Your MBA Journey Towards Career Success Starts Here',
    description:
      'An MBA at IGSB is designed for students seeking professional growth, leadership opportunities, and long-term success in the corporate world.',
  },
  {
    title: 'A Legacy of Academic Excellence',
    description:
      'Backed by Shree Chanakya Education Society, IGSB continues a legacy of 30+ years in quality education, innovation, and industry-oriented academic excellence. Students benefit from an environment focused on academic excellence, industry exposure, and holistic development.',
  },
]

export const APPROVAL_LOGOS = [
  {
    name: 'IGSB',
    src: companyLogoAsset('igsb-logo.png'),
  },
  {
    name: 'AICTE',
    src: companyLogoAsset('aicte-logo.png'),
  },
  {
    name: 'SPPU',
    src: companyLogoAsset('sppu-logo.png'),
  },
]

export const RECRUITER_LOGOS = [
  {
    name: 'PwC',
    src: recruiterLogoAsset('pwc.png'),
  },
  {
    name: 'EY',
    src: recruiterLogoAsset('ey.png'),
  },
  {
    name: 'BNY Mellon',
    src: recruiterLogoAsset('bny-mellon.png'),
  },
  {
    name: 'KPMG',
    src: recruiterLogoAsset('kpmg.png'),
  },
  {
    name: 'Mastercard',
    src: recruiterLogoAsset('mastercard.png'),
  },
  {
    name: 'Mercedes-Benz',
    src: recruiterLogoAsset('mercedes-benz.png'),
  },
  {
    name: 'NielsenIQ',
    src: recruiterLogoAsset('nielseniq.webp'),
  },
  {
    name: 'BlackRock',
    src: recruiterLogoAsset('blackrock.png'),
  },
  {
    name: 'Flipkart',
    src: recruiterLogoAsset('flipkart.png'),
  },
  {
    name: 'Infosys',
    src: recruiterLogoAsset('infosys.png'),
  },
  {
    name: 'Juspay',
    src: recruiterLogoAsset('juspay.png'),
  },
  {
    name: 'Tata Technologies',
    src: recruiterLogoAsset('tata-technologies.png'),
  },
  {
    name: 'Deloitte',
    src: recruiterLogoAsset('deloitte.png'),
  },
  {
    name: 'ANZ',
    src: recruiterLogoAsset('anz.png'),
  },
  {
    name: 'Atlas Copco',
    src: recruiterLogoAsset('atlas-copco.png'),
  },
  {
    name: 'Berkadia',
    src: recruiterLogoAsset('berkadia.png'),
  },
  {
    name: 'Bajaj Allianz',
    src: recruiterLogoAsset('bajaj-allianz.png'),
  },
  {
    name: 'Berger Paints',
    src: recruiterLogoAsset('berger-paints.png'),
  },
  {
    name: 'FIS',
    src: recruiterLogoAsset('fis.png'),
  },
  {
    name: 'Federal Bank',
    src: recruiterLogoAsset('federal-bank.png'),
  },
  {
    name: 'Fincart',
    src: recruiterLogoAsset('fincart.png'),
  },
  {
    name: 'HDFC Life',
    src: recruiterLogoAsset('hdfc-life.png'),
  },
  {
    name: 'Hindustan Unilever',
    src: recruiterLogoAsset('hindustan-unilever.png'),
  },
  {
    name: 'IDFC First Bank',
    src: recruiterLogoAsset('idfc-first-bank.png'),
  },
  {
    name: 'ITC Limited',
    src: recruiterLogoAsset('itc.png'),
  },
  {
    name: 'KPIT',
    src: recruiterLogoAsset('kpit.png'),
  },
  {
    name: 'Landmark Group',
    src: recruiterLogoAsset('landmark-group.png'),
  },
  {
    name: 'Mondelez International',
    src: recruiterLogoAsset('mondelez.png'),
  },
  {
    name: 'Nestle',
    src: recruiterLogoAsset('nestle.png'),
  },
  {
    name: 'Oriental Insurance',
    src: recruiterLogoAsset('oriental-insurance.png'),
  },
  {
    name: 'Philips',
    src: recruiterLogoAsset('philips.png'),
  },
  {
    name: 'UBS',
    src: recruiterLogoAsset('ubs.png'),
  },
  {
    name: 'Vanderlande',
    src: recruiterLogoAsset('vanderlande.png'),
  },
  {
    name: 'Volkswagen',
    src: recruiterLogoAsset('volkswagen.png'),
  },
  {
    name: 'Whirlpool',
    src: recruiterLogoAsset('whirlpool.png'),
  },
  {
    name: 'Godrej Properties',
    src: recruiterLogoAsset('godrej-properties.png'),
  },
  {
    name: 'Haldiram\'s',
    src: recruiterLogoAsset('haldirams.png'),
  },
  {
    name: 'MRF',
    src: recruiterLogoAsset('mrf.png'),
  },
  {
    name: 'Namma Yatri',
    src: recruiterLogoAsset('namma-yatri.png'),
  },
  {
    name: 'Xanadu Realty',
    src: recruiterLogoAsset('xanadu-realty.png'),
  },
]

export const TESTIMONIALS = [
  {
    name: 'Prachi Navghare',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Broadened her knowledge across analytics, finance, operations, and HR.',
    quote:
      'My experience at IGSB has been exceptional. The academic curriculum, guest lectures, and workshops across business analytics, finance, operations, and HR broadened my knowledge and shaped my professional journey.',
    image: storyAsset('prachi-navghare.png'),
  },
  {
    name: 'Priyanka Koniti',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Secured her dream role as a Branch Manager at Home First Finance Company.',
    quote:
      'I am very thankful to IGSB for helping me build the skills needed in the corporate world and guiding me toward my dream job.',
    image: storyAsset('priyanka-koniti.png'),
  },
  {
    name: 'Nikita Dalvi',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Strengthened critical thinking and adaptability through a rigorous MBA journey.',
    quote:
      'Pursuing my MBA at IGSB was a transformative journey. A collaborative environment and rigorous curriculum challenged me to think critically and adapt quickly.',
    image: storyAsset('nikita-dalvi.png'),
  },
  {
    name: 'Nikhil Rokade',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Experienced strong academic and personal development in a supportive campus environment.',
    quote:
      'My time at IGSB has been transformative. From the moment I stepped onto campus, I felt welcomed by peers and faculty in an environment that supported both academic growth and personal development.',
    image: storyAsset('nikhil-rokade.png'),
  },
  {
    name: 'Suruchi Vishnu',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Received a pre-placement offer at BNY after internship.',
    quote:
      'My time at IGSB was a game-changer. The faculty were supportive, the hands-on experience was invaluable, and I received a pre-placement offer at BNY after my internship.',
    image: storyAsset('suruchi-vishnu.png'),
  },
]

export const CAMPUS_IMAGES = {
  campusFacade: campusAsset('igsb-campus-facade.png'),
  campusHeroBg: campusAsset('campus-hero-background.png'),
  boyStudentCutout: campusAsset('boy-student-cutout.png'),
  maleStudentCutout: campusAsset('male-student-cutout.png'),
  femaleStudentPortrait: campusAsset('female-student-portrait.png'),
  mbaStudentCutout: campusAsset('mba-student-cutout.png'),
  laptopCollaborationSession: campusAsset('laptop-collaboration-session.jpg'),
  libraryResearchScene: campusAsset('library-research-scene.jpg'),
  computerLabSession: campusAsset('computer-lab-session.jpg'),
  hallwayTeamWalk: campusAsset('hallway-team-walk.jpg'),
  labSessionGroup: campusAsset('mba-lab-session-group.jpg'),
  outdoorLeadershipDiscussion: campusAsset('outdoor-leadership-discussion.jpg'),
  placementReadyGroup: campusAsset('placement-ready-group.jpg'),
  groupPortrait: campusAsset('mba-student-group-portrait.jpg'),
}

export const PROGRAMME_CARDS = [
  {
    title: PROGRAMME_DETAILS.specializations[0],
    description:
      'Build expertise in brand strategy, growth marketing, market research, and digital communication.',
    tag: 'Full Time',
    duration: '2 Years',
    credits: '16 Credits',
    image: CAMPUS_IMAGES.laptopCollaborationSession,
  },
  {
    title: PROGRAMME_DETAILS.specializations[1],
    description:
      'Develop fluency in corporate finance, analytics, investment thinking, and financial decision-making.',
    tag: 'Research',
    duration: '2 Years',
    credits: '16 Credits',
    image: CAMPUS_IMAGES.libraryResearchScene,
  },
  {
    title: PROGRAMME_DETAILS.specializations[2],
    description:
      'Learn talent acquisition, people strategy, HR analytics, performance systems, and culture building.',
    tag: 'Full Time',
    duration: '2 Years',
    credits: '16 Credits',
    image: CAMPUS_IMAGES.computerLabSession,
    highlight: true,
  },
  {
    title: PROGRAMME_DETAILS.specializations[3],
    description:
      'Prepare for supply chains, process planning, logistics coordination, and operational excellence.',
    tag: 'Part Time',
    duration: '2 Years',
    credits: '16 Credits',
    image: CAMPUS_IMAGES.labSessionGroup,
  },
]

export const WHAT_SETS_YOU_APART_DATA = [
  {
    title: WHAT_SETS_YOU_APART[0],
    description: 'Direct engagement with business ecosystems through live projects and industry interactions.',
    image: CAMPUS_IMAGES.laptopCollaborationSession,
    number: '02',
  },
  {
    title: WHAT_SETS_YOU_APART[1],
    description: 'Mastering the tools and frameworks that modern recruiters look for in MBA graduates.',
    image: CAMPUS_IMAGES.computerLabSession,
    number: '06',
  },
  {
    title: WHAT_SETS_YOU_APART[2],
    description: 'Developing the analytical mindset to solve complex business problems with clarity.',
    image: CAMPUS_IMAGES.libraryResearchScene,
    number: '10',
    active: true,
  },
  {
    title: WHAT_SETS_YOU_APART[3],
    description: 'Nurturing the ability to lead teams, drive results, and influence organizational culture.',
    image: CAMPUS_IMAGES.outdoorLeadershipDiscussion,
    number: '15',
  },
  {
    title: WHAT_SETS_YOU_APART[4],
    description: 'Polishing professional presence and communication for high-impact corporate roles.',
    image: CAMPUS_IMAGES.placementReadyGroup,
    number: '18',
  },
]

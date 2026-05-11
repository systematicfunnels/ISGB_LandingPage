const asset = (path: string) => encodeURI(path)

export const SITE_CONFIG = {
  name: 'IGSB Pune',
  fullName: 'Indira Global School of Business, Pune',
  description:
    'Accelerate your career. Maximize your potential with a placement-oriented MBA from Indira Global School of Business, Pune.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.indiraigsb.edu.in',
  ogImage: asset('/IGSB_ASSETS/Campus Image .png'),
  logo: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/IGSB logo.png'),
  favicon: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Indira Logo .png'),
  links: {
    website: 'https://www.indiraigsb.edu.in',
    admissions: 'https://www.indiraigsb.edu.in',
  },
  brochurePath: '/igsb-mba-brochure.html',
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
    email: 'exam.committee@indiragsb.edu.in',
    emailHref: 'mailto:exam.committee@indiragsb.edu.in',
  },
}

export const HERO_COPY = {
  title: 'Accelerate Your Career. Maximize Your Potential.',
  subtitle: 'Build a Strong Foundation for Business Leadership',
  society: "Shree Chanakya Education Society's",
  campus: 'Indira Global School of Business, Pune',
  motto: 'Empowering Minds to Elevate Lives',
  approvals: 'AICTE Approved | Affiliated to SPPU, Pune | DTE Code - 06976',
  intro:
    'At Indira Global School of Business, Pune, we prepare MBA professionals for successful careers through industry-oriented learning, strategic thinking, and strong placement opportunities.',
  formLine: 'Prepare your enquiry, download the brochure, or connect with admissions.',
}

export const HERO_STATS = [
  { value: '16.5 LPA', label: 'Highest Package' },
  { value: '7.75 LPA', label: 'Average Package' },
  { value: '650+', label: 'Recruiting Partners' },
]

export const HERO_BADGES = [
  'AICTE Approved',
  'Affiliated to SPPU, Pune',
  'DTE Code - 06976',
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
    'Nestle',
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
    title: '30+ Years of Quality Education',
    description:
      'Backed by Shree Chanakya Education Society, IGSB draws on more than three decades of academic development, innovation, and industry-oriented learning.',
  },
  {
    title: 'Students benefit from focused development',
    description:
      'Students benefit from an environment focused on academic excellence, industry exposure, and holistic development.',
  },
]

export const APPROVAL_LOGOS = [
  {
    name: 'IGSB',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/IGSB logo.png'),
  },
  {
    name: 'AICTE',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/AICTE-Logo-Vector.svg-.png'),
  },
  {
    name: 'SPPU',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Savitribai_Phule_Pune_University_Logo.png'),
  },
]

export const RECRUITER_LOGOS = [
  {
    name: 'PwC',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/PwC_Company_Logo.svg.png'),
  },
  {
    name: 'EY',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/ey-logo-png-transparent.png'),
  },
  {
    name: 'BNY Mellon',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/BNY MELLON.png'),
  },
  {
    name: 'KPMG',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/KPMG_blue_logo.svg.png'),
  },
  {
    name: 'Mastercard',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Mastercard-logo.svg.png'),
  },
  {
    name: 'Mercedes-Benz',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Mercedes-Benz_.png'),
  },
  {
    name: 'NielsenIQ',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/NielsenIQ Logo.webp'),
  },
  {
    name: 'BlackRock',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/BlackRock-logo.png'),
  },
  {
    name: 'Flipkart',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Flipkart-logo.png'),
  },
  {
    name: 'Infosys',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Infosys_logo.png'),
  },
  {
    name: 'Juspay',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/JUSPAY logo.png'),
  },
  {
    name: 'Tata Technologies',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Tata_Technologies_logo.svg.png'),
  },
  {
    name: 'Deloitte',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/DeloitteNewLogo.png'),
  },
  {
    name: 'ANZ',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/ANZ-Logo.png'),
  },
  {
    name: 'Atlas Copco',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Atlas-Copco-Logo.svg.png'),
  },
  {
    name: 'Berkadia',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/BERKADIA LOGO.png'),
  },
  {
    name: 'Bajaj Allianz',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Bajaj_Allianz_Insurance.svg.png'),
  },
  {
    name: 'Berger Paints',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Berger Logo.png'),
  },
  {
    name: 'FIS',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/FIS-Logo.png'),
  },
  {
    name: 'Federal Bank',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Federal_bank_India..png'),
  },
  {
    name: 'FINQAT',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/FINCART logo.png'),
  },
  {
    name: 'HDFC Life',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/HDFC-Life-Logo.png'),
  },
  {
    name: 'Hindustan Unilever',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Hindustan-Unilever-Limited-logo.png'),
  },
  {
    name: 'IDFC First Bank',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Logo_of_IDFC_First_Bank.svg.png'),
  },
  {
    name: 'ITC Limited',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/ITC_Limited_Logo.svg.png'),
  },
  {
    name: 'KPIT',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/KPIT logo.png'),
  },
  {
    name: 'Landmark Group',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Landmark Group Logo.png'),
  },
  {
    name: 'Mondelez International',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Mondelez_international.png'),
  },
  {
    name: 'Nestlé',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/png-transparent-nestle-logo-.png'),
  },
  {
    name: 'Oriental Insurance',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/The_Oriental_Insurance_Company_Logo.svg.png'),
  },
  {
    name: 'Philips',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/Philips logo.png'),
  },
  {
    name: 'UBS',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/UBS-logo.png'),
  },
  {
    name: 'Vanderlande',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/vanderlande-logo.png'),
  },
  {
    name: 'Volkswagen',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/volkswagen-logo.png'),
  },
  {
    name: 'Whirlpool',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/whirlpool-logo-logo.png'),
  },
  {
    name: 'Godrej Properties',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/godrej-brand-logo.png'),
  },
  {
    name: 'Haldiram\'s',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/-Haldirams-Logo-.png'),
  },
  {
    name: 'MRF',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/MRF-Logo.png'),
  },
  {
    name: 'Namma Yatri',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/namma yatri.png'),
  },
  {
    name: 'Xanadu Realty',
    src: asset('/IGSB_ASSETS/Company_Logo, IGSB_Logo & AICTE_SPPU/Recruiter Companies logo/XANADU logo.png'),
  },
]

export const TESTIMONIALS = [
  {
    name: 'Prachi Navghare',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Broadened her knowledge across analytics, finance, operations, and HR.',
    quote:
      'My experience at IGSB has been exceptional. The academic curriculum, guest lectures, and workshops across business analytics, finance, operations, and HR broadened my knowledge and shaped my professional journey.',
    image: asset('/IGSB_ASSETS/Students_success_ story/Prachi Navghare .png'),
  },
  {
    name: 'Priyanka Koniti',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Secured her dream role as a Branch Manager at Home First Finance Company.',
    quote:
      'I am very thankful to IGSB for helping me build the skills needed in the corporate world and guiding me toward my dream job.',
    image: asset('/IGSB_ASSETS/Students_success_ story/Priyanka Koniti.png'),
  },
  {
    name: 'Nikita Dalvi',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Strengthened critical thinking and adaptability through a rigorous MBA journey.',
    quote:
      'Pursuing my MBA at IGSB was a transformative journey. A collaborative environment and rigorous curriculum challenged me to think critically and adapt quickly.',
    image: asset('/IGSB_ASSETS/Students_success_ story/Nikita Dalvi .png'),
  },
  {
    name: 'Nikhil Rokade',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Experienced strong academic and personal development in a supportive campus environment.',
    quote:
      'My time at IGSB has been transformative. From the moment I stepped onto campus, I felt welcomed by peers and faculty in an environment that supported both academic growth and personal development.',
    image: asset('/IGSB_ASSETS/Students_success_ story/Rokade Nikhil Dinesh .png'),
  },
  {
    name: 'Suruchi Vishnu',
    batch: 'MBA 2022-24 Batch',
    outcome: 'Received a pre-placement offer at BNY after internship.',
    quote:
      'My time at IGSB was a game-changer. The faculty were supportive, the hands-on experience was invaluable, and I received a pre-placement offer at BNY after my internship.',
    image: asset('/IGSB_ASSETS/Students_success_ story/Suruchi Vishnu .png'),
  },
]

export const CAMPUS_IMAGES = {
  heroBackground: asset('/IGSB_ASSETS/Campus Image .png'),
  campus: asset('/IGSB_ASSETS/IGSB campus .png'),
  femaleStudent: asset('/IGSB_ASSETS/Girl Student Cut out .png'),
  maleStudent: asset('/IGSB_ASSETS/Student image (1).png'),
  studentPortrait: asset('/IGSB_ASSETS/Student image .png'),
  labStudents: asset('/IGSB_ASSETS/Copy of DSC09723.jpg'),
  groupStudents: asset('/IGSB_ASSETS/Copy of DSC09839.jpg'),
  libraryStacks: asset('/IGSB_ASSETS/Copy of DSC09585.jpg'),
  computerLab: asset('/IGSB_ASSETS/Copy of DSC09715.jpg'),
  hallwayTeam: asset('/IGSB_ASSETS/Copy of DSC09668.jpg'),
  outdoorDiscussion: asset('/IGSB_ASSETS/Copy of DSC09794.jpg'),
  laptopCollaboration: asset('/IGSB_ASSETS/Copy of DSC09869.jpg'),
  placementGroup: asset('/IGSB_ASSETS/Copy of DSC09851.jpg'),
}

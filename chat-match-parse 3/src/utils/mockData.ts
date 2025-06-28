export interface Candidate {
  id: string;
  name: string;
  title: string;
  location: string;
  remote: boolean;
  yearsOfExperience: number;
  skills: string[];
  languages: string[];
  education: string;
  matchScore: number;
  summary: string;
  imageUrl?: string;
}

export interface JobData {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  experienceRequired: string;
  requiredSkills: string[];
  preferredSkills: string[];
  description: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

// Mock job data
export const mockJobs: JobData[] = [
  {
    id: 'job-1',
    title: 'Senior React Developer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    remote: true,
    experienceRequired: '4-6 years',
    requiredSkills: ['React', 'TypeScript', 'Redux', 'GraphQL'],
    preferredSkills: ['Next.js', 'Testing Library', 'Cypress', 'AWS'],
    description: 'We are looking for a Senior React Developer to join our growing team. The ideal candidate will have strong experience with React, TypeScript, and modern front-end development practices.',
    createdAt: '2023-09-15T10:00:00Z',
  },
  {
    id: 'job-2',
    title: 'Machine Learning Engineer',
    company: 'AI Solutions Ltd.',
    location: 'Boston, MA',
    remote: false,
    experienceRequired: '3-5 years',
    requiredSkills: ['Python', 'TensorFlow', 'PyTorch', 'Machine Learning'],
    preferredSkills: ['Computer Vision', 'NLP', 'AWS', 'Docker'],
    description: 'Join our AI team to develop cutting-edge machine learning solutions. You will work on challenging problems in computer vision and natural language processing.',
    createdAt: '2023-09-10T09:30:00Z',
  },
];

// Mock candidate data
export const mockCandidates: Candidate[] = [
  {
    id: 'candidate-1',
    name: 'Alex Johnson',
    title: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    remote: true,
    yearsOfExperience: 6,
    skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'Next.js'],
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    education: 'Bachelor of Computer Science, Stanford University',
    matchScore: 95,
    summary: 'Alex has 6 years of experience specializing in React and TypeScript. Strong background in building complex web applications with Redux and GraphQL. Recently worked with Next.js and has experience with AWS deployment.'
  },
  {
    id: 'candidate-2',
    name: 'Sarah Chen',
    title: 'Frontend Developer',
    location: 'New York, NY',
    remote: true,
    yearsOfExperience: 4,
    skills: ['React', 'JavaScript', 'Redux', 'CSS', 'Webpack'],
    languages: ['JavaScript', 'HTML', 'CSS', 'Python'],
    education: 'Master of Computer Science, NYU',
    matchScore: 85,
    summary: 'Sarah has 4 years of experience in frontend development with React and Redux. Strong CSS skills and experience with responsive design. Has worked on multiple e-commerce applications.'
  },
  {
    id: 'candidate-3',
    name: 'David Kim',
    title: 'Full Stack Developer',
    location: 'Austin, TX',
    remote: true,
    yearsOfExperience: 5,
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    education: 'BS in Computer Engineering, UT Austin',
    matchScore: 80,
    summary: 'David is a full stack developer with 5 years of experience. Strong in both React frontend and Node.js backend development. Has built multiple RESTful APIs and worked with various databases.'
  },
  {
    id: 'candidate-4',
    name: 'Emily Rodriguez',
    title: 'UI/UX Developer',
    location: 'Los Angeles, CA',
    remote: false,
    yearsOfExperience: 3,
    skills: ['React', 'JavaScript', 'Figma', 'SASS', 'User Testing'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    education: 'BFA in Digital Design, UCLA',
    matchScore: 75,
    summary: 'Emily combines strong React development skills with UI/UX expertise. 3 years of experience in designing and implementing user interfaces. Proficient with Figma and design systems.'
  },
  {
    id: 'candidate-5',
    name: 'Michael Wong',
    title: 'Senior Software Engineer',
    location: 'Seattle, WA',
    remote: true,
    yearsOfExperience: 8,
    skills: ['React', 'TypeScript', 'Redux', 'GraphQL', 'AWS', 'Docker'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Go', 'SQL'],
    education: 'MS in Computer Science, University of Washington',
    matchScore: 90,
    summary: 'Michael is a senior engineer with 8 years of experience across the full stack. Expert in React and TypeScript with strong DevOps knowledge. Has led teams and mentored junior developers.'
  },
  {
    id: 'candidate-6',
    name: 'Sophia Patel',
    title: 'Frontend Lead',
    location: 'Boston, MA',
    remote: true,
    yearsOfExperience: 7,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Jest', 'Cypress'],
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    education: 'BS in Computer Science, MIT',
    matchScore: 92,
    summary: 'Sophia leads frontend development teams with 7 years of experience. Expert in React ecosystem and modern testing practices. Strong advocate for accessibility and performance optimization.'
  },
  {
    id: 'candidate-7',
    name: 'James Wilson',
    title: 'Full Stack Developer',
    location: 'Chicago, IL',
    remote: false,
    yearsOfExperience: 4,
    skills: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    education: 'BS in Software Engineering, University of Illinois',
    matchScore: 82,
    summary: 'James is a full stack developer with 4 years of experience. Strong in both frontend and backend development. Has experience with microservices architecture and cloud deployment.'
  },
  {
    id: 'candidate-8',
    name: 'Olivia Martinez',
    title: 'Senior Frontend Developer',
    location: 'Miami, FL',
    remote: true,
    yearsOfExperience: 6,
    skills: ['React', 'Vue.js', 'TypeScript', 'SASS', 'Webpack', 'Jest'],
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    education: 'MS in Computer Science, Georgia Tech',
    matchScore: 88,
    summary: 'Olivia has 6 years of experience in frontend development. Expert in React and Vue.js. Strong focus on performance optimization and code quality. Has led multiple large-scale frontend projects.'
  },
  {
    id: 'candidate-9',
    name: 'Daniel Lee',
    title: 'Frontend Developer',
    location: 'Portland, OR',
    remote: true,
    yearsOfExperience: 3,
    skills: ['React', 'JavaScript', 'CSS', 'Redux', 'Jest'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    education: 'BS in Computer Science, Oregon State University',
    matchScore: 78,
    summary: 'Daniel is a frontend developer with 3 years of experience. Strong in React and modern JavaScript. Focuses on creating responsive and accessible user interfaces.'
  },
  {
    id: 'candidate-10',
    name: 'Emma Thompson',
    title: 'Senior UI Developer',
    location: 'Denver, CO',
    remote: true,
    yearsOfExperience: 5,
    skills: ['React', 'TypeScript', 'Styled Components', 'Framer Motion', 'Jest'],
    languages: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
    education: 'BFA in Interactive Design, RISD',
    matchScore: 85,
    summary: 'Emma combines design expertise with strong technical skills. 5 years of experience in creating beautiful and functional user interfaces. Expert in animation and interactive design.'
  },
  {
    id: 'candidate-11',
    name: 'Ryan Chen',
    title: 'Full Stack Developer',
    location: 'San Diego, CA',
    remote: true,
    yearsOfExperience: 4,
    skills: ['React', 'Node.js', 'MongoDB', 'GraphQL', 'Docker'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'SQL'],
    education: 'BS in Computer Science, UC San Diego',
    matchScore: 80,
    summary: 'Ryan is a full stack developer with 4 years of experience. Strong in both frontend and backend development. Has experience with GraphQL and microservices architecture.'
  },
  {
    id: 'candidate-12',
    name: 'Isabella Garcia',
    title: 'Frontend Developer',
    location: 'Austin, TX',
    remote: true,
    yearsOfExperience: 3,
    skills: ['React', 'JavaScript', 'CSS', 'Redux', 'Jest'],
    languages: ['JavaScript', 'HTML', 'CSS'],
    education: 'BS in Computer Science, UT Austin',
    matchScore: 76,
    summary: 'Isabella is a frontend developer with 3 years of experience. Strong in React and modern JavaScript. Focuses on creating responsive and accessible user interfaces.'
  }
];

// Mock chat messages
export const mockChatMessages: ChatMessage[] = [
  {
    id: 'msg-1',
    role: 'user',
    content: 'I need a senior React developer with TypeScript experience who can work remotely.',
    timestamp: '2023-09-20T09:00:00Z',
  },
  {
    id: 'msg-2',
    role: 'assistant',
    content: 'I understand you\'re looking for a senior React developer with TypeScript experience who can work remotely. Could you tell me more about the specific requirements? For example:',
    timestamp: '2023-09-20T09:00:05Z',
  },
  {
    id: 'msg-3',
    role: 'assistant',
    content: '1. How many years of experience are you looking for?\n2. Are there any other technologies they should be familiar with (Redux, GraphQL, etc.)?\n3. Do you have any specific industry experience requirements?',
    timestamp: '2023-09-20T09:00:10Z',
  },
  {
    id: 'msg-4',
    role: 'user',
    content: 'We need someone with at least 4 years of experience. They should know Redux and GraphQL. Experience with Next.js would be a plus. We\'re a fintech company but specific industry experience isn\'t required.',
    timestamp: '2023-09-20T09:02:00Z',
  },
  {
    id: 'msg-5',
    role: 'assistant',
    content: 'Thank you for providing those details. I\'ve analyzed your requirements and created a job posting for a Senior React Developer position. Here\'s what I\'ve extracted:',
    timestamp: '2023-09-20T09:02:15Z',
  },
  {
    id: 'msg-6',
    role: 'assistant',
    content: '**Job Title:** Senior React Developer\n**Experience:** 4+ years\n**Required Skills:** React, TypeScript, Redux, GraphQL\n**Preferred Skills:** Next.js\n**Work Type:** Remote\n**Industry:** Fintech (experience not required)\n\nIs this information correct? Would you like to make any adjustments?',
    timestamp: '2023-09-20T09:02:30Z',
  },
];

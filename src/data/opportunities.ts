import { Opportunity } from '../types';

export const initialOpportunities: Opportunity[] = [
  {
    id: 'finedge-prod-analyst',
    company: 'FinEdge',
    logoText: 'FE',
    logoBg: 'bg-indigo-600',
    role: 'Product Analyst Intern',
    location: 'Bengaluru, Karnataka (Hybrid)',
    workMode: 'Hybrid',
    type: 'Internship',
    compensation: '₹30,000/month',
    duration: '6 Months (Jan 2027 - Jun 2027)',
    minCgpa: 8.2,
    eligibleBranches: ['Electronics & Communication Engineering', 'Computer Science and Engineering', 'Electrical & Electronics Engineering', 'Information Technology', 'ECE', 'CSE', 'EEE', 'IT'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-09-30',
    postedDate: '2026-09-10',
    applicantsCount: 42,
    aboutRole: 'FinEdge is India\'s premier fintech product analytics firm powering digital payment infrastructures. As a Product Analyst Intern, you will partner directly with Principal Product Managers to analyze checkout funnels, optimize payment conversion rates, write data-driven PRDs, and run high-velocity A/B tests.',
    responsibilities: [
      'Analyze transaction success rates and drop-off metrics across multiple payment gateways.',
      'Construct executive dashboards in SQL and Excel for core product KPIs.',
      'Collaborate with engineering, UX, and compliance teams to define sprint user stories.',
      'Conduct user interviews and competitive teardowns for new neo-banking features.'
    ],
    requirements: [
      'Strong quantitative reasoning and structured problem-solving approach.',
      'Proficiency in SQL for data extraction and Excel/Sheets for modeling.',
      'Understanding of core Product Management methodologies (PRDs, sprint planning, user journeys).',
      'Effective cross-functional communication and presentation skills.'
    ],
    skills: ['Product Management', 'SQL', 'Excel', 'Problem Solving', 'Data Storytelling', 'Communication'],
    selectionProcess: [
      { step: 1, title: 'Resume Screening & Shortlisting', description: 'Evaluation of academic credentials, projects, and coursework.' },
      { step: 2, title: 'Online Analytics Assessment', description: '90-minute online test covering SQL queries, business math, and logical reasoning.' },
      { step: 3, title: 'Product Case Interview', description: '45-minute live interview resolving an open-ended product problem and guesstimate.' },
      { step: 4, title: 'Leadership & HR Round', description: 'Discussion with the VP of Product on culture fit, ownership, and internship expectations.' }
    ]
  },
  {
    id: 'novatech-se-intern',
    company: 'NovaTech',
    logoText: 'NT',
    logoBg: 'bg-emerald-600',
    role: 'Software & Product Intern',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Internship',
    compensation: '₹25,000/month',
    duration: '3 Months (Summer)',
    minCgpa: 8.0,
    eligibleBranches: ['ECE', 'CSE', 'IT', 'Electronics & Communication Engineering'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-09-28',
    postedDate: '2026-09-08',
    applicantsCount: 58,
    aboutRole: 'NovaTech builds developer productivity tools used by over 50,000 engineers globally. This dual-track internship provides exposure to both software craftsmanship and product scoping.',
    responsibilities: [
      'Build performant frontend components and internal telemetry dashboards.',
      'Translate technical capabilities into customer-facing feature briefs.',
      'Participate in agile sprint ceremonies and code reviews.'
    ],
    requirements: [
      'Hands-on knowledge of Python, TypeScript, or modern web frameworks.',
      'Curiosity for user experience design and developer tooling.',
      'Clear technical documentation and verbal communication skills.'
    ],
    skills: ['Python', 'React', 'Product Analytics', 'Problem Solving'],
    selectionProcess: [
      { step: 1, title: 'Online Coding Challenge', description: 'Data structures, algorithm implementation, and debugging.' },
      { step: 2, title: 'Technical Interview', description: 'System design basics and live coding review.' },
      { step: 3, title: 'Managerial Round', description: 'Product thinking and behavioral evaluation.' }
    ]
  },
  {
    id: 'cloudnova-ba-intern',
    company: 'CloudNova',
    logoText: 'CN',
    logoBg: 'bg-sky-600',
    role: 'Business Analyst Intern',
    location: 'Remote',
    workMode: 'Remote',
    type: 'Internship',
    compensation: '₹20,000/month',
    duration: '6 Months',
    minCgpa: 7.5,
    eligibleBranches: ['All Engineering'],
    eligibleGradYears: [2028],
    maxBacklogs: 1,
    deadline: '2026-10-05',
    postedDate: '2026-09-12',
    applicantsCount: 89,
    aboutRole: 'CloudNova delivers enterprise cloud cost optimization solutions. As a Business Analyst intern, you will bridge technical cloud metrics and executive stakeholder decision-making.',
    responsibilities: [
      'Audit client cloud bills to detect resource anomalies and cost spikes.',
      'Prepare weekly client reporting slide decks and metrics digests.',
      'Map workflow processes across client customer success accounts.'
    ],
    requirements: [
      'Advanced Excel skills (VLOOKUP, Pivot Tables, logical formulas).',
      'Foundational understanding of relational databases and SQL.',
      'Strong business acumen and analytical curiosity.'
    ],
    skills: ['Excel', 'SQL', 'Data Visualization', 'Documentation'],
    selectionProcess: [
      { step: 1, title: 'Aptitude & Excel Assessment', description: 'Case based questions and spreadsheet exercises.' },
      { step: 2, title: 'Case Presentation', description: 'Present business recommendations from sample dataset.' },
      { step: 3, title: 'Final Interview', description: 'Role clarity and availability confirmation.' }
    ]
  },
  {
    id: 'paysprint-ops-intern',
    company: 'PaySprint',
    logoText: 'PS',
    logoBg: 'bg-amber-600',
    role: 'Operations & Strategy Intern',
    location: 'Mumbai, Maharashtra (Onsite)',
    workMode: 'Onsite',
    type: 'Internship',
    compensation: '₹18,000/month',
    duration: '4 Months',
    minCgpa: 7.0,
    eligibleBranches: ['All Engineering'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-10-10',
    postedDate: '2026-09-14',
    applicantsCount: 34,
    aboutRole: 'PaySprint powers merchant point-of-sale services across Tier-1 and Tier-2 Indian cities. Help orchestrate city-wide merchant onboarding and optimize operational turnaround times.',
    responsibilities: [
      'Monitor merchant onboarding SLAs and escalate bottleneck tickets.',
      'Coordinate between field operations teams and technical support.',
      'Formulate weekly operational reports for city heads.'
    ],
    requirements: [
      'High ownership, agility, and willingness to work on ground operational workflows.',
      'Excellent spreadsheet and communication capabilities.',
      'Comfortable analyzing multi-dimensional operational tracking sheets.'
    ],
    skills: ['Excel', 'Operations', 'Process Optimization', 'Communication'],
    selectionProcess: [
      { step: 1, title: 'Application Review', description: 'Screening by Placement cell and PaySprint HR.' },
      { step: 2, title: 'Operations Task', description: 'Mini case on resolving merchant bottleneck scenarios.' },
      { step: 3, title: 'Interview with City Lead', description: 'Operational mindset and cultural fitment.' }
    ]
  },
  {
    id: 'databridge-data-analyst',
    company: 'DataBridge',
    logoText: 'DB',
    logoBg: 'bg-purple-600',
    role: 'Data Analyst Intern',
    location: 'Hyderabad, Telangana (Hybrid)',
    workMode: 'Hybrid',
    type: 'Internship',
    compensation: '₹25,000/month',
    duration: '6 Months',
    minCgpa: 8.0,
    eligibleBranches: ['CSE', 'ECE', 'IT', 'Electronics & Communication Engineering'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-10-12',
    postedDate: '2026-09-15',
    applicantsCount: 67,
    aboutRole: 'DataBridge builds real-time supply chain telemetry pipelines for retail conglomerates. You will write data transformation queries, build statistical dashboards, and discover inventory inefficiencies.',
    responsibilities: [
      'Write complex SQL queries on distributed BigQuery datasets.',
      'Develop interactive visual dashboards using modern BI tools.',
      'Cleanse messy logistics datasets using Python and Pandas.'
    ],
    requirements: [
      'Solid command of SQL window functions, joins, and aggregates.',
      'Working knowledge of Python for exploratory data analysis.',
      'Desire to tell compelling stories with metrics.'
    ],
    skills: ['Python', 'SQL', 'Statistics', 'Data Storytelling'],
    selectionProcess: [
      { step: 1, title: 'SQL & Analytics Test', description: 'Timed SQL test on real world business schemas.' },
      { step: 2, title: 'Technical Interview', description: 'Discussion of past projects, SQL queries, and logic.' },
      { step: 3, title: 'Director Round', description: 'Strategic alignment and communication review.' }
    ]
  },
  {
    id: 'apexlabs-ai-pm',
    company: 'ApexLabs',
    logoText: 'AL',
    logoBg: 'bg-rose-600',
    role: 'Associate Product Manager',
    location: 'Bengaluru, Karnataka (Onsite)',
    workMode: 'Onsite',
    type: 'Full-time',
    compensation: '₹45,000/month (Intern) / ₹18 LPA (FTE)',
    duration: '6 Months Internship followed by FTE',
    minCgpa: 8.8,
    eligibleBranches: ['CSE', 'ECE', 'IT', 'Electronics & Communication Engineering'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-10-15',
    postedDate: '2026-09-11',
    applicantsCount: 112,
    aboutRole: 'ApexLabs is creating autonomous agentic workflows for Fortune 500 enterprises. As an APM, you will drive customer discovery, author technical product specifications, and direct sprint priorities.',
    responsibilities: [
      'Conduct weekly discovery calls with enterprise customers to synthesize unmet needs.',
      'Write meticulous PRDs with acceptance criteria and wireframe mockups.',
      'Partner with ML researchers to calibrate model benchmarks and UX tolerances.'
    ],
    requirements: [
      'Exceptional analytical clarity and high GPA track record (8.8+).',
      'Demonstrated portfolio of side projects, case competitions, or campus leadership.',
      'Understanding of modern AI/ML systems and web architecture.'
    ],
    skills: ['Product Discovery', 'Wireframing', 'AI/ML concepts', 'SQL', 'PRD Writing'],
    selectionProcess: [
      { step: 1, title: 'Profile & Portfolio Shortlisting', description: 'Review of past projects, hackathons, and high academic performance.' },
      { step: 2, title: 'Take-home Product Challenge', description: 'Design a solution for an enterprise workflow in 72 hours.' },
      { step: 3, title: 'Product Case Interview', description: 'Deep dive into your submission with Senior PMs.' },
      { step: 4, title: 'Founder Round', description: 'Discussion with Co-Founder & Head of Product.' }
    ]
  },
  {
    id: 'nexora-systems-swe',
    company: 'Nexora Systems',
    logoText: 'NS',
    logoBg: 'bg-teal-600',
    role: 'Systems Software Engineer',
    location: 'Pune, Maharashtra (Hybrid)',
    workMode: 'Hybrid',
    type: 'Internship + PPO',
    compensation: '₹35,000/month',
    duration: '6 Months',
    minCgpa: 7.8,
    eligibleBranches: ['Computer Science and Engineering', 'Information Technology', 'CSE', 'IT'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-10-20',
    postedDate: '2026-09-09',
    applicantsCount: 76,
    aboutRole: 'Nexora Systems engineers ultra-low latency distributed storage engines. This role is strictly intended for core Computer Science and IT majors with deep systems programming foundations.',
    responsibilities: [
      'Write optimized C++ and Rust code for memory-efficient cache layers.',
      'Benchmark multi-threaded I/O performance under concurrent load.',
      'Profile memory allocations and optimize cache misses.'
    ],
    requirements: [
      'Core CSE/IT curriculum: Operating Systems, Computer Architecture, Networks.',
      'Expertise in C/C++ or Rust with POSIX concurrency knowledge.',
      'Familiarity with Linux kernel tracing tools.'
    ],
    skills: ['C++', 'Linux', 'System Design', 'Algorithms', 'Operating Systems'],
    selectionProcess: [
      { step: 1, title: 'Online Coding Test (DSA)', description: 'Hard algorithmic problems on graphs and dynamic programming.' },
      { step: 2, title: 'Systems Architecture Round', description: 'Low level design, memory layout, and concurrency.' },
      { step: 3, title: 'Technical Interview 2', description: 'Live coding on kernel primitives and multi-threading.' }
    ]
  },
  {
    id: 'quantumlogic-quant-research',
    company: 'QuantumLogic',
    logoText: 'QL',
    logoBg: 'bg-blue-800',
    role: 'Quantitative Strategy Associate',
    location: 'Mumbai, Maharashtra (Onsite)',
    workMode: 'Onsite',
    type: 'Full-time',
    compensation: '₹50,000/month (Intern) / ₹24 LPA (FTE)',
    duration: '6 Months Internship + PPO',
    minCgpa: 8.6,
    eligibleBranches: ['Computer Science and Engineering', 'Mathematics & Computing', 'CSE'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-10-22',
    postedDate: '2026-09-13',
    applicantsCount: 95,
    aboutRole: 'QuantumLogic is a quantitative trading desk formulating statistical arbitrage models. Requires elite mathematical rigor and specialized algorithmic discipline.',
    responsibilities: [
      'Backtest high-frequency trading signals across tick-by-tick orderbook data.',
      'Implement econometric and stochastic time-series models in Python and C++.',
      'Optimize execution slippage and transaction cost models.'
    ],
    requirements: [
      'Exceptional academic credentials (8.6+ CGPA).',
      'Open strictly to Computer Science and Mathematics & Computing majors.',
      'Mastery in linear algebra, probability theory, and statistical modeling.'
    ],
    skills: ['Python', 'Quantitative Modeling', 'Stochastic Calculus', 'SQL', 'Algorithms'],
    selectionProcess: [
      { step: 1, title: 'Math & Logic Assessment', description: 'Advanced probability, puzzle solving, and quantitative speed.' },
      { step: 2, title: 'Technical Quant Round', description: 'Discussion of statistical estimators and algorithmic trade logic.' },
      { step: 3, title: 'Partner Round', description: 'Live risk management interview and game theory scenario.' }
    ]
  },
  {
    id: 'scalegrid-infra-intern',
    company: 'ScaleGrid Cloud',
    logoText: 'SG',
    logoBg: 'bg-cyan-700',
    role: 'Cloud Infrastructure Intern',
    location: 'Delhi NCR (Hybrid)',
    workMode: 'Hybrid',
    type: 'Internship',
    compensation: '₹22,000/month',
    duration: '6 Months',
    minCgpa: 7.5,
    eligibleBranches: ['All Engineering'],
    eligibleGradYears: [2027],
    maxBacklogs: 0,
    deadline: '2026-10-18',
    postedDate: '2026-09-07',
    applicantsCount: 29,
    aboutRole: 'ScaleGrid automates multi-cloud database provisioning across AWS, GCP, and Azure. This specific placement drive is reserved exclusively for the graduating batch of 2027.',
    responsibilities: [
      'Configure Kubernetes manifests and Terraform cloud provisioning modules.',
      'Automate system health monitoring using Prometheus and Grafana.',
      'Conduct automated disaster recovery and backup replication tests.'
    ],
    requirements: [
      'Must belong to the 2027 graduating batch.',
      'Hands-on comfort with Linux shell, Docker, and container fundamentals.',
      'Foundational understanding of IP networking and DNS.'
    ],
    skills: ['AWS', 'Docker', 'Linux', 'Kubernetes', 'Scripting'],
    selectionProcess: [
      { step: 1, title: 'Infrastructure Quiz', description: 'Linux internals, networking, and containerization questions.' },
      { step: 2, title: 'Hands-on Debugging Lab', description: 'Diagnose a broken web cluster environment.' },
      { step: 3, title: 'Engineering Manager Round', description: 'Reliability mindset and problem decomposition.' }
    ]
  },
  {
    id: 'healthpulse-growth-intern',
    company: 'HealthPulse Technologies',
    logoText: 'HP',
    logoBg: 'bg-red-600',
    role: 'Growth & Product Intern',
    location: 'Bengaluru, Karnataka (Remote)',
    workMode: 'Remote',
    type: 'Internship',
    compensation: '₹24,000/month',
    duration: '3 Months',
    minCgpa: 7.8,
    eligibleBranches: ['Electronics & Communication Engineering', 'Computer Science and Engineering', 'Information Technology', 'ECE', 'CSE', 'IT'],
    eligibleGradYears: [2028],
    maxBacklogs: 0,
    deadline: '2026-09-10',
    postedDate: '2026-08-20',
    applicantsCount: 145,
    aboutRole: 'HealthPulse is India\'s fastest-growing preventative healthcare platform connecting over 1M patients with diagnostic labs. Note: The application window for this drive closed on 10 September 2026.',
    responsibilities: [
      'Conduct cohort retention analysis on recurring diagnostic subscription plans.',
      'Draft in-app engagement copy and push notification sequences.',
      'Synthesize customer feedback from NPS surveys into backlog tickets.'
    ],
    requirements: [
      'Working knowledge of product analytics frameworks (Mixpanel/Amplitude).',
      'Strong empathy for patient user journeys and accessibility.',
      'Ability to manipulate funnel spreadsheets.'
    ],
    skills: ['Analytics', 'A/B Testing', 'User Research', 'Excel', 'Product Growth'],
    selectionProcess: [
      { step: 1, title: 'Application Closed', description: 'Applications closed on 10 September 2026.' }
    ]
  }
];

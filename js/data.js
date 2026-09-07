/**
 * Gokul University Portal Data Store
 * Comprehensive dataset containing leadership profiles, academic programs,
 * departments, facilities, research centers, gallery items, and news.
 */

const UNIVERSITY_DATA = {
  profile: {
    name: "Gokul University",
    tagline: "Excellence • Innovation • Leadership",
    founded: "1998",
    motto: "Illuminating Minds, Empowering Futures",
    accreditation: "NAAC A++ Grade (CGPA 3.88/4.0) | NIRF Top 10 | QS Asia Ranked",
    address: "Gokul University Knowledge City, Cyber Park Boulevard, Tech Corridor, Bangalore 560100, India",
    phone: "+91 (080) 4920-8800 / +91 (080) 4920-8801",
    tollFree: "1800-425-GOKUL (46585)",
    email: "admissions@gokuluniversity.edu.in",
    infoEmail: "contact@gokuluniversity.edu.in",
    website: "https://www.gokuluniversity.edu.in"
  },

  stats: [
    { id: "students", value: 25000, suffix: "+", label: "Students Enrolled", icon: "fa-user-graduate", desc: "Across 45+ countries and all Indian states" },
    { id: "faculty", value: 1500, suffix: "+", label: "Faculty Members", icon: "fa-chalkboard-teacher", desc: "92% Ph.D. holders from top global institutions" },
    { id: "programs", value: 100, suffix: "+", label: "Accredited Programs", icon: "fa-book-open", desc: "UG, PG, Doctoral & Executive degrees" },
    { id: "placement", value: 95, suffix: "%", label: "Placement Rate", icon: "fa-briefcase", desc: "₹58 LPA highest package, 450+ marquee recruiters" },
    { id: "publications", value: 500, suffix: "+", label: "Research Publications", icon: "fa-atom", desc: "Annual Scopus & Web of Science indexed papers" }
  ],

  leadership: [
    {
      id: "president",
      name: "Mr. Ramesh E",
      role: "President",
      title: "President, Gokul University",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      altImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      quote: "At Gokul University, we do not merely educate students for careers—we empower compassionate architects of tomorrow.",
      email: "president@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8810",
      office: "Chancery, President's Secretariat, 4th Floor, Apex Tower",
      summary: "Visionary academic leader with 28+ years of transformative experience in higher education governance, strategic institutional planning, and global research ecosystems.",
      education: [
        "Ph.D. in Computer Science & Systems Engineering - Indian Institute of Science (IISc)",
        "Post-Doctoral Research Fellow - Stanford University (Distributed AI & High-Performance Computing)",
        "M.Tech in Systems Engineering (Gold Medalist) - National Institute of Technology",
        "Executive Leadership in Higher Education - Harvard Graduate School of Education"
      ],
      experience: [
        "President, Gokul University (2018 - Present): Steered the university into NIRF Top 10 and NAAC A++ accreditation.",
        "Senior Advisor, National Higher Education Quality & Accreditation Taskforce (2014 - 2018).",
        "Dean of Engineering & Global Innovation, Imperial University of Science (2008 - 2014).",
        "Distinguished Professor of Artificial Intelligence & Distributed Computing (1998 - 2008)."
      ],
      achievements: [
        "Authored 6 seminal books on Distributed Systems, Enterprise Architecture, and Modern Higher Education Policy.",
        "Published 120+ peer-reviewed papers in IEEE, ACM, and Springer journals with 14,000+ citations (h-index: 48).",
        "Granted 14 patents in scalable machine learning and decentralized cryptographic computing architectures.",
        "Mobilized over $45 Million in international research grants and endowment funds."
      ],
      awards: [
        "National Distinguished Academic Statesman Award by the Ministry of Education",
        "IEEE Fellow Citation for Outstanding Contributions to Distributed Computing",
        "Global Academic Leadership Medal - World Education Forum, Geneva",
        "Honorary Doctorate in Humane Letters - Edinburgh Global Consortium"
      ],
      vision: "To position Gokul University among the top 50 global institutions by 2030 through borderless multidisciplinary discovery, ethical innovation, and social equity.",
      strategicGoals: [
        "Scale the university research seed endowment to ₹250 Crores by 2028.",
        "Achieve 100% smart net-zero sustainable campus infrastructure with next-gen clean energy.",
        "Expand international dual-degree partnerships with Harvard, Oxford, and NUS to over 30 programs.",
        "Pioneer AI-driven personalized lifelong learning ecosystems for every enrolled scholar."
      ],
      message: "Welcome to Gokul University. As you walk through our campuses, you step into a vibrant tapestry of ideas, scientific inquiry, and relentless ambition. We believe that true education transfigures knowledge into wisdom, and ambition into purposeful action. To our faculty, researchers, and cherished students: dare to explore uncharted frontiers, uphold unwavering integrity, and let your journey here leave an indelible mark of excellence on our world."
    },
    {
      id: "vice-president",
      name: "Mrs. Savitha R",
      role: "Vice President",
      title: "Vice President, Gokul University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
      quote: "Knowledge without empathy is incomplete. Dare to question, embrace growth, and believe in your power to create lasting change.",
      email: "vicepresident@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8812",
      office: "Office of the Vice President, Executive Wing, 4th Floor, Apex Tower",
      summary: "Distinguished academic administrator with 22+ years of experience leading student welfare modernization, cross-disciplinary academic initiatives, and diversity frameworks.",
      education: [
        "M.Phil & Ph.D. in Educational Leadership & Organizational Psychology - University of Delhi",
        "Master of Business Administration (Human Capital & Strategy) - XLRI Jamshedpur",
        "Bachelor of Science (Applied Sciences) - University of Madras"
      ],
      experience: [
        "Vice President, Gokul University (2019 - Present): Spearheading student affairs, institutional well-being, and curriculum reform.",
        "Director of Student Affairs & Academic Governance, Metro State University (2012 - 2019).",
        "Head of Department & Professor, Behavioral Sciences and Organizational Strategy (2004 - 2012)."
      ],
      achievements: [
        "Architected the 24/7 Gokul Student Wellness Sanctuary, an internationally recognized mental health & mentoring initiative.",
        "Pioneered the 'Women-in-STEM & Leadership' accelerator, increasing female research enrolment by 48%.",
        "Led the digitalization of university student life services, reducing administrative turnarounds to under 24 hours.",
        "Published 40+ influential research articles on transformative pedagogy and student emotional intelligence."
      ],
      awards: [
        "National Woman Academic Leader of the Year - Higher Education Excellence Conclave",
        "Exemplary Administrator Award - South Asian Universities Association",
        "Diversity Champion Citation by International Council of Educators"
      ],
      vision: "Cultivating an inclusive, emotionally resilient, and intellectually vibrant campus environment where every learner thrives academically, socially, and emotionally.",
      strategicGoals: [
        "Expand comprehensive merit and need-based student scholarships to ₹50 Crores annually.",
        "Establish integrated global exchange programs reaching 40% of the undergraduate cohort.",
        "Institute experiential capstone incubators across all humanities, business, and STEM departments."
      ],
      message: "At Gokul University, our greatest asset is our students' boundless spirit. College life is not just about textbooks and examinations; it is about self-discovery, forging lifelong values, and finding the courage to make a difference. We are committed to standing beside you through every challenge, cheering your triumphs, and providing an ecosystem where your aspirations take flight."
    },
    {
      id: "registrar",
      name: "Mr. Dhanush R",
      role: "Registrar",
      title: "Registrar, Gokul University",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
      quote: "Robust institutional governance and transparent administrative rigor are the bedrock of academic greatness.",
      email: "registrar@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8815",
      office: "Central Administrative Block, Ground Floor, Secretariat Wing",
      summary: "Seasoned university administrative custodian with 24+ years directing statutory compliance, university governance, academic records integrity, and institutional operations.",
      education: [
        "Master of Public Administration (MPA) - National Law School of India University",
        "LL.B. (Specialization in Administrative Law & Constitutional Governance)",
        "Post-Graduate Diploma in Higher Education Management - University of London"
      ],
      experience: [
        "Registrar, Gokul University (2017 - Present): Overseeing all statutory council proceedings, accreditation workflows, and university administrative wings.",
        "Joint Registrar & Controller of Legal Affairs, Central University Network (2010 - 2017).",
        "Chief Administrative Officer, State Higher Education Governance Board (2002 - 2010)."
      ],
      achievements: [
        "Pioneered the Gokul Blockchain-Verified Digital Credentials Portal, enabling instantaneous, tamper-proof global credential verification.",
        "Coordinated three consecutive cycles of NAAC A++ accreditation documentation with 100% compliance record.",
        "Streamlined university human resources and faculty tenure management into a seamless cloud-native enterprise system.",
        "Designed the University Code of Academic Conduct and Statutes aligned with international governance standards."
      ],
      awards: [
        "Best University Administrator Citation - Association of Indian Universities (AIU)",
        "Excellence in Digital Governance Award - Digital India Conclave"
      ],
      vision: "Building an agile, completely paperless, and ethically uncompromised university administration that enables faculty and students to achieve pure academic excellence.",
      strategicGoals: [
        "100% seamless paperless workflow across all 100+ academic departments and administrative offices.",
        "Full integration of AI-assisted student grievance resolution with a mandatory 48-hour service level agreement.",
        "Benchmarking institutional compliance with global ISO 9001 and ISO 27001 data protection standards."
      ],
      message: "The Registrar's office is dedicated to serving as the transparent, reliable backbone of Gokul University. From admissions to graduation and beyond, we ensure your academic records, governance processes, and administrative interactions are conducted with highest professionalism, fairness, and speed."
    },
    {
      id: "dean",
      name: "Mr. Magesh",
      role: "Dean",
      title: "Dean of Academic Affairs & Faculty",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
      quote: "Curriculum must be a living, breathing catalyst that reflects the dynamic frontiers of science and industry.",
      email: "dean.academics@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8818",
      office: "Academic Affairs Directorate, 2nd Floor, Knowledge Complex",
      summary: "Renowned academic innovator with 21+ years of pedagogical stewardship, curriculum modernization, faculty development, and student academic success programs.",
      education: [
        "Ph.D. in Computational Engineering - Indian Institute of Technology (IIT) Madras",
        "M.S. in Advanced Manufacturing & Automation Systems - University of Michigan, Ann Arbor",
        "B.E. (Mechanical Engineering) - College of Engineering, Guindy"
      ],
      experience: [
        "Dean of Academic Affairs, Gokul University (2019 - Present): Architecting modern CBCS curriculum and experiential degrees.",
        "Associate Dean & Chair of Curriculum Revision Board, National University of Technology (2013 - 2019).",
        "Professor and Principal Investigator for Industrial Automation Labs (2005 - 2013)."
      ],
      achievements: [
        "Spearheaded the 'Flexi-Degree' curriculum framework allowing students to major in Engineering with minors in AI, Philosophy, or Finance.",
        "Founded the Gokul Center for Pedagogical Excellence, training 1,500+ faculty members in active learning pedagogies.",
        "Published 75+ research articles and supervised 18 Ph.D. scholars in advanced manufacturing and computational mechanics.",
        "Established student academic mentoring networks resulting in a 98.4% on-time graduation rate."
      ],
      awards: [
        "Outstanding Dean of the Decade Award - Asian Academic Forum",
        "Distinguished Faculty Pedagogical Innovator Award by AICTE",
        "Research Leadership Fellowship - European Engineering Consortium"
      ],
      vision: "Creating a borderless, interdisciplinary academic habitat where intellectual curiosity is catalyzed by immersive industry projects and cutting-edge inquiry.",
      strategicGoals: [
        "Introduce industry co-designed micro-credentials into every undergraduate and postgraduate syllabus.",
        "Achieve 100% project-based experiential learning assessments across all STEM and Management programs.",
        "Facilitate 1-month international teaching sabbaticals for 50 faculty members annually."
      ],
      message: "Academic life at Gokul University is designed to kindle your passions. We encourage every student to break the silos between disciplines—code an algorithm, write poetry, analyze fiscal markets, and build autonomous systems. Our faculty are not just teachers; they are mentors walking beside you on the path to mastery."
    },
    {
      id: "controller-of-examinations",
      name: "Mr. Bharani S",
      role: "Controller of Examinations",
      title: "Controller of Examinations (COE)",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
      quote: "Fairness, transparency, and unshakeable integrity in assessment are the true guarantors of academic prestige.",
      email: "coe@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8822",
      office: "Evaluation & Assessment Complex, Tower B, Ground Floor",
      summary: "Pioneering assessment technologist with 20+ years expertise in secure examination governance, digital evaluation systems, psychometrics, and academic integrity.",
      education: [
        "Ph.D. in Information Security & Cryptographic Protocols - Anna University",
        "M.E. in Computer Science & Engineering (Distinction)",
        "Certified Information Systems Auditor (CISA) & Advanced Psychometrics Fellow"
      ],
      experience: [
        "Controller of Examinations, Gokul University (2018 - Present): Directing transparent examination cycles for 25,000+ students.",
        "Deputy Controller of Examinations, State Technical University (2011 - 2018).",
        "Chairperson, Board of Examiners for Post-Graduate Computing Studies (2006 - 2011)."
      ],
      achievements: [
        "Implemented 100% Digital On-Screen Marking (OSM) across 150,000+ answer scripts per semester with zero loss and 10-day result turnarounds.",
        "Integrated AI-assisted secure proctoring and encrypted question bank delivery systems.",
        "Designed the Bloom's Taxonomy-based Higher-Order Thinking Skills (HOTS) evaluation rubric adopted university-wide.",
        "Maintained a zero-leakage, zero-malpractice institutional track record for over 7 consecutive academic years."
      ],
      awards: [
        "National Award for Digital Innovation in University Assessments",
        "Excellence in Examination Integrity & Quality Assurance Honor",
        "Governor's Citation for Transparent Academic Governance"
      ],
      vision: "To establish Gokul University's examination and evaluation systems as the gold standard in equity, accuracy, and digital innovation.",
      strategicGoals: [
        "Publish all end-semester examination results within 7 working days from final paper completion.",
        "Deploy adaptive computer-based testing (CBT) for continuous formative assessment.",
        "Maintain end-to-end cryptographic audit trails for every grade award and moderation cycle."
      ],
      message: "Examinations at Gokul University are not a barrier; they are a celebration and benchmark of your intellectual growth. We pledge to every student that your hard work will always be measured with absolute equity, transparency, and precision. Step into your assessments with confidence and integrity."
    },
    {
      id: "finance-officer",
      name: "Mr. Mani M",
      role: "Finance Officer",
      title: "Chief Finance Officer (CFO)",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      quote: "Strategic financial stewardship fuels our boldest academic, scientific, and infrastructural aspirations.",
      email: "finance@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8825",
      office: "Treasury & Finance Wing, 3rd Floor, Administrative Tower",
      summary: "Chartered fiscal strategist with 23+ years directing university capital budgeting, endowment fund management, research grants auditing, and institutional resource allocation.",
      education: [
        "Fellow Chartered Accountant (FCA) - Institute of Chartered Accountants of India (ICAI)",
        "Certified Management Accountant (CMA) - ICMAI",
        "M.Com in Financial Accounting & Treasury Management - University of Madras",
        "Diploma in Public Sector Financial Management - World Bank Institute"
      ],
      experience: [
        "Finance Officer, Gokul University (2017 - Present): Managing the university's ₹480 Crore annual budget and capital expansion programs.",
        "Chief Financial Controller, National Research Laboratories Consortium (2010 - 2017).",
        "Senior Audit Partner & Institutional Financial Consultant, Big 4 Audit Firm (2001 - 2010)."
      ],
      achievements: [
        "Grew the university's research endowment fund by 240%, securing key fiscal reserves and financial independence.",
        "Channelled ₹30+ Crores annually into merit-cum-means student scholarships and financial assistance programs.",
        "Achieved 100% clean audit certification with zero statutory observations for 8 consecutive fiscal years.",
        "Designed automated online fee collection, instantaneous vendor clearance, and transparent department budget tracking."
      ],
      awards: [
        "Distinguished CFO of Higher Education Institutions Award - Indian Finance Congress",
        "Best Treasury Management Citation - Higher Education Leadership Awards",
        "ICAI Exemplary Service Award in Educational Administration"
      ],
      vision: "Ensuring ironclad fiscal resilience, transparent resource allocation, and optimal funding to fuel world-class education and pioneering research.",
      strategicGoals: [
        "Expand the university permanent scholarship endowment to support 35% of all undergraduate scholars.",
        "Fund ₹100 Crores in next-generation high-performance computing, nanofabrication, and clean-tech labs.",
        "Maintain lowest administrative overhead ratios while maximizing student-facing capital investments."
      ],
      message: "Every rupee entrusted to Gokul University is an investment in human promise. Our financial philosophy is centered on integrity, prudent stewardship, and empowering our faculty and students with the finest tools, labs, and scholarships the academic world has to offer."
    },
    {
      id: "director",
      name: "Mr. Vijay S",
      role: "Director",
      title: "Director of Strategic Planning, Innovation & Partnerships",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
      quote: "The future belongs to institutions that boldly bridge academia with frontier industries and transformative entrepreneurship.",
      email: "director@gokuluniversity.edu.in",
      phone: "+91 (080) 4920-8828",
      office: "Directorate of Innovation & Global Affairs, Innovation Tower, 5th Floor",
      summary: "Dynamic corporate and academic strategist with 22+ years driving industry partnerships, international consortiums, technology transfer, and startup incubators.",
      education: [
        "M.S. & Ph.D. in Technology Strategy & Innovation - Carnegie Mellon University (CMU)",
        "B.Tech in Information Technology (First Class with Distinction) - Anna University",
        "Advanced Management Program - INSEAD, Fontainebleau"
      ],
      experience: [
        "Director, Gokul University (2018 - Present): Steering corporate alliances, incubation centers, and global strategy.",
        "Vice President of Global Academic Alliances & R&D, Multinational Tech Enterprise (2012 - 2018).",
        "Managing Director, Silicon Valley - India Venture Innovation Exchange (2005 - 2012)."
      ],
      achievements: [
        "Signed 65+ strategic corporate MoUs with industry titans including Google, Microsoft, NVIDIA, Siemens, and L&T.",
        "Founded 'G-Ventures' Incubation Center, incubating 85+ student and faculty startups with ₹120+ Crores in seed valuation.",
        "Championed sponsored research contracts totaling ₹85 Crores from international defense, health-tech, and energy consortiums.",
        "Orchestrated 100% paid corporate internship placements for pre-final year engineering and management students."
      ],
      awards: [
        "Global Corporate-Academic Bridge Builder Award - World Innovation Summit",
        "Top 50 Technology Enablers in Higher Education - Tech Asia",
        "Innovation Ambassador Citation by the Ministry of Electronics & IT"
      ],
      vision: "Transforming Gokul University into India's foremost epicenter of deep-tech innovation, startup incubation, and global industrial integration.",
      strategicGoals: [
        "Launch 5 joint industry-university R&D Centers of Excellence with Fortune 100 technology leaders by 2027.",
        "Propel at least 3 university-born deep-tech startups to unicorn / global enterprise status.",
        "Establish global campus study hubs in Singapore, London, and San Francisco."
      ],
      message: "The modern world demands problem solvers who can translate scientific theory into tangible solutions that touch millions of lives. At Gokul University, we build direct highways between our classrooms and the global vanguard of industry. If you have an idea that can revolutionize the world, we have the mentors, funding, and ecosystem to make it reality."
    }
  ],

  academics: [
    {
      category: "ug",
      label: "Undergraduate Programs",
      count: "38 Programs",
      desc: "4-Year Bachelor Degrees with flexible CBCS credits, international minors, and mandatory 1-year capstone industrial internships.",
      programs: [
        { name: "B.Tech Computer Science & Engineering", duration: "4 Years", seats: "240 Seats", eligibility: "10+2 with 60% in PCM + GUKET Entrance", highlight: "AI, Cloud & Cyber Tracks" },
        { name: "B.Tech Artificial Intelligence & Machine Learning", duration: "4 Years", seats: "180 Seats", eligibility: "10+2 with 60% in PCM + GUKET Entrance", highlight: "NVIDIA Supercomputer Lab Access" },
        { name: "B.Tech Data Science & Analytics", duration: "4 Years", seats: "120 Seats", eligibility: "10+2 with 60% in PCM + GUKET Entrance", highlight: "Big Data & Predictive Modeling" },
        { name: "B.Tech Information Technology", duration: "4 Years", seats: "120 Seats", eligibility: "10+2 with 60% in PCM + GUKET Entrance", highlight: "Enterprise Systems & DevOps" },
        { name: "Bachelor of Business Administration (BBA Hons.)", duration: "3/4 Years", seats: "180 Seats", eligibility: "10+2 Any Stream with 55%", highlight: "Fintech, Global Logistics & Marketing" },
        { name: "B.Com (Hons.) in International Finance & Fintech", duration: "3/4 Years", seats: "150 Seats", eligibility: "10+2 Commerce/Maths with 55%", highlight: "ACCA & CMA Accredited Syllabus" },
        { name: "B.Sc. (Hons.) Physics / Chemistry / Mathematics", duration: "3/4 Years", seats: "90 Seats", eligibility: "10+2 Science with 55%", highlight: "Pure Science & Research Intensive" },
        { name: "B.A. (Hons.) English Literature & Digital Media", duration: "3/4 Years", seats: "80 Seats", eligibility: "10+2 Any Stream with 50%", highlight: "Creative Writing, Journalism & PR" }
      ]
    },
    {
      category: "pg",
      label: "Postgraduate Programs",
      count: "42 Programs",
      desc: "2-Year Master Degrees with industry co-supervised dissertations, patent development, and executive corporate mentorship.",
      programs: [
        { name: "M.Tech in Advanced Artificial Intelligence", duration: "2 Years", seats: "60 Seats", eligibility: "B.E./B.Tech in CSE/IT/ECE + GATE/GUKET", highlight: "Deep Learning & Autonomous Robotics" },
        { name: "M.Tech in Cyber Security & Digital Forensics", duration: "2 Years", seats: "40 Seats", eligibility: "B.Tech in Computing / Equivalent", highlight: "Government Cyber Range Partner" },
        { name: "Master of Business Administration (MBA Dual Specialization)", duration: "2 Years", seats: "240 Seats", eligibility: "Any Graduate with 55% + CAT/GMAT/MAT", highlight: "IIM Benchmark & Wall St. Trading Floor" },
        { name: "Master of Computer Applications (MCA Cloud & Full-Stack)", duration: "2 Years", seats: "120 Seats", eligibility: "BCA / B.Sc. Comp Sci with 55%", highlight: "Microservices & Distributed Systems" },
        { name: "M.Com in Global Accounting & Strategic Taxation", duration: "2 Years", seats: "60 Seats", eligibility: "B.Com / BBA with 50%", highlight: "ERP SAP S/4HANA Certification" },
        { name: "M.Sc. in Data Science & Business Intelligence", duration: "2 Years", seats: "60 Seats", eligibility: "B.Sc. Comp/Maths/Stats or B.Tech", highlight: "Harvard Case Studies & SAS Lab" }
      ]
    },
    {
      category: "doctoral",
      label: "Doctoral Programs (Ph.D.)",
      count: "22 Disciplines",
      desc: "Full-Time & Sponsored Ph.D. programs with generous institutional research fellowships (₹45,000/month) and global exchange options.",
      programs: [
        { name: "Ph.D. in Computer Science & Deep Learning", duration: "3 - 5 Years", seats: "30 Scholars", eligibility: "Master's Degree with 60% + NET/GATE", highlight: "Sponsored by DST & Industry Partners" },
        { name: "Ph.D. in Quantum Computing & Cryptography", duration: "3 - 5 Years", seats: "15 Scholars", eligibility: "M.Tech / M.Sc. with 60%", highlight: "Joint Lab with National Supercomputing Hub" },
        { name: "Ph.D. in Management & Sustainable Economics", duration: "3 - 5 Years", seats: "20 Scholars", eligibility: "MBA / M.Com with 60% + UGC NET", highlight: "Global Policy & ESG Frameworks" },
        { name: "Ph.D. in Applied Sciences & Nanotechnology", duration: "3 - 5 Years", seats: "25 Scholars", eligibility: "M.Sc. in Physics/Chemistry/Materials", highlight: "Class 1000 Cleanroom Access" }
      ]
    },
    {
      category: "professional",
      label: "Professional & Executive Courses",
      count: "18 Certifications",
      desc: "Executive Diplomas and Industry Micro-credentials tailored for working professionals and accelerated career transitions.",
      programs: [
        { name: "Executive MBA in Digital Transformation", duration: "1 Year (Hybrid)", seats: "60 Seats", eligibility: "Graduation + 3 Yrs Work Experience", highlight: "Weekend Cohorts with Silicon Valley Mentors" },
        { name: "Post-Graduate Diploma in GenAI & Agentic Systems", duration: "9 Months (Online)", seats: "100 Seats", eligibility: "Degree in STEM + Basic Coding", highlight: "LLM Fine-Tuning & Multi-Agent Swarms" },
        { name: "Certified Executive Program in FinTech & Blockchain", duration: "6 Months", seats: "75 Seats", eligibility: "Degree in Finance/Engineering", highlight: "Smart Contracts & Algorithmic Trading" },
        { name: "Advanced Diploma in Data Engineering & MLOps", duration: "6 Months", seats: "80 Seats", eligibility: "B.E./BCA/B.Sc. IT", highlight: "Kubernetes, Spark & Snowflake Mastery" }
      ]
    }
  ],

  departments: [
    {
      id: "cs",
      name: "Computer Science",
      code: "CSE",
      icon: "fa-laptop-code",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      description: "Pioneering computing education through high-performance computing, distributed architectures, algorithms, and cybersecurity.",
      facultyCount: "140+ Faculty",
      studentCount: "2,200+ Students",
      labs: ["Distributed Cloud Computing Center", "Advanced Cyber Defense Range", "Systems & Networking Lab"],
      careers: "Software Architect, Cloud Solutions Specialist, Systems Engineer, Security Analyst",
      highlights: "Ranked among the Top 5 Computer Science departments nationwide with 99% placement in Tier-1 tech giants."
    },
    {
      id: "ai",
      name: "Artificial Intelligence",
      code: "AI-ML",
      icon: "fa-brain",
      image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80",
      description: "Dedicated to the frontiers of Generative AI, cognitive reasoning, autonomous robotics, and natural language understanding.",
      facultyCount: "65+ Faculty",
      studentCount: "950+ Students",
      labs: ["NVIDIA DGX Supercomputing Cluster", "Cognitive Robotics & Vision Lab", "Human-AI Interaction Studio"],
      careers: "AI Research Scientist, ML Engineer, NLP Architect, Autonomous Systems Developer",
      highlights: "Direct industry lab setup supported by leading AI hardware giants with dedicated GPU allocations for every student."
    },
    {
      id: "ds",
      name: "Data Science",
      code: "DSA",
      icon: "fa-chart-network",
      iconAlt: "fa-chart-line",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      description: "Empowering next-gen analysts in big data analytics, statistical modeling, algorithmic intelligence, and predictive pipelines.",
      facultyCount: "50+ Faculty",
      studentCount: "800+ Students",
      labs: ["Big Data Analytics Sandbox", "Business Intelligence Analytics Center", "Healthcare Data Lab"],
      careers: "Principal Data Scientist, Quantitative Strategist, Business Intelligence Architect",
      highlights: "Partnership with Fortune 500 analytics firms for live industrial data capstone projects."
    },
    {
      id: "it",
      name: "Information Technology",
      code: "IT",
      icon: "fa-network-wired",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
      description: "Focusing on enterprise infrastructure, full-stack microservices, cloud virtualization, DevOps, and IoT edge deployments.",
      facultyCount: "60+ Faculty",
      studentCount: "900+ Students",
      labs: ["IoT & Smart Sensor Testbed", "Enterprise Cloud Infrastructure Lab", "DevSecOps Studio"],
      careers: "DevOps Engineer, Enterprise Solutions Architect, IoT Systems Engineer, Full-Stack Lead",
      highlights: "AWS and Azure Certified training built directly into the semester curriculum."
    },
    {
      id: "business",
      name: "Business Administration",
      code: "GBS",
      icon: "fa-chart-pie",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      description: "Gokul Business School nurtures global corporate visionaries, digital entrepreneurs, and strategic management consultants.",
      facultyCount: "85+ Faculty",
      studentCount: "1,400+ Students",
      labs: ["Bloomberg Terminal Financial Lab", "Consumer Behavior Eye-Tracking Studio", "Executive Boardroom Simulation"],
      careers: "Management Consultant, Investment Banker, Brand Strategist, Product Operations Director",
      highlights: "AACSB accredited curriculum benchmarked with Harvard Business Publishing cases."
    },
    {
      id: "commerce",
      name: "Commerce",
      code: "DOC",
      icon: "fa-coins",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      description: "Championing international accounting standards, fintech disruption, auditing excellence, and corporate fiscal policy.",
      facultyCount: "55+ Faculty",
      studentCount: "1,100+ Students",
      labs: ["FinTech Innovation Lab", "Simulated Stock Exchange Trading Room", "Taxation & Forensic Audit Lab"],
      careers: "Chartered Accountant, Certified Financial Planner, Risk Manager, Tax Consultant",
      highlights: "Integrated ACCA (UK) exemptions and fast-track CMA credentials for enrolled students."
    },
    {
      id: "science",
      name: "Science",
      code: "SPS",
      icon: "fa-flask-round-potion",
      iconAlt: "fa-flask",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      description: "Unraveling the fundamental laws of nature in pure physics, synthetic chemistry, advanced mathematics, and materials science.",
      facultyCount: "70+ Faculty",
      studentCount: "750+ Students",
      labs: ["Laser Optics & Photonics Lab", "Spectroscopy & Crystallography Suite", "Computational Mathematics Cluster"],
      careers: "Research Scientist, Materials Specialist, Nanotechnologist, Defense Research Officer",
      highlights: "Over 85 published research papers annually in high-impact Nature and APS journals."
    },
    {
      id: "humanities",
      name: "Arts and Humanities",
      code: "SOH",
      icon: "fa-masks-theater",
      iconAlt: "fa-palette",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800&q=80",
      description: "Cultivating critical inquiry, artistic expression, philosophical ethics, digital media storytelling, and sociopolitical analysis.",
      facultyCount: "45+ Faculty",
      studentCount: "600+ Students",
      labs: ["Digital Media & Broadcast Production Studio", "Linguistic Phonetics Lab", "Oral History & Archives Center"],
      careers: "Investigative Journalist, Content Strategist, Policy Analyst, Creative Director, Diplomat",
      highlights: "Hosts the annual Gokul International Literature & Arts Conclave attracting global authors."
    }
  ],

  facilities: [
    {
      id: "smart-classrooms",
      name: "Smart Classrooms",
      icon: "fa-chalkboard",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
      description: "Acoustically treated, amphitheater-style halls equipped with 4K touch displays, AI-driven lecture capture, and wireless collaboration stations."
    },
    {
      id: "digital-library",
      name: "Digital Central Library",
      icon: "fa-book-reader",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
      description: "Spanning 65,000 sq.ft., housing 500,000+ volumes, 18,000+ subscribed e-journals (IEEE, Springer, ScienceDirect), and 24/7 quiet study pods."
    },
    {
      id: "research-labs",
      name: "Advanced Research Labs",
      icon: "fa-microscope",
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=800&q=80",
      description: "Specialized cleanrooms, high-performance computing clusters, material characterization centers, and biotech synthesis incubators."
    },
    {
      id: "innovation-center",
      name: "G-Ventures Innovation Center",
      icon: "fa-lightbulb",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80",
      description: "State-of-the-art prototyping facility with 3D printers, CNC laser cutters, electronics fabrication benches, and seed venture mentoring suites."
    },
    {
      id: "hostels",
      name: "Hostel Facilities & Residences",
      icon: "fa-hotel",
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      description: "Modern climate-controlled student housing with high-speed fiber Wi-Fi, biometric security, recreational lounges, and round-the-clock wardens."
    },
    {
      id: "sports",
      name: "Olympic Sports Complex",
      icon: "fa-basketball-ball",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
      description: "FIFA-standard turf football stadium, Olympic-size heated swimming pool, 8 synthetic badminton courts, indoor squash, and athletic tracks."
    },
    {
      id: "medical",
      name: "24/7 Medical Center",
      icon: "fa-hospital",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      description: "Full-fledged campus hospital with resident physicians, emergency trauma care, round-the-clock ambulance fleet, and pharmacy."
    },
    {
      id: "transport",
      name: "Transportation & Green Fleet",
      icon: "fa-bus-alt",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
      description: "Fleet of 120+ GPS-tracked, air-conditioned electric and green buses connecting all key sectors of the metropolitan area."
    },
    {
      id: "cafeteria",
      name: "Global Cuisine Cafeteria",
      icon: "fa-utensils",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
      description: "Hygienic multi-cuisine dining courts offering nutritious South Indian, North Indian, Continental, and Asian delights audited by food safety authorities."
    }
  ],

  research: {
    centers: [
      { name: "Center for Autonomous Robotics & GenAI", focus: "Embodied AI, humanoid mechanics, real-time reinforcement learning" },
      { name: "Interdisciplinary Clean Energy & Green Hydrogen Lab", focus: "Solid-state batteries, solar photovoltaic enhancement, green fuel cells" },
      { name: "Center for Cryptography & Quantum Information", focus: "Post-quantum encryption algorithms, zero-knowledge proofs" },
      { name: "Precision Bio-Medicine & Genomic Engineering Hub", focus: "CRISPR gene editing, computational drug discovery, bio-sensors" }
    ],
    patents: "140+ Patents Filed | 68 Patents Granted Internationally",
    publicationsYearly: "520+ Indexed Publications in Scopus & SCI Journals",
    incubation: {
      name: "G-Ventures Incubation Engine",
      startups: "85+ Startups Incubated",
      funding: "₹120+ Crores Raised in Angel & VC Seed Capital",
      jobs: "1,200+ High-Tech Jobs Created by Alumni Founders"
    },
    partners: [
      "Google Research", "Microsoft Academic Alliance", "NVIDIA AI Technology Center",
      "Siemens Industrial Automation", "Cisco Networking Academy", "Amazon Web Services (AWS)",
      "Larsen & Toubro (L&T)", "National Science Foundation"
    ]
  },

  gallery: [
    { category: "campus", title: "University Central Apex Tower & Plaza", image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" },
    { category: "campus", title: "Sunset over Green Quadrangle", image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80" },
    { category: "labs", title: "NVIDIA Supercomputing Cluster Lab", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80" },
    { category: "labs", title: "Advanced Robotics Research Team", image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80" },
    { category: "events", title: "Annual International Hackathon & Tech Conclave", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80" },
    { category: "events", title: "Gokul Cultural Symphony Gala", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80" },
    { category: "sports", title: "Inter-University Championship Football Match", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80" },
    { category: "sports", title: "Olympic Swimming Aquatic Center", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1200&q=80" },
    { category: "convocation", title: "25th Annual University Convocation Ceremony", image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80" },
    { category: "convocation", title: "Graduation Triumph & Golden Moments", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80" }
  ],

  newsEvents: [
    {
      type: "Event",
      badge: "Upcoming Conference",
      date: "October 14-16, 2026",
      title: "International Symposium on Next-Gen Artificial Intelligence & Quantum Systems",
      desc: "Bringing together Turing laureates, keynote scientists from MIT, Stanford, and Google AI to explore ethical generative systems.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "News",
      badge: "Research Milestone",
      date: "September 02, 2026",
      title: "Gokul University Secures ₹42 Crore Green Energy Clean-Tech Grant",
      desc: "The Department of Science and Engineering awarded major grant by the Ministry of Renewable Resources for solid-state battery breakthroughs.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80"
    },
    {
      type: "Placement",
      badge: "Career Records",
      date: "August 28, 2026",
      title: "Record Placements 2026: Over 2,400 Job Offers on Day One",
      desc: "Marquee firms including Microsoft, Goldman Sachs, and NVIDIA participate; highest international package hits ₹58 LPA.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
    }
  ],

  placements: {
    highestPackage: "₹58 LPA",
    averagePackage: "₹12.4 LPA",
    medianPackage: "₹10.8 LPA",
    recruitersCount: "450+",
    placementPercentage: "95%",
    topRecruiters: ["Google", "Microsoft", "Amazon", "NVIDIA", "Goldman Sachs", "Morgan Stanley", "Adobe", "Siemens", "TCS Digital", "Infosys", "Wipro", "Deloitte"]
  },

  testimonials: [
    {
      quote: "Studying Computer Science at Gokul University altered the trajectory of my life. The hands-on AI lab and guidance from visionary faculty gave me the foundation to publish research and secure an offer at Google.",
      name: "Priyanka Sharma",
      role: "B.Tech CSE Graduate (Class of 2025)",
      company: "Software Engineer at Google Cloud",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The culture of innovation at Gokul is electric. Through G-Ventures Incubation, my co-founders and I secured ₹1.2 Crore in seed funding right before our final semester examinations.",
      name: "Arjun Nambiar",
      role: "MBA & B.Tech Alumnus",
      company: "Co-Founder & CEO, AgriScale Robotics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
    },
    {
      quote: "The academic rigor combined with state-of-the-art sports facilities and vibrant cultural life gave me an all-round international university experience that I will cherish forever.",
      name: "Dr. Ananya Roy",
      role: "Ph.D. Scholar & Gold Medalist",
      company: "Postdoc Fellow, Cambridge University",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
    }
  ]
};

// Export for module or global use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UNIVERSITY_DATA;
}

/**
 * ==============================================================================
 * PORTFOLIO CONTENT & DATA CONFIGURATION
 * ==============================================================================
 * All personal details, bio, projects, skills, education, and links are kept
 * here. Update any value in this file to update the website instantly.
 * ==============================================================================
 */

export const personalData = {
  // Identity
  firstName: "Albin",
  lastName: "Antony", // Placeholder surname, editable anytime
  fullName: "Albin Antony",
  displayHeroName: "ALBIN",
  
  // Tagline & Headlines
  role: "CSE (AI) Student · Python · C · Aspiring AI Engineer",
  shortRole: "AI / ML & Software Enthusiast",
  location: "Thejus Engineering College, Kerala, India",
  status: "Open for Summer 2025 Internships & Collaborations",
  badge: "First Year B.Tech · CSE (AI Branch)",
  
  // Hero Section
  hero: {
    title: "ALBIN",
    subtitle: "CSE (AI) Student · Event Horizon of Intelligence · Python · C · Machine Learning",
    leadQuote: "Traversing the computational singularity — bridging low-level C memory orbits with the deep neural cosmos.",
    academicTag: "THEJUS ENGINEERING COLLEGE // SINGULARITY 2024–2028",
    backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
  },

  // About Section
  about: {
    heading: "Bridging foundational systems logic with the frontiers of artificial intelligence.",
    bio: [
      "I am a first-year Computer Science and Engineering (Artificial Intelligence) student at Thejus Engineering College, deeply passionate about problem-solving and how intelligent systems are built from first principles.",
      "My journey began with rigorous procedural programming and memory management in C at G-Tech, giving me a solid understanding of how software interacts with hardware. From there, I transitioned into Python, building practical tools and exploring data science.",
      "Currently, I am immersing myself in linear algebra, statistics, and machine learning fundamentals — working toward engineering thoughtful AI solutions that solve tangible real-world problems."
    ],
    avatarImage: null, // Photo removed as requested
    
    // Interactive Cat Cards (Albin's Code Reviewers & Debugging Companions)
    catCards: [
      {
        id: "pixel",
        name: "Astro-Pixel",
        title: "Orbital Debugger 🐾",
        badge: "Zero-G Memory Commander",
        role: "Senior Pair Programmer & Spacewalk Guardian",
        bio: "Specializes in inspecting C pointer allocations in microgravity, floating across keyboards, and guaranteeing 0 segmentation faults across all lightyears.",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1000&auto=format&fit=crop",
        quote: "In the vacuum of space, your pointers must be strictly initialized.",
        stats: { bugsCaught: "128", napsLogged: "14/sol", purrFrequency: "48 Hz" }
      },
      {
        id: "byte",
        name: "Nebula-Byte",
        title: "Deep Space AI Mentor 🌙",
        badge: "Singularity Neural Pilot",
        role: "Matrix Multiplication & Cosmic Warmth Specialist",
        bio: "Monitors loss curves and neural weights while dozing serenely near the solar panel exhaust vent.",
        image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?q=80&w=1000&auto=format&fit=crop",
        quote: "Even black holes emit Hawking radiation; your models must emit valid predictions.",
        stats: { bugsCaught: "164", napsLogged: "18/sol", purrFrequency: "62 Hz" }
      },
      {
        id: "kernel",
        name: "Cosmic-Kernel",
        title: "Event Horizon Architect ⚡",
        badge: "Quantum Valgrind Officer",
        role: "Relativistic Logic Inspector",
        bio: "Audits every malloc() near the event horizon and ensures dynamic memory never falls past the Schwarzschild radius.",
        image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?q=80&w=1000&auto=format&fit=crop",
        quote: "Time dilates near the singularity, but your algorithms must remain O(log n).",
        stats: { bugsCaught: "99", napsLogged: "16/sol", purrFrequency: "54 Hz" }
      }
    ],
    stats: [
      { label: "ACADEMICS", value: "B.Tech CSE-AI", sub: "Thejus Engineering College" },
      { label: "FOUNDATION", value: "C & Python", sub: "G-Tech Certified in C" },
      { label: "CURRENT FOCUS", value: "AI / ML Basics", sub: "Math & Neural Foundations" },
      { label: "YEAR", value: "1st Year", sub: "Class of 2028" }
    ],
    education: [
      {
        institution: "Thejus Engineering College",
        degree: "B.Tech in Computer Science & Engineering (Artificial Intelligence)",
        period: "2024 — 2028 (Currently in First Year)",
        description: "Focusing on computational mathematics, algorithm design, data structures, and foundational artificial intelligence principles.",
        location: "Vellarakkad, Thrissur, Kerala"
      },
      {
        institution: "G-Tech Computer Education",
        degree: "Professional Certification in C Programming",
        period: "2024",
        description: "Comprehensive hands-on study in procedural programming, dynamic memory allocation, pointers, data structures, and algorithmic optimization.",
        location: "Kerala, India"
      },
      {
        institution: "GHSS Maranchery",
        degree: "Higher Secondary Education (+2)",
        period: "Completed 2024",
        description: "Built strong foundations in mathematics, physical sciences, and computer science, developing an early passion for analytical problem solving and algorithmic thinking.",
        location: "Maranchery, Malappuram, Kerala"
      }
    ]
  },

  // Skills Section
  skills: {
    categories: [
      {
        title: "Programming Languages",
        description: "Core languages applied in academic coursework, personal CLI projects, and algorithm implementations.",
        items: [
          { name: "C Programming", level: 85, tag: "G-Tech Certified", note: "Pointers, Structs, Memory Alloc, CLI" },
          { name: "Python", level: 80, tag: "Primary Language", note: "OOP, Automation, Data Structures, File I/O" },
          { name: "SQL (Fundamentals)", level: 65, tag: "Database", note: "Relational Queries, Schema design" }
        ]
      },
      {
        title: "AI & Data Science (Currently Learning)",
        description: "Active coursework and self-directed exploration in modern intelligence algorithms.",
        items: [
          { name: "AI/ML Fundamentals", level: 65, tag: "In Progress", note: "Supervised Learning, Cost functions, Gradient Descent" },
          { name: "NumPy & Scientific Arrays", level: 70, tag: "Data Stack", note: "Matrix operations, Vectorized computing" },
          { name: "Matplotlib & Seaborn", level: 65, tag: "Visualization", note: "Exploratory data analysis & statistical plots" },
          { name: "Linear Algebra & Calculus", level: 75, tag: "Mathematics", note: "Vectors, Matrices, Derivatives for Optimization" }
        ]
      },
      {
        title: "Developer Tools & Workflow",
        description: "Tools and environments leveraged for structured version control and development.",
        items: [
          { name: "Git & GitHub", level: 75, tag: "Version Control", note: "Branching, PRs, Commit hygiene" },
          { name: "Linux & Terminal", level: 70, tag: "Environment", note: "Bash commands, Scripting, GCC compiler" },
          { name: "VS Code & Debugging", level: 85, tag: "IDE", note: "Extensions, Linters, Debugging tools" }
        ]
      }
    ],
    // Quick skill tags for chips
    allChips: [
      "Python", "C Language", "Machine Learning (Basics)", "NumPy",
      "Data Structures", "Algorithmic Thinking", "Git", "GitHub",
      "Linux CLI", "GCC / Make", "Linear Algebra", "Object-Oriented Programming"
    ]
  },

  // Learning Journey / Timeline
  journey: [
    {
      year: "2022 — 2024",
      milestone: "Higher Secondary (+2) at GHSS Maranchery",
      badge: "Academic Genesis",
      summary: "Completed Higher Secondary education (+2) at Government Higher Secondary School (GHSS) Maranchery, cultivating foundational disciplines in mathematics and computational thinking.",
      details: [
        "Excelled in core science and mathematics coursework, building the analytical bedrock for computer engineering.",
        "Sparked passion for software logic, algorithmic puzzles, and digital architectures.",
        "Graduated successfully and set trajectory toward Computer Science & Artificial Intelligence."
      ]
    },
    {
      year: "Early 2024",
      milestone: "C Programming Foundation at G-Tech",
      badge: "Core Discipline",
      summary: "Mastered low-level syntax, manual memory pointers, arrays, and algorithms. Built command-line calculators and puzzle games in C.",
      details: [
        "Learned deep fundamentals of memory architectures, stack vs heap, and pointer arithmetic.",
        "Constructed structured CLI projects with modular headers and clean error handling.",
        "Graduated with high distinction certificate from G-Tech."
      ]
    },
    {
      year: "Mid 2024",
      milestone: "Admission to Thejus Engineering College",
      badge: "B.Tech CSE (AI)",
      summary: "Enrolled in the B.Tech Computer Science & Engineering (Artificial Intelligence) program to formalize academic foundations.",
      details: [
        "Commenced rigorous university curriculum in engineering mathematics, logic design, and problem solving.",
        "Joined college developer forums, tech clubs, and coding circles.",
        "Set personal goal to build a portfolio of impactful open-source and AI-driven projects."
      ]
    },
    {
      year: "Late 2024",
      milestone: "Transition to Python & Practical Software",
      badge: "Application Development",
      summary: "Expanded toolkit into Python, building object-oriented CLI utilities and automated data managers.",
      details: [
        "Developed 'Student Management System' with persistent file storage and modular architecture.",
        "Explored data scraping, automation scripts, and algorithmic challenges on LeetCode/HackerRank.",
        "Gained fluency in Pythonic design patterns, unit testing, and Git workflow."
      ]
    },
    {
      year: "2025 & Beyond",
      milestone: "Machine Learning & AI Engineering Exploration",
      badge: "Current Focus",
      summary: "Currently studying mathematical foundations of neural networks, regression models, and modern AI stacks.",
      details: [
        "Studying matrix calculus, probability distributions, and cost optimization.",
        "Experimenting with NumPy array transformations and image classification benchmarks.",
        "Preparing for upcoming AI hackathons and aiming for 2025 summer research/developer internships."
      ]
    }
  ],

  // Featured Projects
  projects: [
    {
      id: "student-management-system",
      title: "Student Record Management System",
      category: "Python Core",
      year: "2024",
      description: "A robust academic management utility designed for educational institutions to automate student record-keeping, GPA computations, and search indexing.",
      highlights: [
        "Full CRUD lifecycle with persistent record storage using formatted file I/O",
        "Automated semester GPA & cumulative CGPA computation engine",
        "Search records by roll number, department, or academic tier with validation",
        "Clean terminal interface with ASCII menus and defensive input handling"
      ],
      techStack: ["Python 3", "File I/O", "Data Structures", "CLI"],
      codeSnippet: `class StudentRecordSystem:
    def __init__(self, storage_path="students.db"):
        self.records = self.load_records(storage_path)
    
    def compute_cgpa(self, marks_dict):
        credits = sum(marks_dict.values())
        return round(sum(m * c for m, c in marks_dict.items()) / credits, 2)
        
    def query_by_roll(self, roll_no):
        return self.records.get(roll_no, "Student not found.")`,
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com",
      demo: "#",
      featured: true
    },
    {
      id: "c-matrix-calculator",
      title: "Scientific & Matrix Calculator",
      category: "C Programming",
      year: "2024",
      description: "A high-efficiency, zero-leak mathematical engine crafted in pure C, supporting n×m matrix operations, determinants, and system of linear equations.",
      highlights: [
        "Dynamic 2D pointer allocation for arbitrary matrix dimensions with proper deallocation",
        "Recursive Laplace expansion for N×N determinant calculation",
        "Matrix addition, scalar multiplication, transposition, and Gaussian elimination solver",
        "Stress-tested with Valgrind to ensure zero memory leaks and peak memory efficiency"
      ],
      techStack: ["C (C99)", "Dynamic Memory", "Valgrind", "Linear Algebra"],
      codeSnippet: `double** allocate_matrix(int rows, int cols) {
    double** mat = (double**)malloc(rows * sizeof(double*));
    for (int i = 0; i < rows; i++) {
        mat[i] = (double*)calloc(cols, sizeof(double));
    }
    return mat;
}
void free_matrix(double** mat, int rows) {
    for (int i = 0; i < rows; i++) free(mat[i]);
    free(mat);
}`,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com",
      demo: "#",
      featured: true
    },
    {
      id: "number-logic-game",
      title: "Adaptive Number Guessing & Heuristic Game",
      category: "Python & C",
      year: "2024",
      description: "An algorithmic game exploring binary search heuristics, player decision trees, dynamic clue feedback, and historical attempt analytics.",
      highlights: [
        "Implemented in both C and Python to contrast execution speed vs syntax brevity",
        "Dynamic hot-and-cold feedback calculated using distance metrics",
        "Session statistical analyzer providing player efficiency score vs theoretical optimum (O(log n))"
      ],
      techStack: ["Python", "C Language", "Binary Search", "Probability"],
      codeSnippet: `def binary_search_hint(secret, guess, low, high):
    distance = abs(secret - guess)
    optimal_step = (low + high) // 2
    return {
        "distance": distance,
        "clue": "Boiling Hot!" if distance <= 3 else "Warm" if distance <= 10 else "Cold",
        "theoretical_mid": optimal_step
    }`,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com",
      demo: "#",
      featured: false
    },
    {
      id: "ai-vision-classifier",
      title: "Neural Vision Classifier (In Development)",
      category: "AI & Machine Learning",
      year: "2025",
      description: "An exploratory computer vision project implementing fundamental image recognition from scratch using NumPy matrix math and perceptron layers.",
      highlights: [
        "Understands forward and backward propagation using fundamental matrix calculus",
        "Visualizing weight matrices and classification loss over training epochs with Matplotlib",
        "Serving as the springboard for deep learning studies in B.Tech CSE (AI)"
      ],
      techStack: ["Python", "NumPy", "Matplotlib", "AI Fundamentals"],
      codeSnippet: `def forward_pass(X, W1, b1, W2, b2):
    # Hidden Layer with ReLU
    Z1 = np.dot(X, W1) + b1
    A1 = np.maximum(0, Z1)
    # Output Layer with Softmax
    Z2 = np.dot(A1, W2) + b2
    exp_Z2 = np.exp(Z2 - np.max(Z2, axis=1, keepdims=True))
    A2 = exp_Z2 / np.sum(exp_Z2, axis=1, keepdims=True)
    return Z1, A1, Z2, A2`,
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      github: "https://github.com",
      demo: "#",
      featured: true
    }
  ],

  // Contact Information
  contact: {
    email: "albin.contact@example.com", // user can easily replace with their real email
    phone: "+91 98765 43210",
    college: "Thejus Engineering College",
    address: "Vellarakkad, Thrissur, Kerala — 680584",
    availability: "Available for Summer 2025 Internships, AI Hackathons & Technical Mentorship",
    socials: [
      { name: "GitHub", url: "https://github.com", handle: "github.com/albin" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/albin" },
      { name: "Email", url: "mailto:albin.contact@example.com", handle: "albin.contact@example.com" }
    ]
  },

  // Navigation Links
  navLinks: [
    { label: "ABOUT", href: "#about" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNEY", href: "#journey" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" }
  ]
};


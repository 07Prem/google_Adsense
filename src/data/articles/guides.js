/**
 * Guides Category Articles
 * Contains 6 long-form, highly detailed roadmap, interview prep, and coding practice guides.
 */

export const guidesArticles = [
  {
    id: 'coding-interview-preparation-guide',
    slug: 'coding-interview-preparation-guide',
    title: 'The Comprehensive Coding Interview Preparation Guide',
    description: 'A structured roadmap covering data structures, algorithm design patterns, system design, behavioral tips, and mock interviews to land your dream tech job.',
    category: 'coding',
    tags: ['Coding', 'Tutorials', 'Interview Prep', 'Career Guide'],
    authorSlug: 'elena-rodriguez',
    publishedDate: '2026-05-15',
    updatedDate: '2026-07-09',
    readTime: '10 min',
    featuredImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'phases', text: '1. Phase-by-Phase Prep Timeline' },
      { id: 'data-structures', text: '2. High-Priority Data Structures & Algorithms' },
      { id: 'patterns', text: '3. Master Key Algorithm Patterns' },
      { id: 'system-design', text: '4. System Design Basics' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Preparing for a technical coding interview can feel overwhelming. Technical bars at top firms are high, requiring deep knowledge of algorithms, system scalability, clean coding standards, and collaborative communication under pressure. However, interview success is not about raw IQ—it is about structured, deliberate practice. Let\'s walk through the exact steps to organize your preparation.'
      },
      {
        type: 'heading2',
        id: 'phases',
        text: '1. Phase-by-Phase Prep Timeline'
      },
      {
        type: 'list',
        items: [
          'Phase 1 (Weeks 1-4): Rebuild your foundational data structures knowledge (arrays, lists, stacks, queues, hash maps, trees, graphs). Spend time implementing them from scratch.',
          'Phase 2 (Weeks 5-8): Study coding patterns (Sliding Window, Two Pointers, BFS/DFS, Binary Search, Dynamic Programming). Practice medium problems on LeetCode/HackerRank.',
          'Phase 3 (Weeks 9-12): Practice writing code on whiteboards or raw text editors while talking out loud. Study system design basics (load balancing, caching, databases) and run mock interviews.'
        ]
      },
      {
        type: 'heading2',
        id: 'data-structures',
        text: '2. High-Priority Data Structures & Algorithms'
      },
      {
        type: 'paragraph',
        text: 'Do not try to memorize code snippets. Instead, focus on understanding the time and space complexity (Big O notation) and internal mechanics of these core constructs:'
      },
      {
        type: 'list',
        items: [
          'Hash Maps: Understand hash collisions and lookup complexities. O(1) average lookup/insert.',
          'Binary Search Trees (BST): Balanced vs unbalanced trees, pre/in/post-order traversals.',
          'Graphs: Adjacency list representation, BFS (shortest path in unweighted graphs), and DFS.'
        ]
      },
      {
        type: 'heading2',
        id: 'patterns',
        text: '3. Master Key Algorithm Patterns'
      },
      {
        type: 'paragraph',
        text: 'Instead of solving hundreds of random problems, focus on patterns. If you learn the "Sliding Window" pattern, you can solve dozens of array/string substring problems with ease.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// Classic Sliding Window pattern example (finding max sum subarray of size K)
function maxSubarraySum(arr, k) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < k) return null;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    tempSum = tempSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}`
      },
      {
        type: 'tip',
        text: 'Always explain your brute-force solution to the interviewer first, analyze its time complexity, and then outline how you plan to optimize it before writing any code.'
      }
    ],
    faqs: [
      {
        question: 'Should I use Python or JavaScript for coding interviews?',
        answer: 'Python is highly recommended due to its clean syntax and extensive built-in helper functions (like deque, heap, and dict). However, if you are interviewing for a pure frontend position, using JavaScript is fully acceptable.'
      }
    ],
    related: ['frontend-roadmap-2026', 'backend-roadmap-2026']
  },
  {
    id: 'frontend-roadmap-2026',
    slug: 'frontend-roadmap-2026',
    title: 'The Modern Frontend Developer Roadmap',
    description: 'Learn the essential technologies, frameworks, build tools, state management patterns, and testing libraries to master frontend development in 2026.',
    category: 'coding',
    tags: ['Coding', 'React', 'JavaScript', 'Career Guide'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-05-22',
    updatedDate: '2026-07-12',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'foundations', text: '1. Core Foundations' },
      { id: 'frameworks', text: '2. The JS Framework Landscape' },
      { id: 'state-management', text: '3. State Management Evolution' },
      { id: 'tools', text: '4. Build Tools & Deployment' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Frontend development moves at a rapid pace. What was industry standard two years ago has now been replaced by faster compilers, leaner state management libraries, and new server-rendering methodologies. To avoid "framework fatigue" and focus on technologies that actually advance your career, follow this structured learning roadmap.'
      },
      {
        type: 'heading2',
        id: 'foundations',
        text: '1. Core Foundations'
      },
      {
        type: 'paragraph',
        text: 'No matter what framework you choose, your skills are capped by your understanding of basic web standards:'
      },
      {
        type: 'list',
        items: [
          'HTML5: Learn semantic markup, accessibility (ARIA, WCAG), and SEO structure.',
          'CSS3: Master Flexbox, Grid, custom properties (variables), responsive breakpoints, and Tailwind CSS.',
          'ES6+ JavaScript: Promises, async/await, closures, prototypical inheritance, destructuring, and ES modules.'
        ]
      },
      {
        type: 'heading2',
        id: 'frameworks',
        text: '2. The JS Framework Landscape'
      },
      {
        type: 'paragraph',
        text: 'React remains the market leader. With React 19, features like Server Components, Actions, and the Compiler have become core concepts. Alternative systems like Vue, Svelte, and solid-js are also highly popular. Focus on understanding component composition, local state synchronization, and render life-cycles.'
      },
      {
        type: 'tip',
        text: 'Instead of learning 5 frameworks, master React and its ecosystem deeply, including routing (React Router) and server-frameworks (Next.js).'
      },
      {
        type: 'heading2',
        id: 'state-management',
        text: '3. State Management Evolution'
      },
      {
        type: 'paragraph',
        text: 'Redux is no longer mandatory for every application. Modern state approaches use lightweight atomic stores (Zustand, Recoil) or signal-based architectures to avoid massive re-renders and cut down on repetitive setup code.'
      }
    ],
    faqs: [
      {
        question: 'Should I learn TypeScript?',
        answer: 'Yes. In the professional ecosystem, over 70% of new frontend projects use TypeScript to catch type mismatch errors before code compiling. Start learning JavaScript first, then transition.'
      }
    ],
    related: ['coding-interview-preparation-guide', 'backend-roadmap-2026']
  },
  {
    id: 'backend-roadmap-2026',
    slug: 'backend-roadmap-2026',
    title: 'The Ultimate Backend Developer Roadmap',
    description: 'Master backend system engineering. Learn about database architectures, APIs, message queues, server caching, and deployment hosting.',
    category: 'coding',
    tags: ['Coding', 'Python', 'Tutorials', 'Career Guide'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-05-30',
    updatedDate: '2026-07-13',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'foundations', text: '1. Languages & Servers' },
      { id: 'databases', text: '2. Relational vs. NoSQL Databases' },
      { id: 'apis', text: '3. API Design standards' },
      { id: 'security-caching', text: '4. Caching & Security' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'While the frontend focuses on client design, layout, and responsiveness, the backend deals with data persistence, security validations, background tasks, and horizontal system scale. A backend engineer must ensure that data flows securely, queries return quickly, and systems do not collapse under heavy load spikes.'
      },
      {
        type: 'heading2',
        id: 'foundations',
        text: '1. Languages & Servers'
      },
      {
        type: 'paragraph',
        text: 'Select a primary runtime and master its asynchronous processing model:'
      },
      {
        type: 'list',
        items: [
          'Node.js (JavaScript/TypeScript): Single-threaded event loop, massive package ecosystem.',
          'Python (Django, FastAPI): Highly readable, excellent for automation, AI models, and rapid prototyping.',
          'Go (Golang): Built-in concurrency (goroutines), fast compile times, and highly suited for microservices.'
        ]
      },
      {
        type: 'heading2',
        id: 'databases',
        text: '2. Relational vs. NoSQL Databases'
      },
      {
        type: 'paragraph',
        text: 'Learn how to structure data. Use Relational databases (PostgreSQL, MySQL) for structured schema layouts with rigid joins. Use NoSQL (MongoDB, DynamoDB) for unstructured data streams, logs, and fluid document hierarchies.'
      },
      {
        type: 'tip',
        text: 'Start by mastering SQL and PostgreSQL indexing. Database performance issues are almost always solved by proper indexes and query optimization.'
      },
      {
        type: 'heading2',
        id: 'apis',
        text: '3. API Design standards'
      },
      {
        type: 'paragraph',
        text: 'Master building secure, structured endpoints. Understand HTTP methods, status codes, RESTful routing, and GraphQL query architectures.'
      }
    ],
    faqs: [
      {
        question: 'Do backend developers need to learn Docker?',
        answer: 'Yes. Docker allows you to package your database, caching layer, and server code into a container that runs identically on your laptop, staging, and production servers.'
      }
    ],
    related: ['frontend-roadmap-2026', 'coding-interview-preparation-guide']
  },
  {
    id: 'programming-mistakes-to-avoid',
    slug: 'programming-mistakes-to-avoid',
    title: '10 Common Programming Mistakes and How to Avoid Them',
    description: 'We analyze the most common programming mistakes made by developers—from hardcoding credentials and ignoring errors to over-engineering simple solutions.',
    category: 'coding',
    tags: ['Coding', 'Clean Code', 'Debugging'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-06-18',
    updatedDate: '2026-07-15',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'credentials', text: '1. Hardcoding Secrets & API Credentials' },
      { id: 'error-handling', text: '2. Silencing Try/Catch Blocks' },
      { id: 'over-engineering', text: '3. Over-Engineering Simple Requirements' },
      { id: 'version-control', text: '4. Large, Unrelated Git Commits' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'We all write bugs. However, there is a class of repetitive mistakes that developers make throughout their careers that can cause service outages, database leaks, or hard-to-maintain files. Recognizing these anti-patterns and applying disciplined habits early will drastically raise your software quality.'
      },
      {
        type: 'heading2',
        id: 'credentials',
        text: '1. Hardcoding Secrets & API Credentials'
      },
      {
        type: 'paragraph',
        text: 'Pasting database passwords, connection strings, or third-party API keys directly into your files is a recipe for disaster. If your code is pushed to a public repository (GitHub), automated scrapers will steal your keys in minutes.'
      },
      {
        type: 'warning',
        text: 'Always use environment variables (`.env` files) and load them at runtime. Add `.env` to your `.gitignore` immediately when initializing a project.'
      },
      {
        type: 'heading2',
        id: 'error-handling',
        text: '2. Silencing Try/Catch Blocks'
      },
      {
        type: 'paragraph',
        text: 'Catching an exception but leaving the catch block empty to "prevent crash reports" makes debugging a nightmare. If a failure occurs, the code fails silently, leaving your app in an inconsistent state.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// BAD PRACTICE:
try {
  fetchData();
} catch (e) {}

// GOOD PRACTICE:
try {
  fetchData();
} catch (error) {
  console.error("Data fetch failed:", error);
  showUserFeedbackMessage("We could not fetch data. Please try again.");
  reportErrorToTelemetry(error);
}`
      },
      {
        type: 'heading2',
        id: 'over-engineering',
        text: '3. Over-Engineering Simple Requirements'
      },
      {
        type: 'paragraph',
        text: 'Developers love to build abstract, generalized systems. However, writing a factory-wrapper plugin architecture for a simple form leads to bloated codebases that are hard for junior developers to understand. Follow the KISS principle: Keep It Simple, Stupid.'
      }
    ],
    faqs: [
      {
        question: 'What is YAGNI?',
        answer: 'YAGNI stands for "You Aren\'t Gonna Need It". It is a software engineering rule stating that you should not add features or abstractions until they are explicitly required.'
      }
    ],
    related: ['clean-code-principles-developers', 'ultimate-debugging-checklist']
  },
  {
    id: 'clean-code-principles-developers',
    slug: 'clean-code-principles-developers',
    title: 'Clean Code Principles: How to Write Readable, Maintainable Software',
    description: 'Learn practical principles to make your code clean. We explain descriptive naming, single responsibility functions, comments usage, and DRY design.',
    category: 'coding',
    tags: ['Coding', 'Clean Code', 'Best Practices'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-06-28',
    updatedDate: '2026-07-16',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1510519138101-570d1dca3d66?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'meaningful-names', text: '1. Use Meaningful, Pronounceable Names' },
      { id: 'functions', text: '2. Functions Should Do One Thing' },
      { id: 'comments', text: '3. Good Comments vs. Bad Comments' },
      { id: 'solid', text: '4. SOLID Principles Explained Simply' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Clean code is code that is easy to read, easy to understand, and easy to change. Clean code looks like it was written by someone who cares. Remember, you write code for other developers first, and the compiler second. Let\'s explore practical paradigms to elevate your code styling.'
      },
      {
        type: 'heading2',
        id: 'meaningful-names',
        text: '1. Use Meaningful, Pronounceable Names'
      },
      {
        type: 'paragraph',
        text: 'Variables should declare their intent. Avoid single-letter variables (except in short loop indexes) or obscure abbreviations.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// BAD:
const d = new Date();
const elapsed = d - start;

// GOOD:
const currentDate = new Date();
const elapsedTimeInSeconds = currentDate - startTime;`
      },
      {
        type: 'heading2',
        id: 'functions',
        text: '2. Functions Should Do One Thing'
      },
      {
        type: 'paragraph',
        text: 'A function should have one responsibility and do it well. If a function loads a file, parses the data, saves it to a database, and emails a receipt, split it into four separate modular functions.'
      },
      {
        type: 'tip',
        text: 'If your function is longer than 20-30 lines, or contains nested loops and conditionals, it is likely doing too many things and should be broken down.'
      },
      {
        type: 'heading2',
        id: 'comments',
        text: '3. Good Comments vs. Bad Comments'
      },
      {
        type: 'paragraph',
        text: 'Do not use comments to explain bad code. Refactor the code so it explains itself. Use comments to explain *why* something is done, rather than *what* is done. For instance, explaining a weird math equation, or a hack to fix an external API bug is a great use of comments.'
      }
    ],
    faqs: [
      {
        question: 'What is DRY?',
        answer: 'DRY stands for "Don\'t Repeat Yourself". It promotes reducing duplicate code by extracting repeated logic into reusable utilities or functions.'
      }
    ],
    related: ['programming-mistakes-to-avoid', 'ultimate-debugging-checklist']
  },
  {
    id: 'ultimate-debugging-checklist',
    slug: 'ultimate-debugging-checklist',
    title: 'The Ultimate Debugging Checklist for Software Engineers',
    description: 'A step-by-step diagnostic workflow to isolate bugs, verify variables, audit dependencies, and solve complex application crashes systematic and fast.',
    category: 'coding',
    tags: ['Coding', 'Debugging', 'Best Practices'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-07-10',
    updatedDate: '2026-07-17',
    readTime: '7 min',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'isolate', text: '1. Isolate the Variable Input' },
      { id: 'reproduce', text: '2. Create a Minimal Reproducible Case' },
      { id: 'check-assumptions', text: '3. Verify and Audit Core Assumptions' },
      { id: 'rubber-duck', text: '4. Use Rubber Duck Debugging' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Debugging is an essential part of software engineering. When your application crashes, or database outputs are wrong, randomly changing code and hitting refresh is an inefficient waste of time. Professional developers approach debugging with a scientific, structured checklist.'
      },
      {
        type: 'heading2',
        id: 'isolate',
        text: '1. Isolate the Variable Input'
      },
      {
        type: 'paragraph',
        text: 'Before reading code, look at your inputs. What data triggers the failure? Are there null parameters, strange string characters, or empty arrays? Pinpoint exactly where the input diverges from the expected shape.'
      },
      {
        type: 'heading2',
        id: 'reproduce',
        text: '2. Create a Minimal Reproducible Case'
      },
      {
        type: 'paragraph',
        text: 'Strip away complexity. If the bug is inside a massive page, extract the failing function or component into an isolated environment (like a scratch script, or CodeSandbox). If you can reproduce the failure with 10 lines of code, finding the bug is trivial.'
      },
      {
        type: 'warning',
        text: 'Always check if the error is caused by cached values. Clear browser caches, local storage, and database caches before starting deep research.'
      },
      {
        type: 'heading2',
        id: 'check-assumptions',
        text: '3. Verify and Audit Core Assumptions'
      },
      {
        type: 'paragraph',
        text: 'Every bug exists because something you *believe* is true is actually false. Verify everything. Check that your arguments are formatted correctly, databases are connected, APIs are returning 200, and helper modules are imported properly.'
      },
      {
        type: 'heading2',
        id: 'rubber-duck',
        text: '4. Use Rubber Duck Debugging'
      },
      {
        type: 'paragraph',
        text: 'Explain your code line-by-line to an inanimate object (like a rubber duck) or write it down in a chat message. By forcing your brain to translate abstract code into descriptive spoken language, you will often spot the logic error yourself before finishing the explanation.'
      }
    ],
    faqs: [
      {
        question: 'What is bisect debugging?',
        answer: 'Bisect debugging is a search pattern where you disable half of your code or checkout older git commits halfway back to find exactly when and where the bug was introduced.'
      }
    ],
    related: ['programming-mistakes-to-avoid', 'clean-code-principles-developers']
  }
];

/**
 * Programming Category Articles (Part 1)
 * Contains 7 long-form programming and debugging articles.
 */

export const programming1Articles = [
  {
    id: 'react-debugging-tips',
    slug: 'react-debugging-tips',
    title: 'Top React Debugging Tips Every Developer Should Master',
    description: 'Learn how to inspect component renders, trace prop updates, leverage React Developer Tools, handle hydration errors, and debug state leaks effectively.',
    category: 'react',
    tags: ['React', 'Debugging', 'JavaScript', 'Web Development'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-05-10',
    updatedDate: '2026-07-15',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'dev-tools', text: '1. Mastering React DevTools' },
      { id: 'tracing-renders', text: '2. Tracing Redundant Renders' },
      { id: 'hydration-errors', text: '3. Solving Hydration Mismatch Errors' },
      { id: 'state-inspector', text: '4. Inspecting State & Closure Logs' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'React development is highly fluid, but debugging complex rendering behavior, nested state updates, and component life-cycles can easily turn into a massive puzzle. React 19 introduces cleaner compiler operations, but runtime bugs, layout mismatches, and memory leaks still require a solid diagnostic strategy. Let\'s review core debugging methods to make web engineering straightforward.'
      },
      {
        type: 'heading2',
        id: 'dev-tools',
        text: '1. Mastering React DevTools'
      },
      {
        type: 'paragraph',
        text: 'The official React Developer Tools extension is crucial. It lets you inspect the rendered tree, read local props, inspect context providers, and check hooks. Utilize the "Profiler" tab to record performance, mapping out exactly which component took the longest to process.'
      },
      {
        type: 'tip',
        text: 'Enable "Highlight updates when components render" in React DevTools settings. This flashes colorful borders on screen when elements render, helping you spot re-render cycles instantly.'
      },
      {
        type: 'heading2',
        id: 'tracing-renders',
        text: '2. Tracing Redundant Renders'
      },
      {
        type: 'paragraph',
        text: 'Re-renders are often caused by unstable references in props or hook dependency arrays. In React 19, the compiler handles many dependency updates automatically, but manually auditing variables is still important.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// Avoid declaring objects directly in props, which changes reference on every parent render
// BAD:
<MyComponent options={{ theme: 'dark' }} />

// GOOD (Memoize option or put outside component):
const DARK_THEME_OPTIONS = { theme: 'dark' };
function Parent() {
  return <MyComponent options={DARK_THEME_OPTIONS} />;
}`
      },
      {
        type: 'heading2',
        id: 'hydration-errors',
        text: '3. Solving Hydration Mismatch Errors'
      },
      {
        type: 'paragraph',
        text: 'If you are using Next.js or SSR rendering, hydration mismatches happen when the server-rendered HTML differs from the client-rendered output (e.g. using dynamic dates, checking client window features, or nesting tags invalidly).'
      },
      {
        type: 'warning',
        text: 'Never nest a <div> inside a <p> tag. This causes browser engine tree corrections, triggering immediate React hydration failures.'
      }
    ],
    faqs: [
      {
        question: 'Why does my React state log the old value?',
        answer: 'React state updates are batched and asynchronous. Logging state immediately after calling setState will print the previous value because the new value is only available in the subsequent render cycle.'
      }
    ],
    related: ['react-performance-optimization', 'ultimate-debugging-checklist']
  },
  {
    id: 'top-vs-code-extensions',
    slug: 'top-vs-code-extensions',
    title: 'Top VS Code Extensions to Maximize Coding Productivity',
    description: 'An expert compilation of the best Visual Studio Code extensions for formatting, git tracking, path autocompletion, and visual aesthetics.',
    category: 'tutorials',
    tags: ['VS Code Tips', 'Productivity', 'Developer Setup'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-05-18',
    updatedDate: '2026-07-10',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'formatting', text: '1. Formatting & Code Style' },
      { id: 'git-extensions', text: '2. Git Integrations' },
      { id: 'productivity', text: '3. Path Navigation & Snippets' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Visual Studio Code is the most popular editor among software developers, largely due to its extensive extension ecosystem. With the right tools, you can automate styling, spot errors before running code, navigate branches easily, and code with high visual feedback.'
      },
      {
        type: 'heading2',
        id: 'formatting',
        text: '1. Formatting & Code Style'
      },
      {
        type: 'list',
        items: [
          'Prettier: The ultimate opinionated code formatter. It parses your files and reprints them consistently according to rules (spacing, semicolons, brackets).',
          'ESLint: Analyzes your JS/TS code to spot errors, stylistic bugs, and anti-patterns. Use the auto-fix on save option to keep code clean.'
        ]
      },
      {
        type: 'tip',
        text: 'Configure VS Code to format on save by adding "editor.formatOnSave": true to your user settings JSON file.'
      },
      {
        type: 'heading2',
        id: 'git-extensions',
        text: '2. Git Integrations'
      },
      {
        type: 'paragraph',
        text: 'Extensions like GitLens supercharge your Git workflows. It places inline blame notes, helps you inspect historical changes line-by-line, and displays interactive branch graphs directly in the sidebar.'
      }
    ],
    faqs: [
      {
        question: 'Do too many extensions slow down VS Code?',
        answer: 'Yes. Every active extension runs in a background node process. Keep extensions under 25-30 to maintain fast startup times and editor responsiveness.'
      }
    ],
    related: ['git-tips-every-developer-should-know', 'ultimate-developer-desk-setup']
  },
  {
    id: 'linux-commands-for-beginners',
    slug: 'linux-commands-for-beginners',
    title: 'Essential Linux Commands for Beginners: Master the Terminal',
    description: 'Learn core Linux terminal operations. We cover file creation, folder operations, user permissions, process management, and network troubleshooting.',
    category: 'linux',
    tags: ['Linux', 'Tutorials', 'Terminal', 'DevOps'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-05-25',
    updatedDate: '2026-07-11',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'file-nav', text: '1. File Navigation & Operations' },
      { id: 'permissions', text: '2. Managing File Permissions' },
      { id: 'processes', text: '3. Checking & Killing Processes' },
      { id: 'networks', text: '4. Network Troubleshooting commands' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Whether you are managing local projects, configuring staging servers, or working in Docker, knowing how to navigate the command line is a fundamental skill. Using a graphic interface is slow; command tools allow you to query files, monitor memory, and edit parameters in seconds. Let\'s explore essential commands.'
      },
      {
        type: 'heading2',
        id: 'file-nav',
        text: '1. File Navigation & Operations'
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Print working directory
pwd

# List files in detailed list layout (including hidden)
ls -la

# Change directory
cd /var/www/html

# Copy folder recursively
cp -r source_folder/ destination_folder/`
      },
      {
        type: 'heading2',
        id: 'permissions',
        text: '2. Managing File Permissions'
      },
      {
        type: 'paragraph',
        text: 'Linux uses strict user permissions: Read (4), Write (2), and Execute (1). You configure these permissions using \`chmod\` for owner, group, and public scopes.'
      },
      {
        type: 'warning',
        text: 'Never use "chmod 777" on files or folders in production. This allows anyone on the server to edit or run code, creating severe security vulnerabilities.'
      }
    ],
    faqs: [
      {
        question: 'What is sudo?',
        answer: 'Sudo stands for "Superuser Do". It executes the command with administrative privileges, similar to running as Administrator in Windows.'
      }
    ],
    related: ['git-tips-every-developer-should-know', 'cybersecurity-basics-developers']
  },
  {
    id: 'javascript-tricks-clean-code',
    slug: 'javascript-tricks-clean-code',
    title: 'Modern JavaScript Tricks for Cleaner, Faster Code',
    description: 'Learn advanced JS techniques like destructuring defaults, short-circuit evaluation, optional chaining, nullish coalescing, and async execution mapping.',
    category: 'javascript',
    tags: ['JavaScript', 'Coding', 'Clean Code'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-06-01',
    updatedDate: '2026-07-12',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'optional-chaining', text: '1. Optional Chaining & Nullish Coalescing' },
      { id: 'destructuring', text: '2. Advanced Array & Object Destructuring' },
      { id: 'short-circuit', text: '3. Short-circuiting Logic' },
      { id: 'async-loops', text: '4. Resolving Async Operations in Parallel' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'JavaScript has evolved from a lightweight client scripting tool into a powerhouse runtime. Writing clean JS isn\'t just about aesthetics; it\'s about leveraging ES6+ features to write code that is readable and performs well. Let\'s explore some elegant techniques to replace old, verbose habits.'
      },
      {
        type: 'heading2',
        id: 'optional-chaining',
        text: '1. Optional Chaining & Nullish Coalescing'
      },
      {
        type: 'paragraph',
        text: 'Before optional chaining (\`?.\`), accessing nested properties on API payloads required writing verbose logic checks to prevent "cannot read property of undefined" crashes. Now, you can safely navigate hierarchies in a single line.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// OLD WAY:
const zipCode = user && user.address && user.address.zipcode ? user.address.zipcode : '00000';

// NEW WAY:
const zipCode = user?.address?.zipcode ?? '00000';`
      },
      {
        type: 'tip',
        text: 'Always use nullish coalescing (\`??\`) instead of OR (\`||\`) if you want to allow empty strings (\`""\`) or zero (\`0\`) as valid parameters.'
      },
      {
        type: 'heading2',
        id: 'destructuring',
        text: '2. Advanced Array & Object Destructuring'
      },
      {
        type: 'paragraph',
        text: 'Extract properties from objects and arrays directly into variables, assigning default values if parameters are missing.'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between let, const, and var?',
        answer: 'Const creates block-scoped variables that cannot be reassigned. Let creates block-scoped variables that can be reassigned. Var is function-scoped, suffers from hoisting, and is generally avoided in modern JS.'
      }
    ],
    related: ['react-debugging-tips', 'clean-code-principles-developers']
  },
  {
    id: 'react-performance-optimization',
    slug: 'react-performance-optimization',
    title: 'React Performance Optimization: React 19 Best Practices',
    description: 'Optimize page load times and components. We cover code splitting, React Lazy, virtual lists, useMemo profiling, and memoization guidelines.',
    category: 'react',
    tags: ['React', 'Performance', 'JavaScript', 'Web Development'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-06-08',
    updatedDate: '2026-07-14',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'code-splitting', text: '1. Code Splitting & Dynamic Imports' },
      { id: 'render-profiling', text: '2. Profiling & Minimizing Renders' },
      { id: 'lists', text: '3. Virtualizing Long Lists' },
      { id: 'bundle-size', text: '4. Auditing Third-Party Bundle Sizes' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'A fast user experience directly impacts SEO ratings and conversion rates. When web apps grow, large bundle sizes and inefficient components can make interactions feel sluggish. React 19 automates many optimizations, but developers must still design code structure to minimize loading lag.'
      },
      {
        type: 'heading2',
        id: 'code-splitting',
        text: '1. Code Splitting & Dynamic Imports'
      },
      {
        type: 'paragraph',
        text: 'By default, bundlers pack your entire application into a single JavaScript bundle file. This forces users to download the checkout, settings, and profile code even if they only visit the landing page. Code splitting loads components dynamically only when they are needed.'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `import React, { Suspense, lazy } from 'react';

// Load page component only on route access
const Dashboard = lazy(() => import('./pages/Dashboard'));

function App() {
  return (
    <Suspense fallback={<div>Loading Dashboard...</div>}>
      <Dashboard />
    </Suspense>
  );
}`
      },
      {
        type: 'tip',
        text: 'Wrap page routing directories in Suspense containers to ensure initial files remain small and fast to download.'
      },
      {
        type: 'heading2',
        id: 'render-profiling',
        text: '2. Profiling & Minimizing Renders'
      },
      {
        type: 'paragraph',
        text: 'If input inputs or keystrokes lag, components are likely re-rendering unnecessarily. Use React DevTools Profiler to identify long renders and wrap expensive calculations in \`useMemo\` or components in \`memo\` where appropriate.'
      }
    ],
    faqs: [
      {
        question: 'When should I avoid useMemo and useCallback?',
        answer: 'Do not use them for cheap calculations or short functions. The overhead of comparing dependency arrays can sometimes exceed the rendering savings. Only memoize heavy logic, complex array searches, or stable function references passed as props.'
      }
    ],
    related: ['react-debugging-tips', 'javascript-tricks-clean-code']
  },
  {
    id: 'python-automation-scripts',
    slug: 'python-automation-scripts',
    title: 'Practical Python Automation Scripts for Everyday Tasks',
    description: 'Learn how to automate daily office tasks using Python. We write scripts for file renaming, web scraping, email notifications, and PDF data extraction.',
    category: 'python',
    tags: ['Python', 'Tutorials', 'Automation', 'Terminal'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-06-15',
    updatedDate: '2026-07-15',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'file-renamer', text: '1. Automating Bulk File Renaming' },
      { id: 'web-scraper', text: '2. Web Scraping with Beautiful Soup' },
      { id: 'pdf-extractor', text: '3. Extracting Text from PDF Invoices' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'As programmers and professionals, we often waste hours on repetitive manual tasks—renaming folders, copying data from sheets, checking sites for pricing updates, or parsing document forms. Python is the premier scripting language for automation, featuring a massive library ecosystem that makes task automation simple. Let\'s write working scripts to handle these workflows.'
      },
      {
        type: 'heading2',
        id: 'file-renamer',
        text: '1. Automating Bulk File Renaming'
      },
      {
        type: 'paragraph',
        text: 'If you have directories containing thousands of files with messy names, renaming them manually is impossible. We can write a Python script using the native \`os\` library to rename them systematically.'
      },
      {
        type: 'code',
        language: 'python',
        code: `import os

def rename_files(directory, prefix):
    # Loop over directory files and rename sequentially
    for index, filename in enumerate(os.listdir(directory)):
        extension = os.path.splitext(filename)[1]
        new_name = f"{prefix}_{index}{extension}"
        source = os.path.join(directory, filename)
        destination = os.path.join(directory, new_name)
        os.rename(source, destination)
        print(f"Renamed {filename} to {new_name}")

# rename_files('./raw_photos', 'vacation_2026')`
      },
      {
        type: 'heading2',
        id: 'web-scraper',
        text: '2. Web Scraping with Beautiful Soup'
      },
      {
        type: 'paragraph',
        text: 'Scraping enables you to gather pricing info, news articles, or catalog records from pages that lack APIs.'
      },
      {
        type: 'warning',
        text: 'Always check website Terms of Service and robots.txt files before running automation scrapers to ensure scraping is allowed and does not overload servers.'
      }
    ],
    faqs: [
      {
        question: 'What libraries are best for Python web automation?',
        answer: 'For static pages, use Requests and BeautifulSoup. For dynamic JavaScript-heavy pages, use Selenium, Playwright, or Pyppeteer to simulate a real browser.'
      }
    ],
    related: ['linux-commands-for-beginners', 'backend-roadmap-2026']
  },
  {
    id: 'cybersecurity-basics-developers',
    slug: 'cybersecurity-basics-developers',
    title: 'Cybersecurity Basics: How to Secure Your Web Applications',
    description: 'Learn the core principles of web application security. We explain SQL injection prevention, XSS mitigation, secure cookie policies, and authentication safety.',
    category: 'cybersecurity',
    tags: ['Cybersecurity', 'Best Practices', 'Backend', 'Security'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-06-22',
    updatedDate: '2026-07-16',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'owasp', text: '1. Understanding OWASP Top 10' },
      { id: 'sql-injection', text: '2. Preventing SQL Injection' },
      { id: 'xss', text: '3. Mitigating Cross-Site Scripting (XSS)' },
      { id: 'cookies-auth', text: '4. Securing Cookies & Session Storage' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Building web applications that function is only half the battle. You must also ensure that malicious actors cannot steal database records, inject malicious scripts, hijack user sessions, or knock your services offline. Modern web frameworks handle basic security automatically, but developers must understand vulnerability vectors to keep systems secure.'
      },
      {
        type: 'heading2',
        id: 'owasp',
        text: '1. Understanding OWASP Top 10'
      },
      {
        type: 'paragraph',
        text: 'The Open Web Application Security Project (OWASP) regularly publishes a list of the most critical security vulnerabilities. Learn these risks—such as broken authentication, cryptographic failures, and injection bugs—so you can audit your projects systematically.'
      },
      {
        type: 'heading2',
        id: 'sql-injection',
        text: '2. Preventing SQL Injection'
      },
      {
        type: 'paragraph',
        text: 'SQL injection happens when unsanitized user inputs are concatenated directly into raw database queries, allowing attackers to execute commands (like dropping tables or bypassing login controls).'
      },
      {
        type: 'code',
        language: 'javascript',
        code: `// VULNERABLE TO INJECTION:
const query = "SELECT * FROM users WHERE email = '" + userInput + "'";

// SECURE (Use parameterized queries or ORM):
const query = "SELECT * FROM users WHERE email = $1";
db.query(query, [userInput]);`
      },
      {
        type: 'tip',
        text: 'Never concatenate inputs into queries. Always use parametrized parameters or database Object Relational Mappers (ORMs like Prisma, Mongoose, or SQLAlchemy).'
      },
      {
        type: 'heading2',
        id: 'xss',
        text: '3. Mitigating Cross-Site Scripting (XSS)'
      },
      {
        type: 'paragraph',
        text: 'XSS occurs when malicious scripts are injected into web pages and executed by visitor browsers. Sanitize inputs and configure Content Security Policies (CSP) to limit the sources from which scripts can execute.'
      }
    ],
    faqs: [
      {
        question: 'What is HTTPS and is it enough?',
        answer: 'HTTPS encrypts data in transit, preventing intercept attacks (man-in-the-middle). However, it does not protect against database compromises, SQL injection, XSS, or weak passwords.'
      }
    ],
    related: ['linux-commands-for-beginners', 'backend-roadmap-2026']
  }
];

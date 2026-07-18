/**
 * Programming Category Articles (Part 2)
 * Contains another 7 long-form software development and workflow optimization articles.
 */

export const programming2Articles = [
  {
    id: 'windows-optimization-guide',
    slug: 'windows-optimization-guide',
    title: 'The Developer\'s Windows 11 Optimization Guide',
    description: 'Optimize Windows 11 for development. We cover hardware virtualization, WSL2 setups, terminal customizations, and bloatware cleanups.',
    category: 'windows',
    tags: ['Windows', 'Developer Setup', 'Terminal', 'Productivity'],
    authorSlug: 'marcus-thornton',
    publishedDate: '2026-05-14',
    updatedDate: '2026-07-10',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'wsl2', text: '1. Setting Up WSL2 (Windows Subsystem for Linux)' },
      { id: 'windows-terminal', text: '2. Customizing Windows Terminal & PowerShell' },
      { id: 'performance-tweaks', text: '3. Disabling Telemetry & System Bloat' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'For a long time, macOS and Linux were the undisputed choices for web developers. Windows was plagued by slow terminal interactions and package compilation conflicts. With the release of Windows 11 and the maturation of Windows Subsystem for Linux (WSL2), Windows has become a highly efficient, customizable development environment. Let\'s walk through how to configure it.'
      },
      {
        type: 'heading2',
        id: 'wsl2',
        text: '1. Setting Up WSL2 (Windows Subsystem for Linux)'
      },
      {
        type: 'paragraph',
        text: 'WSL2 runs a real, lightweight Linux kernel inside Windows, allowing you to run Ubuntu, Debian, or Fedora command utilities alongside your standard Windows programs. Files can be shared seamlessly, and Node/Docker packages compile at native Linux speeds.'
      },
      {
        type: 'code',
        language: 'powershell',
        code: `# Open PowerShell as Administrator and run:
wsl --install

# Reboot your computer, then configure your Linux user password.`
      },
      {
        type: 'tip',
        text: 'Always store your coding projects inside the Linux file system (e.g. \`~/projects/\` or \`/home/username/\`) rather than mounting Windows directories (\`/mnt/c/\`). Compiling across file boundaries is significantly slower.'
      },
      {
        type: 'heading2',
        id: 'windows-terminal',
        text: '2. Customizing Windows Terminal & PowerShell'
      },
      {
        type: 'paragraph',
        text: 'Replace the legacy Command Prompt with Windows Terminal. You can configure multiple tabs, use custom theme colors, install Oh-My-Posh for terminal themes, and integrate Git status markers right in your prompt.'
      }
    ],
    faqs: [
      {
        question: 'Should I install Node.js on Windows or inside WSL2?',
        answer: 'Install Node.js, Git, and Docker inside your WSL2 Linux shell. Keep your Windows installation clean and use VS Code from Windows to connect to WSL2 using the Remote-WSL extension.'
      }
    ],
    related: ['linux-commands-for-beginners', 'ultimate-developer-desk-setup']
  },
  {
    id: 'github-collaboration-guide',
    slug: 'github-collaboration-guide',
    title: 'The Developer\'s Guide to GitHub Collaboration',
    description: 'Master pull request reviews, fork hierarchies, issue templates, actions, automated integrations, and release tags for professional projects.',
    category: 'tutorials',
    tags: ['Git Tips', 'Productivity', 'Coding', 'GitHub'],
    authorSlug: 'elena-rodriguez',
    publishedDate: '2026-05-24',
    updatedDate: '2026-07-12',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'pr-workflows', text: '1. Designing Clean Pull Request Workflows' },
      { id: 'branch-protection', text: '2. Setting Up Branch Protection Rules' },
      { id: 'ci-cd', text: '3. Intro to GitHub Actions CI/CD' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Knowing how to write code individually is only a fraction of working as a professional software engineer. Most software is built in teams, meaning collaboration workflows dictate how fast code is merged, reviewed, tested, and deployed. GitHub is the standard portal for this collaboration. Let\'s review best-practices for working in repositories.'
      },
      {
        type: 'heading2',
        id: 'pr-workflows',
        text: '1. Designing Clean Pull Request Workflows'
      },
      {
        type: 'paragraph',
        text: 'A clean Pull Request (PR) is small, focused, and includes a clear description. Avoid grouping database edits, UI redesigns, and helper refactoring into a single PR. Smaller commits are easier to review, test, and merge without conflicts.'
      },
      {
        type: 'tip',
        text: 'Write detailed PR descriptions outlining: (1) what changes were made, (2) how to manually test them, and (3) screenshots/recordings of any visual UI changes.'
      },
      {
        type: 'heading2',
        id: 'branch-protection',
        text: '2. Setting Up Branch Protection Rules'
      },
      {
        type: 'paragraph',
        text: 'Prevent developers from pushing directly to master or main branches. Set up branch protection rules that require: (1) at least one approved peer review, (2) successful build status tests, and (3) linear git histories.'
      }
    ],
    faqs: [
      {
        question: 'What is the difference between Git and GitHub?',
        answer: 'Git is the local open-source version control software you run on your computer. GitHub is a cloud hosting service that stores your Git repositories online and provides team tooling (PRs, Issues, Actions).'
      }
    ],
    related: ['git-tips-every-developer-should-know', 'clean-code-principles-developers']
  },
  {
    id: 'git-tips-every-developer-should-know',
    slug: 'git-tips-every-developer-should-know',
    title: 'Git Tips and Tricks Every Developer Should Know',
    description: 'Master intermediate and advanced Git commands like interactive rebase, cherry-pick, stashes, git bisect, reflog, and aliases.',
    category: 'tutorials',
    tags: ['Git Tips', 'Tutorials', 'Terminal', 'Productivity'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-06-03',
    updatedDate: '2026-07-12',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1556075798-482a629b36d2?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'interactive-rebase', text: '1. Interactive Rebase & Squashing Commits' },
      { id: 'cherry-pick', text: '2. Cherry-Picking Single Commits' },
      { id: 'git-stash', text: '3. Stashing Local Changes' },
      { id: 'git-reflog', text: '4. Salvaging Lost Commits with Reflog' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Git is an incredibly powerful version control engine, yet most developers limit their usage to basic actions: commit, push, pull, and clone. When merge conflicts arise, or commits are lost, they panic or clone the repository again. Mastering a few intermediate Git commands will make your workflow smooth and stress-free.'
      },
      {
        type: 'heading2',
        id: 'interactive-rebase',
        text: '1. Interactive Rebase & Squashing Commits'
      },
      {
        type: 'paragraph',
        text: 'Interactive rebasing allows you to tidy up your commit history before pushing. You can merge dozen messy "wip" commits into a single clean commit, reword log descriptions, or delete accidental commits.'
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Start an interactive rebase for the last 5 commits
git rebase -i HEAD~5

# A text editor will open. Change 'pick' to 'squash' or 's' for the commits you want to merge.`
      },
      {
        type: 'heading2',
        id: 'cherry-pick',
        text: '2. Cherry-Picking Single Commits'
      },
      {
        type: 'paragraph',
        text: 'If a coworker wrote a bug-fix on a separate branch, but you do not want to merge their entire branch, you can pull that specific commit onto your branch using its hash ID.'
      },
      {
        type: 'code',
        language: 'bash',
        code: `# Pull a specific commit hash onto your current branch
git cherry-pick <commit-hash-id>`
      },
      {
        type: 'tip',
        text: 'Define git command aliases in your terminal configuration (e.g. \`alias gs="git status"\`, \`alias gp="git push"\`) to save keyboard typing time.'
      }
    ],
    faqs: [
      {
        question: 'What is git reflog?',
        answer: 'Git reflog lists every action you have taken locally (checkouts, merges, rebases). It is your ultimate safety net—if you accidentally delete a local branch or mess up a rebase, you can find the commit hash here and restore it.'
      }
    ],
    related: ['github-collaboration-guide', 'linux-commands-for-beginners']
  },
  {
    id: 'node-js-complete-guide',
    slug: 'node-js-complete-guide',
    title: 'The Complete Guide to Node.js for Frontend Developers',
    description: 'Learn the core Node.js concepts including event loop cycles, file stream modules, npm scripts, global variables, and packaging.',
    category: 'programming',
    tags: ['Node.js', 'JavaScript', 'Backend', 'Tutorials'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-06-14',
    updatedDate: '2026-07-13',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4b2e?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'event-loop', text: '1. The Event Loop Architecture' },
      { id: 'commonjs-esm', text: '2. CommonJS vs. ES Modules' },
      { id: 'file-system', text: '3. Managing Files with the fs Module' },
      { id: 'npm-scripts', text: '4. Mastering npm Scripts' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Node.js changed web engineering forever by allowing JavaScript to run on servers and terminals. While frontend developers write code that runs in browser environments, their local build tools, package managers, and bundling configurations run inside Node.js. Understanding Node fundamentals makes configuring bundlers and writing servers straightforward.'
      },
      {
        type: 'heading2',
        id: 'event-loop',
        text: '1. The Event Loop Architecture'
      },
      {
        type: 'paragraph',
        text: 'Unlike multithreaded runtimes (like Java or C#), Node.js operates on a single thread using an Event Loop. It delegates heavy tasks (database reads, network calls, file reading) to helper system APIs and resumes execution when they finish, preventing thread blocking.'
      },
      {
        type: 'tip',
        text: 'Avoid running CPU-intensive mathematical operations in Node.js on your main thread, as this blocks the event loop and halts all concurrent requests.'
      },
      {
        type: 'heading2',
        id: 'commonjs-esm',
        text: '2. CommonJS vs. ES Modules'
      },
      {
        type: 'paragraph',
        text: 'For a long time, Node used CommonJS module systems (\`require()\` and \`module.exports\`). Modern Node.js natively supports ES Modules (\`import\` and \`export\`). Set `"type": "module"` in your \`package.json\` to use ES module syntax.'
      }
    ],
    faqs: [
      {
        question: 'What is package-lock.json?',
        answer: 'Package-lock.json records the exact dependency version hierarchy installed in your node_modules, ensuring that collaborators install identical packages.'
      }
    ],
    related: ['javascript-tricks-clean-code', 'rest-api-design-tutorial']
  },
  {
    id: 'rest-api-design-tutorial',
    slug: 'rest-api-design-tutorial',
    title: 'REST API Design Tutorial: Best Practices for Developers',
    description: 'Learn how to build scalable, secure REST APIs. We explain URL structures, HTTP verbs, status codes, query pagination, and token rate limits.',
    category: 'tutorials',
    tags: ['Programming', 'APIs', 'Backend', 'Tutorials'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-06-21',
    updatedDate: '2026-07-14',
    readTime: '9 min',
    featuredImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'endpoints', text: '1. Structuring Nouns and Endpoints' },
      { id: 'http-methods', text: '2. Mapping HTTP Verbs' },
      { id: 'status-codes', text: '3. Returning Proper Status Codes' },
      { id: 'pagination-filtering', text: '4. Adding Pagination & Filtering' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'APIs are the digital bridges that connect databases, services, websites, and mobile apps. Designing a REST API is simple, but designing one that is intuitive, version-controlled, fast, and secure requires adherence to standards. Let\'s outline the core principles of API design.'
      },
      {
        type: 'heading2',
        id: 'endpoints',
        text: '1. Structuring Nouns and Endpoints'
      },
      {
        type: 'paragraph',
        text: 'URLs should reference resource collections (nouns), never actions (verbs). Keep URLs lowercase, readable, and plural.'
      },
      {
        type: 'code',
        language: 'text',
        code: `# POOR DESIGN:
GET /getNewUsers
POST /delete_user/123

# EXCELLENT DESIGN:
GET /users
DELETE /users/123`
      },
      {
        type: 'heading2',
        id: 'http-methods',
        text: '2. Mapping HTTP Verbs'
      },
      {
        type: 'paragraph',
        text: 'Map your actions to correct HTTP verbs: GET for reading data, POST for creating records, PUT/PATCH for editing values, and DELETE for removing fields.'
      },
      {
        type: 'tip',
        text: 'GET endpoints must be idempotent. They should query and return data, but never change records or update database schemas.'
      }
    ],
    faqs: [
      {
        question: 'Why should I version my API?',
        answer: 'API interfaces change. Placing version paths (e.g. \`/api/v1/users\`) ensures that updates do not break legacy mobile apps or client sites already deployed.'
      }
    ],
    related: ['rest-vs-graphql', 'node-js-complete-guide']
  },
  {
    id: 'rest-vs-graphql',
    slug: 'rest-vs-graphql',
    title: 'REST vs. GraphQL: Which API Style Should You Choose?',
    description: 'An objective head-to-head comparison between REST and GraphQL. We analyze over-fetching, under-fetching, caching mechanisms, and server tools.',
    category: 'programming',
    tags: ['Programming', 'APIs', 'REST', 'GraphQL'],
    authorSlug: 'sarah-jenkins',
    publishedDate: '2026-06-30',
    updatedDate: '2026-07-16',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'differences', text: 'Core Structural Differences' },
      { id: 'rest-pros-cons', text: 'REST: Pros and Cons' },
      { id: 'graphql-pros-cons', text: 'GraphQL: Pros and Cons' },
      { id: 'verdict', text: 'The Verdict: Which to Choose?' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'For years, REST was the undisputed framework for API integrations. Facebook introduced GraphQL to solve network over-fetching on mobile applications, creating a powerful alternative. While some engineers claim GraphQL replaces REST, both systems have distinct strengths and compromises.'
      },
      {
        type: 'heading2',
        id: 'differences',
        text: 'Core Structural Differences'
      },
      {
        type: 'paragraph',
        text: 'REST utilizes multiple endpoints to return structured, fixed data shapes from the server. GraphQL uses a single endpoint (\`/graphql\`), allowing the client to submit a query script defining the exact data fields they want returned.'
      },
      {
        type: 'pros-cons',
        pros: [
          'REST: Built-in HTTP caching, simple debugging, standard tool integrations, low learning curve.',
          'GraphQL: Eliminates over-fetching (getting fields you do not need) and under-fetching (making multiple API calls), self-documenting schema.'
        ],
        cons: [
          'REST: Over-fetching data wastes mobile bandwidth, requires multiple round-trips to display a single page.',
          'GraphQL: Complicated cache configuration, vulnerable to query loops that crash servers, requires custom libraries.'
        ]
      },
      {
        type: 'tip',
        text: 'For simple public integrations and basic CRUD applications, REST remains the best choice. For complex microservices or platforms with dynamic client data layouts, GraphQL is excellent.'
      }
    ],
    faqs: [
      {
        question: 'Can I use both in the same project?',
        answer: 'Absolutely. Many developers run a REST server for authentication and file uploads (which GraphQL handles poorly), while running a GraphQL proxy for dashboard widgets.'
      }
    ],
    related: ['rest-api-design-tutorial', 'node-js-complete-guide']
  },
  {
    id: 'chrome-extensions-developer-productivity',
    slug: 'chrome-extensions-developer-productivity',
    title: 'Best Chrome Extensions for Web Developer Productivity',
    description: 'Boost your web debugging. We review extensions for inspecting styles, simulating viewports, measuring performance, and auditing accessibility.',
    category: 'tutorials',
    tags: ['VS Code Tips', 'Productivity', 'Chrome Extensions'],
    authorSlug: 'alex-chen',
    publishedDate: '2026-07-06',
    updatedDate: '2026-07-17',
    readTime: '8 min',
    featuredImage: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800&h=450',
    toc: [
      { id: 'dev-extensions', text: 'Top Browser Extensions for Programmers' },
      { id: 'styles-colors', text: '1. Styling & Color Audits' },
      { id: 'performance-seo', text: '2. Performance & SEO Audits' },
      { id: 'accessibility', text: '3. Accessibility Checks' },
      { id: 'faqs', text: 'Frequently Asked Questions' }
    ],
    content: [
      {
        type: 'paragraph',
        text: 'Web browsers are the canvas on which web apps are built. While native Chrome DevTools are highly capable, installing a few targeted productivity extensions can help you test responsiveness, match colors, analyze JSON payloads, and audit contrast limits in seconds.'
      },
      {
        type: 'heading2',
        id: 'dev-extensions',
        text: 'Top Browser Extensions for Programmers'
      },
      {
        type: 'list',
        items: [
          'WhatFont: Inspect fonts and rendering metrics inline simply by hovering your mouse.',
          'ColorZilla: Eyedropper tool to copy exact hex color values from any page element.',
          'JSON Viewer: Formats raw browser JSON outputs into expandable, colorful trees.',
          'Lighthouse: Audits page performance, accessibility, SEO tags, and best practices directly in Chrome.'
        ]
      },
      {
        type: 'tip',
        text: 'Use Lighthouse audits locally during development to identify slow images or broken ARIA tags before publishing code.'
      }
    ],
    faqs: [
      {
        question: 'Do extensions slow down browser speeds?',
        answer: 'Yes. Extensions inject content script wrappers into every page you visit. Disable extensions you do not use daily or configure them to load "only when clicked".'
      }
    ],
    related: ['top-vs-code-extensions', 'react-performance-optimization']
  }
];

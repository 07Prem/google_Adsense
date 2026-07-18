/**
 * Authors Metadata
 * Profile data for all tech writers contributing to TechAxioz.
 */
export const authors = [
  {
    slug: 'alex-chen',
    name: 'Editorial Team',
    role: 'Senior Frontend Architect',
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="%232563EB"/><path d="M14 15 L9 20 L14 25 M26 15 L31 20 L26 25 M22 13 L18 27" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bio: 'Our Editorial Team consists of senior software engineers and technology analysts dedicated to delivering verified technical walkthroughs.',
    fullBio: 'The TechAxioz Editorial Team coordinates technical reviews, layout architecture, and performance benchmarking across our publications. Our members bring senior engineering experience from key technology firms, ensuring that every published React structure, script tutorial, and setup recommendation is safe, verified, and ready for development.',
    socials: {
      twitter: 'https://twitter.com/techaxioz',
      github: 'https://github.com/techaxioz',
      linkedin: 'https://linkedin.com/company/techaxioz'
    }
  },
  {
    slug: 'sarah-jenkins',
    name: 'TechAxioz Team',
    role: 'DevSecOps & Linux Specialist',
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="%2306B6D4"/><path d="M12 14 L18 20 L12 26 M20 25 L28 25" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bio: 'The TechAxioz DevSecOps desk specializes in automated server architectures, kernel debugging, and system configurations.',
    fullBio: 'The TechAxioz DevSecOps team is a collaborative hub of system administrators and containerization experts. We work to provide clean tutorials on Linux CLI configuration, deployment automation, container security, and DevSecOps pipelines. Every guide is tested on clean server instances before publication.',
    socials: {
      twitter: 'https://twitter.com/techaxioz',
      github: 'https://github.com/techaxioz',
      linkedin: 'https://linkedin.com/company/techaxioz'
    }
  },
  {
    slug: 'marcus-thornton',
    name: 'Admin Desk',
    role: 'Hardware Analyst & SysAdmin',
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="%230F172A"/><path d="M20 10 L12 13 V20 C12 26, 20 30, 20 30 C 20 30, 28 26, 28 20 V13 L20 10 Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    bio: 'Our Admin Desk coordinates client reviews, SSD benchmarking, and workstation setup assessments.',
    fullBio: 'The Admin and Hardware Desk delivers objective, metric-backed hardware reviews. We bench test consumer laptops, storage drives, and color-accurate monitors, matching system benchmarks against actual compiler loading speeds and layout development runtimes to verify hardware suitability for web development teams.',
    socials: {
      twitter: 'https://twitter.com/techaxioz',
      github: 'https://github.com/techaxioz',
      linkedin: 'https://linkedin.com/company/techaxioz'
    }
  },
  {
    slug: 'elena-rodriguez',
    name: 'Guest Contributor',
    role: 'AI Researcher & Advisor',
    avatar: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="%2322C55E"/><circle cx="20" cy="15" r="5" fill="white"/><path d="M12 28 C 12 23, 28 23, 28 28" stroke="white" stroke-width="2.5" stroke-linecap="round"/></svg>',
    bio: 'We host articles from guest researchers, tech mentors, and AI engineers across the dev community.',
    fullBio: 'TechAxioz frequently partners with external artificial intelligence engineers, developer educators, and tech career mentors to publish guest columns. These articles highlight the integration of generative AI within modern IDE workflows, interview preparation strategies, and technical transition paths into full-time engineering.',
    socials: {
      twitter: 'https://twitter.com/techaxioz',
      github: 'https://github.com/techaxioz',
      linkedin: 'https://linkedin.com/company/techaxioz'
    }
  }
];

export function getAuthor(slug) {
  return authors.find(author => author.slug === slug) || authors[0];
}

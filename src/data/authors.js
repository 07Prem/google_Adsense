/**
 * Authors Metadata
 * Profile data for all tech writers contributing to Demo AdSense.
 */
export const authors = [
  {
    slug: 'alex-chen',
    name: 'Alex Chen',
    role: 'Senior Frontend Architect',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Alex is a Senior Frontend Architect with 12+ years of experience specializing in React, high-performance web systems, and modern JavaScript standards.',
    fullBio: 'Alex Chen is a veteran Software Architect focusing on frontend technologies. Having worked at major technology firms and scale-ups, he designs robust component systems and speaks frequently at developers meetups. His writing explores complex React architectures, performance debugging techniques, and the nuances of functional JavaScript programming. Outside of code, Alex is an avid mechanical keyboard collector and amateur landscape photographer.',
    socials: {
      twitter: 'https://twitter.com/alexchen_dev',
      github: 'https://github.com/alexchen-dev',
      linkedin: 'https://linkedin.com/in/alexchen-dev'
    }
  },
  {
    slug: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    role: 'DevSecOps & Linux Specialist',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Sarah is an experienced DevSecOps Engineer and Linux trainer focusing on containerization, kernel tuning, and secure network infrastructures.',
    fullBio: 'Sarah Jenkins is a security consultant and Linux kernel enthusiast. Over the past decade, she has helped startups and enterprise organizations harden their server deployments, automate deployment pipelines, and design robust access controls. On Demo AdSense, she authors practical command-line guides, terminal configuration tricks, and cybersecurity best practices for app developers. She spends her free time configuring custom home lab servers and climbing outdoors.',
    socials: {
      twitter: 'https://twitter.com/sarahj_sec',
      github: 'https://github.com/sarahj-sec',
      linkedin: 'https://linkedin.com/in/sarahj-sec'
    }
  },
  {
    slug: 'marcus-thornton',
    name: 'Marcus Thornton',
    role: 'Lead Hardware Reviewer & SysAdmin',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Marcus has covered consumer hardware, monitors, and client devices for over 15 years, blending benchmarks with real-world usability tests.',
    fullBio: 'Marcus Thornton leads hardware evaluations and system setups at Demo AdSense. With a deep history as a systems administrator and hardware benchmarker, he understands exactly what developers, students, and professionals need in their setups. From SSD load times to monitor color accuracy and keyboard switches, Marcus covers hardware with rigorous objectivity. When not analyzing benchmark sheets, he builds custom audio systems and experiments with single-board computing.',
    socials: {
      twitter: 'https://twitter.com/marcust_tech',
      github: 'https://github.com/marcust-tech',
      linkedin: 'https://linkedin.com/in/marcust-tech'
    }
  },
  {
    slug: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    role: 'AI Research Lead & Career Mentor',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Elena is an AI engineer and developer mentor who covers artificial intelligence workflows and helps engineers transition into tech careers.',
    fullBio: 'Elena Rodriguez works at the intersection of AI integration and developer education. She advises engineers on utilizing AI code tools responsibly and teaches workshops on transitioning from non-traditional paths into technology careers. Her articles clarify the practical boundaries of large language models, give actionable advice on building career roadmaps, and offer guidance on navigating professional interviews. She enjoys playing chess and mentoring at local coding non-profits.',
    socials: {
      twitter: 'https://twitter.com/elena_devcoach',
      github: 'https://github.com/elena-codes',
      linkedin: 'https://linkedin.com/in/elena-rodriguez'
    }
  }
];

export function getAuthor(slug) {
  return authors.find(author => author.slug === slug) || authors[0];
}

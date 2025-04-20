import { Icons } from "@/components/icons";
import { ContactIcon, HomeIcon, MailIcon, NotebookIcon, FileIcon } from "lucide-react";

export const DATA = {
  name: "Brian Mai",
  email: "brianm17055@gmail.com",
  initials: "BM",
  url: "https://brianmai.org",
  location: "Bay Area, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "College student and part-time beekeeper 🐝 turned software engineer. I love learning new languages and recipes!",
  summary:
    "I am a first generation college student that loves to build things to help people! I enjoy playing the piano 🎹, baking 🧑‍🍳, and going to the gym 🏋️. I am always down to learn new things and meet new people so feel free to [reach out](/contact)! ",
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Kotlin",
    "SQL",
    "AWS",
    "React Native",
    "Java",
    "C++",
    "C",
    "Python",
    "Docker",
    "Kubernetes",
    "Git",
    "CI/CD",
    "DevOps",
    "Firebase",
    "MongoDB",


  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "/contact", icon: ContactIcon, label: "Contact" },

  ],
  contact: {
    email: "hello@example.com",
    tel: "+123456789",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/reakunen",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/brianemai/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:brianm17055@gmail.com",
        icon: Icons.email,
        navbar: true,
      },

    },
  },

  work: [
    {
      company: "SoFi",
      href: "https://www.sofi.com/",
      badges: [],
      location: "San Francisco, CA",
      title: "Incoming Software Engineer Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThVpuqNnZrhiAslzfyxcajIMPtPTjdSIUQ1A&s",
      start: "June 2025",
      end: "September 2025",
      description:
        "On the SAFE Anti Money Laundering team",
    },
    {
      company: "Federal Reserve Bank of San Francisco",
      badges: [],
      href: "https://sf.frb.org/",
      location: "San Francisco, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://chambermaster.blob.core.windows.net/images/members/2428/1450/MemLogo_Federal%20Reserve%20Bank%20of%20San%20Francisco%202.jpg",
      start: "June 2024",
      end: "August 2024",
      description:
        "I was on the Cash Application Delivery Services Team (Cash ADS). I supported the migration to AWS GovCloud and developed tools for resource monitoring using CloudWatch, Lambda, and Terraform. I automated cleanup processes, enforced least privilege IAM policies, and deployed a SageMaker machine learning models."
    },
    {
      company: "Cal Poly Computer Science Department",
      badges: [],
      href: "https://calpoly.edu",
      location: "San Luis Obispo, CA",
      title: "Undergraduate Researcher",
      logoUrl: "https://pbs.twimg.com/profile_images/1172636421015969797/u9pngOu-_400x400.jpg",
      start: "April 2024",
      end: "Present",
      description:
        "Developing a web and mobile application for the project: AI For Search and Rescue, under Dr. Franz Kurfess. I’m currently a research assistant developing a React and Firebase application that uses machine learning to locate missing individuals. I work on machine learning and backend integration, and frontend UI built from Figma designs."
    },
    {
      company: "E. & J. Gallo Winery",
      href: "https://gallo.com/",
      badges: [],
      location: "Modesto, CA",
      title: "Software Engineer Intern",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLRX3AxSxYlc6JO9QJS7z1t0v-8qcpz0JehQ&s",
      // logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0wULgUaiRovUUe4PLulN8_2iR_mYogHk0Tw&s",
      start: "June 2023",
      end: "August 2023",
      description:
        "I was on the DevOps & Middleware team. During my internship, I built a real-time logging dashboard using Next.js and Tailwind for DevOps and DBA teams. I integrated AWS SDK features for dynamic resource management and led the GitLab CI/CD deployment of the application.",
    },
    // {
    //   company: "Alan AI",
    //   href: "https://alan.app",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Engineer Intern",
    //   logoUrl: "https://media.licdn.com/dms/image/v2/C560BAQF8p811sSczsA/company-logo_200_200/company-logo_200_200/0/1630566886066/alanvoiceai_logo?e=2147483647&v=beta&t=212m8LqQsUMMxzLmFNTmMgFmd2ortAc3JcKxkytMWp4",
    //   start: "June 2021",
    //   end: "September 2021",
    //   description:
    //     "I created a React application that incorporated voice interaction using Alan AI’s speech-to-text API. My work focused on building robust test coverage through unit, integration, and Postman tests to ensure API reliability across web apps."
    // },
  ],
  education: [
    {
      school: "California Polytechnic State University, San Luis Obispo",
      href: "https://calpoly.edu",
      degree: "Bachelor's Degree of Computer Science (B.S.)",
      logoUrl: "https://pbs.twimg.com/profile_images/1172636421015969797/u9pngOu-_400x400.jpg",
      start: "2022",
      end: "2026",
    },
    {
      school: "Chabot College",
      href: "https://chabotcollege.edu/",
      degree: "Dual Enrollment, Computer Science",
      logoUrl: "https://embedsocial.com/admin/source-cover-photo-link/linkedin-organization/475428.jpeg",
      start: "2021",
      end: "2022",
    },
    {
      school: "KIPP King Collegiate High School",
      href: "https://king.kippnorcal.org/",
      degree: "High School Diploma",
      logoUrl: "https://uploads-prod.schola.com/school/68834/69bd1792-110d-4c31-a802-236e1df965d8",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "MaiHoney",
      href: "https://www.maihoney.com",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Created a E-Commerce website for my family's business, processed over $1,000 in revenue. Built out a CMS to manage inventory and orders.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Resend (Email)",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.maihoney.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/maihoney.png",
      video:
        "",
    },
    {
      title: "DormMe",
      href: "https://www.dormme.app",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Co-Founded a startup that allows college students to find housing and roommates. Partnered with Cal Poly and has gotten over 300+ active users. Built out a comprehensive admin page for management.",
      technologies: [
        "Next.js",
        "React Native",
        "Typescript",
        "Firebase",
        "TailwindCSS",
        "GPT Generative AI",
        "Algolia",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.dormme.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/projects/dormme.jpeg",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    }
  ],
} as const;

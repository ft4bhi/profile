import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Code, Database, ExternalLink, Github, Linkedin, Mail, Phone, Server, Wrench } from 'lucide-react';
// import ContactForm from '@/components/contact-form';

const projects = [
  {
    title: 'Scholarship Management System',
    description: 'A customizable web platform to digitize and streamline scholarship processing. Built with Next.js, PostgreSQL, and Firebase to ensure scalability and efficiency.',
    image: "/project/scholarship.png",
    imageHint: 'scholarship portal',
    tags: ['Next.js', 'PostgreSQL', 'Firebase', 'Vercel'],
    liveUrl: 'https://darsana-scholarship.vercel.app/',
    githubUrl: 'https://github.com/ft4bhi/darsanaScholarship',
  },
  {
    title: 'Craxl-Ui',
    description: 'An app that auto-generates UI code from design images to accelerate front-end development. Features a library of prebuilt, customizable components available on NPM.',
    image: "/project/craxl.png",
    imageHint: 'UI generator code',
    tags: ['React', 'NPM', 'UI/UX', 'Automation'],
    
    githubUrl: 'https://github.com/ft4bhi/mini-project2',
  },
  {
    title: 'MathsTutor QT',
    description: 'A mathematics learning application for visually impaired children using Python and QT. Resolved ~70% of existing bugs, significantly improving stability and usability.',
    image: "/project/mathtutor.png",
    imageHint: 'learning app accessibility',
    tags: ['Python', 'QT', 'Accessibility', 'Desktop'],
    
    githubUrl: 'https://github.com/ft4bhi/maths-tutor-v2',
  },
];

const skills = [
  { icon: Code, name: 'Languages', description: 'C, Java, Python, JS, TS, SQL' },
  { icon: Server, name: 'Technologies', description: 'Next.js, ReactJS, Firebase, Vercel' },
  { icon: Database, name: 'Databases', description: 'PostgreSQL, SQL, Firebase' },
  { icon: Wrench, name: 'Tools', description: 'Git, GitHub, Docker, QT' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero" className="py-20 sm:py-28 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
                ABHIRAM P S
              </h1>
              <p className="text-xl text-muted-foreground">
                Software Engineering Intern turned Team Lead with a passion for building scalable, accessible, and user-centric applications.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <a href="https://github.com/ft4bhi" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-7 w-7" />
                </a>
                <a href="https://www.linkedin.com/in/abhiram-ps-9b744924b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-7 w-7" />
                </a>
                <a href="mailto:psabhiram100@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-7 w-7" />
                </a>
              </div>
              <div className="flex justify-center md:justify-start gap-4 pt-4">
                <Button asChild size="lg">
                  <Link href="#contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#projects">
                    My Work <ArrowDown className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
                <Image
                  src="/Profile.jpeg"
                  alt="Portrait of Abhiram P S"
                  width={400}
                  height={400}
                  className="rounded-full aspect-square object-cover shadow-lg border-4 border-card"
                  data-ai-hint="profile picture man"
                  priority
                />
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 sm:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl font-headline">
            Project Showcase
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I'm proud to have worked on.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col overflow-hidden group">
                <CardHeader className="p-0">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <p className="mt-2 text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex w-full justify-between items-center">
                    <div className="flex gap-2">
                       <Button asChild variant="ghost" size="icon">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on Github`}>
                            <Github className="h-5 w-5"/>
                          </a>
                       </Button>
                       {project.liveUrl && (
  <Button asChild variant="ghost" size="icon">
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Live demo of ${project.title}`}
    >
      <ExternalLink className="h-5 w-5" />
    </a>
  </Button>
)}
                    </div>
                    {/* <Button asChild variant="link">
                      <a href={project.liveUrl}>View Details</a>
                    </Button> */}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 sm:py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-headline">
                About Me
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                As a Software Engineering Intern at Zendalona, I grew into a Team Lead role, contributing to diverse projects. I resolved critical bugs in a Zendesk-based query system, led the development of 'World Map MVP 2' with a scalable backend using PostgreSQL and Firebase, and improved 'MathsTutor QT,' an accessibility app for visually impaired children. I also designed and built a Scholarship Management System from the ground up using Next.js and later led a team of five to create an accessible chess application with Flutter.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download="AbhiramPS-Resume.pdf">
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold font-headline mb-4">My Skills</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <Card key={skill.name} className="p-4">
                    <div className="flex items-center gap-4">
                      <skill.icon className="h-8 w-8 text-primary" />
                      <div>
                        <h4 className="font-semibold text-lg">{skill.name}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 sm:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl font-headline">
              Get In Touch
            </h2>
            <p className="mt-4 text-center text-lg text-muted-foreground">
              Have a question or a project in mind? I'd love to hear from you.
            </p>
            <div className="mt-8 flex justify-center items-center flex-wrap gap-x-8 gap-y-4 text-muted-foreground">
              <a href="mailto:psabhiram100@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span>psabhiram100@gmail.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 8590680648</span>
              </div>
            </div>
            {/* <div className="mt-12">
              {/* <ContactForm /> */}
            {/* </div> */} 
          </div>
        </div>
      </section>
    </div>
  );
}
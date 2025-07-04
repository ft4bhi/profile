import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowDown, Code, Database, ExternalLink, Github, Mail, Phone, Server, Wind } from 'lucide-react';
import ContactForm from '@/components/contact-form';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, user authentication, and a Stripe-integrated checkout process. Built with a focus on performance and scalability.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'online store',
    tags: ['Next.js', 'React', 'Tailwind', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management tool that helps teams organize, track, and manage their work. Features include drag-and-drop boards, real-time updates, and notifications.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'task board',
    tags: ['React', 'Firebase', 'Zustand'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'AI Article Summarizer',
    description: 'A web application that uses a fine-tuned language model to generate concise summaries of long articles and texts, increasing reading efficiency.',
    image: 'https://placehold.co/600x400.png',
    imageHint: 'artificial intelligence',
    tags: ['Python', 'FastAPI', 'Next.js', 'AI'],
    liveUrl: '/summarizer',
    githubUrl: '#',
  },
];

const skills = [
  { icon: Code, name: 'Frontend', description: 'React, Next.js, Vue, Tailwind CSS' },
  { icon: Server, name: 'Backend', description: 'Node.js, Python, Go, SQL' },
  { icon: Database, name: 'Databases', description: 'PostgreSQL, MongoDB, Redis' },
  { icon: Wind, name: 'DevOps', description: 'Docker, k8s, GCP, Vercel' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero" className="py-24 sm:py-32 md:py-40 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline">
            Jane Doe
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl">
            A passionate software engineer dedicated to building beautiful, functional, and user-centric web applications.
          </p>
          <div className="mt-8 flex justify-center gap-4">
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
      </section>

      <section id="projects" className="py-20 sm:py-24">
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
                       <Button asChild variant="ghost" size="icon">
                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo of ${project.title}`}>
                           <ExternalLink className="h-5 w-5"/>
                         </a>
                       </Button>
                    </div>
                    <Button asChild variant="link">
                      <a href={project.liveUrl}>View Details</a>
                    </Button>
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
                I'm a software engineer with over 5 years of experience in building high-quality web applications. My expertise lies in full-stack development, with a strong passion for creating intuitive user interfaces and robust backend systems. I thrive in collaborative environments and am always eager to learn new technologies.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <a href="/resume.pdf" download="JaneDoe-Resume.pdf">
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
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

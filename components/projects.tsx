import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Projects() {
  const projects = [
    {
      title: 'Graphic Design Portfolio',
      problem: 'Clients needed a central hub to view creative branding and social media assets.',
      solution: 'Created a categorized visual portfolio showcasing modern design principles and high-quality branding.',
      result: 'Centralized asset management and improved client presentation efficiency by 40%.',
      tags: ['Canva', 'Branding', 'Graphic Design', 'WordPress'],
      image: '/pic5.png',
      link: 'https://canva.link/1mcwlrk78pjiq2k',
      github: '#',
    },
    {
      title: 'Furniro - Furniture E-commerce',
      problem: 'Online furniture store struggled with low mobile conversions and slow image loading.',
      solution: 'Built a high-performance Next.js store with optimized images and a streamlined checkout flow.',
      result: 'Achieved sub-second load times and increased mobile user engagement by 25%.',
      tags: ['Next.js', 'React', 'WordPress', 'E-commerce'],
      image: '/pic3.png',
      link: 'https://market-place-e-commerce-2025-pkwl.vercel.app/',
      github: 'https://github.com/shumailagithub/MarketPlace-E-Commerce-2025',
    },
    {
      title: 'Worship Music Player',
      problem: 'Users lacked a simple, focused platform for high-quality audio streaming of worship music.',
      solution: 'Developed a custom React music player using Web Audio API for seamless playback and transitions.',
      result: 'Provided a clutter-free listening experience with high retention and positive user feedback.',
      tags: ['React', 'WordPress', 'Web Audio API', 'Framer Motion'],
      image: '/pic1.png',
      link: 'https://web-music-player-3jyoybmnj-shumailas-projects-2588557a.vercel.app/',
      github: 'https://github.com/shumailagithub/Web-Music-Player',
    },
    {
      title: 'Blog Website',
      problem: 'Client needed an easy-to-manage blog with high SEO rankings and fast content delivery.',
      solution: 'Implemented a headless WordPress CMS with a Next.js frontend for maximum speed and SEO.',
      result: 'Increased organic search visibility by 30% and significantly reduced page bounce rates.',
      tags: ['Next.js', 'WordPress', 'Tailwind CSS', 'Blog'],
      image: '/pic4.png',
      link: 'https://blog-website-hackathon3.vercel.app/',
      github: 'https://github.com/shumailagithub/Blog_Website_Hackathon3',
    },
    {
      title: 'Personal AI Employee (FTE)',
      problem: 'Businesses struggled to find affordable ways to learn about and integrate AI automation.',
      solution: 'Developed an interactive platform exploring Physical AI and humanoid robotics for business use cases.',
      result: 'Educated dozens of clients on AI ROI and automated repetitive informational queries.',
      tags: ['Next.js', 'AI', 'Tailwind CSS', 'TypeScript'],
      image: '/pic2.png',
      link: 'https://physical-ai-humanoid-robotics-hacka-sigma.vercel.app/',
      github: 'https://github.com/shumailagithub/Hackathon-0_Personal-Ai-Employee',
    },
    {
      title: 'Creative Visual Project',
      problem: 'Digital agencies needed creative assets that blend technical accuracy with visual appeal.',
      solution: 'Produced high-fidelity UI/UX concepts and creative assets tailored for modern web standards.',
      result: 'Delivered production-ready designs that reduced development handoff time by 50%.',
      tags: ['Design', 'Creative', 'Web Development', 'UI/UX'],
      image: '/pic6.png',
      link: '#',
      github: '#',
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            My Work
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
            A selection of my recent projects, AI solutions, and creative designs
          </p>
        </div>

        {/* Updated grid to 2 columns and aspect-video for better image fitting */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="rounded-3xl overflow-hidden glass-card border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col group"
            >
              <div className="p-4">
                <Link href={project.link} target="_blank" className="block cursor-pointer">
                  <div className="relative aspect-video overflow-hidden bg-muted/30 rounded-2xl border-2 border-primary/10 group-hover:border-primary/30 transition-colors">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <p className="text-foreground font-medium text-sm">Click to view project</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="px-8 pb-8 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/5 rounded-full text-[10px] uppercase tracking-wider text-primary font-bold border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-primary">Problem:</span> <span className="text-foreground/70">"{project.problem}"</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-primary">Solution:</span> <span className="text-foreground/70">"{project.solution}"</span>
                  </p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-bold text-primary">Result:</span> <span className="text-foreground/70">"{project.result}"</span>
                  </p>
                </div>

                <div className="flex gap-4 pt-6 border-t border-primary/5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 rounded-full bg-primary/5 hover:bg-primary hover:text-white transition-all duration-300 font-bold"
                    asChild
                  >
                    <Link href={project.link} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex-1 rounded-full border border-primary/10 hover:bg-primary/5 transition-all duration-300 font-bold"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Source
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

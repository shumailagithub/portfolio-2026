import { Card } from '@/components/ui/card';
import {
  Code2,
  Bot,
  Zap,
  Globe,
  Cpu,
  Palette,
  TableProperties,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Bot,
      title: 'Agentic AI Solutions',
      description:
        'Building autonomous AI agents using LangChain and CrewAI that can reason, use tools, and complete complex business tasks independently.',
    },
    {
      icon: Code2,
      title: 'Next.js Full-Stack Dev',
      description:
        'Developing high-performance, SEO-friendly web applications using Next.js 15, TypeScript, and modern backend architectures.',
    },
    {
      icon: Palette,
      title: 'Graphic Design (Canva)',
      description:
        'Professional visual content creation using Canva, including social media posts, branding materials, and aesthetic UI elements.',
    },
    {
      icon: TableProperties,
      title: 'Smart Data Management',
      description:
        'Organizing and automating workflows using Google Sheets, including data analysis, tracking, and AI-to-Sheet integrations.',
    },
    {
      icon: Cpu,
      title: "24/7 AI Employees (FTEs)",
      description:
        'Designing digital workers that operate around the clock, handling data entry, customer support, or task execution without human help.',
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description:
        'Optimizing business processes by replacing repetitive manual work with intelligent AI-driven automation pipelines.',
    },
    {
      icon: Bot,
      title: 'Agentic AI Solutions',
      description:
        'Building autonomous AI agents using LangChain and CrewAI that can reason, use tools, and complete complex business tasks independently.',
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Specialized Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
            Delivering cutting-edge Web, AI, and Design expertise
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-3xl glass-card border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 group"
              >
                <div className="p-4 bg-primary/10 rounded-2xl w-fit mb-6 transition-transform group-hover:scale-110 group-hover:bg-primary">
                  <Icon className="h-7 w-7 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/60 leading-relaxed font-medium">
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

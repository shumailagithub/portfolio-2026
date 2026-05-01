import { Card } from '@/components/ui/card';
import {
  Code2,
  Bot,
  Zap,
  Globe,
  Layout,
  Palette,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Code2,
      title: 'Website Development',
      description: 'Modern, fast, and responsive websites built with latest technologies.',
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Smart AI solutions to automate tasks and improve business workflows.',
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to generate leads and sales.',
    },
    {
      icon: Globe,
      title: 'Portfolio & Business Websites',
      description: 'Professional websites to showcase your brand and services.',
    },
    {
      icon: Layout,
      title: 'WordPress Solutions',
      description: 'Custom WordPress development, theme customization, and plugin integration.',
    },
    {
      icon: Palette,
      title: 'Graphic Designing',
      description: 'Professional visual branding, social media assets, and UI/UX design concepts.',
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

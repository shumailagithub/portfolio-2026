import { Card } from '@/components/ui/card';
import {
  Code2,
  Database,
  Palette,
  Zap,
  Brain,
  Bot,
  TableProperties,
  Layout,
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: ['React', 'Next.js 15', 'WordPress', 'TypeScript', 'Tailwind CSS'],
    },
    {
      icon: Brain,
      title: 'Agentic AI Dev',
      skills: ['LangChain', 'AI Agents', 'OpenAI API', 'Automation'],
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      skills: [
        'Canva Expert',
        'WordPress Design',
        'Branding',
        'Social Media Design',
      ],
    },
    {
      icon: TableProperties,
      title: 'Data Management',
      skills: ['Google Sheets', 'Data Automation', 'Excel', 'Analysis'],
    },
    {
      icon: Database,
      title: 'Backend & APIs',
      skills: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      icon: Zap,
      title: 'Performance',
      skills: ['SEO', 'Optimization', 'Testing', 'Vercel'],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
            Professional tools and technologies I use to deliver results
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-8 rounded-3xl glass-card border-white/20 hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-1.5 bg-primary/5 rounded-full text-sm font-semibold text-foreground/70 border border-primary/5 hover:bg-primary/10 hover:text-primary transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

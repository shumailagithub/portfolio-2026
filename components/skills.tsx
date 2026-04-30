'use client';

import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic font-medium">
            Professional tools and technologies I use to deliver high-impact results
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="p-8 h-full rounded-[2rem] glass-card border-white/10 hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Icon className="h-24 w-24" />
                  </div>
                  
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-4 bg-primary/10 rounded-2xl group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <Icon className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-5 py-2 bg-foreground/5 rounded-xl text-sm font-bold text-foreground/60 border border-white/5 hover:border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


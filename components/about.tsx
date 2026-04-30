'use client';

import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const highlights = [
    'Full-stack web development',
    'WordPress Customization',
    'Responsive UI design',
    'Performance optimization',
    'Clean, scalable code',
    'User-centered approach',
  ];

  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic font-medium">
            Building the web, one innovative project at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-foreground/70 leading-relaxed text-xl font-medium">
                I&apos;m a passionate developer with years of experience building
                modern web applications. I specialize in creating intuitive user
                interfaces and robust backend systems using the latest technologies.
              </p>
              <p className="text-foreground/70 leading-relaxed text-xl font-medium">
                My approach combines technical excellence with creative problem-solving,
                ensuring that every project not only meets requirements but exceeds
                expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-1 bg-primary/10 rounded-full group-hover:bg-primary transition-colors duration-300">
                    <CheckCircle className="h-5 w-5 text-primary group-hover:text-white flex-shrink-0" />
                  </div>
                  <span className="text-foreground/80 font-bold text-lg">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image/Stats Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-primary/20 to-accent/20 blur-2xl -z-10 rounded-[3rem]" />
            <Card className="p-10 rounded-[2.5rem] glass-card border-white/10 shadow-2xl">
              <div className="space-y-10">
                <div className="text-center group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl font-black gradient-text mb-2"
                  >10</motion.div>
                  <p className="text-foreground/60 font-bold uppercase tracking-[0.2em] text-sm">Projects Completed</p>
                </div>
                <div className="text-center border-t border-primary/5 pt-10 group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl font-black gradient-text mb-2"
                  >5+</motion.div>
                  <p className="text-foreground/60 font-bold uppercase tracking-[0.2em] text-sm">Years Experience</p>
                </div>
                <div className="text-center border-t border-primary/5 pt-10 group">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="text-6xl font-black gradient-text mb-2"
                  >8</motion.div>
                  <p className="text-foreground/60 font-bold uppercase tracking-[0.2em] text-sm">Happy Clients</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


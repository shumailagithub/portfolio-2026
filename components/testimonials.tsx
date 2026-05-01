'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Tech Entrepreneur',
      feedback: 'Great developer, delivered exactly what I needed on time. The attention to detail is exceptional.',
    },
    {
      name: 'Sarah Miller',
      role: 'E-commerce Owner',
      feedback: 'Very professional and responsive, highly recommended. The project exceeded our expectations in every way.',
    },
    {
      name: 'David Chen',
      role: 'Startup Founder',
      feedback: 'An absolute pleasure to work with. Technical expertise and communication skills are top-notch.',
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic font-medium">
            Trusted by clients worldwide for premium Web & AI solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-8 rounded-[2.5rem] glass-card border-white/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 h-full flex flex-col relative group">
                <div className="absolute top-6 right-8 text-primary/20 group-hover:text-primary/40 transition-colors">
                  <Quote size={40} />
                </div>
                
                <p className="text-foreground/70 leading-relaxed font-medium italic mb-8 flex-1">
                  "{testimonial.feedback}"
                </p>
                
                <div className="pt-6 border-t border-primary/10">
                  <h4 className="text-xl font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary font-semibold uppercase tracking-wider mt-1">
                    {testimonial.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

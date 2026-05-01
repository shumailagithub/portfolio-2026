'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import Image from 'next/image';

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

  const clientImages = [
    '/pic1.png',
    '/pic2.png',
    '/pic7.png',
    '/pic5.png',
    '/pic6.png',
    '/pic8.png',
  ];

  // Double the arrays for seamless scrolling
  const scrollTestimonials = [...testimonials, ...testimonials];
  const scrollImages = [...clientImages, ...clientImages];

  return (
    <section
      id="testimonials"
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
            What <span className="gradient-text">Clients</span> Say
          </h2>
          <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic font-medium">
            Trusted by clients worldwide for premium Web & AI solutions
          </p>
        </motion.div>

        {/* First row: Text Testimonials scrolling Left */}
        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-8 py-12 whitespace-nowrap"
            animate={{
              x: [0, -1350], // Adjusted based on card width
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {scrollTestimonials.map((testimonial, index) => (
              <div key={index} className="w-[350px] sm:w-[450px] flex-shrink-0 whitespace-normal">
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
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row: Project/Client Pictures scrolling Right */}
        <div className="relative flex overflow-x-hidden mt-8">
          <motion.div
            className="flex gap-8 py-12 whitespace-nowrap"
            animate={{
              x: [-1500, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear",
              },
            }}
          >
            {scrollImages.map((src, index) => (
              <div
                key={index}
                className="w-48 h-48 sm:w-64 sm:h-64 relative flex-shrink-0 rounded-[2.5rem] overflow-hidden glass-card border-white/10 group hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-shadow duration-500"
              >
                <Image
                  src={src}
                  alt={`Project ${index}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

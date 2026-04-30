'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Testimonials() {
  const clientImages = [
    '/pic1.png',
    '/pic2.png',
    '/pic7.png',
    '/pic5.png',
    '/pic6.png',
    '/pic8.png',
    '/pic1.png', // Duplicate for seamless loop
    '/pic2.png',
    '/pic7.png',
    '/pic5.png',
    '/pic6.png',
  ];

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

        <div className="relative flex overflow-x-hidden">
          <motion.div
            className="flex gap-8 py-12 whitespace-nowrap"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {clientImages.map((src, index) => (
              <div
                key={index}
                className="w-48 h-48 sm:w-64 sm:h-64 relative flex-shrink-0 rounded-[2.5rem] overflow-hidden glass-card border-white/10 group hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-shadow duration-500"
              >
                <Image
                  src={src}
                  alt={`Client ${index}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row moving in opposite direction */}
        <div className="relative flex overflow-x-hidden mt-8">
          <motion.div
            className="flex gap-8 py-12 whitespace-nowrap"
            animate={{
              x: [-1920, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...clientImages].reverse().map((src, index) => (
              <div
                key={index}
                className="w-48 h-48 sm:w-64 sm:h-64 relative flex-shrink-0 rounded-[2.5rem] overflow-hidden glass-card border-white/10 group hover:shadow-[0_0_30px_rgba(var(--primary),0.3)] transition-shadow duration-500"
              >
                <Image
                  src={src}
                  alt={`Client Reverse ${index}`}
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


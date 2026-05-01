'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare } from 'lucide-react';
import Link from 'next/link';

import { siteConfig } from '@/lib/config';

export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-[3rem] overflow-hidden glass-card border-white/20 p-8 md:p-16 text-center space-y-8 shadow-2xl shadow-primary/10"
        >
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 -z-10 w-64 h-64 bg-accent/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground tracking-tight leading-tight">
            Let’s build something <span className="gradient-text">amazing together</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-foreground/60 max-w-2xl mx-auto font-medium leading-relaxed">
            I’m available for freelance projects and ready to help grow your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href={siteConfig.socials.whatsapp} target="_blank">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-7 bg-linear-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-bold border-none text-white text-lg">
                Hire Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-10 py-7 border-2 border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 font-bold backdrop-blur-sm bg-white/50 text-lg"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

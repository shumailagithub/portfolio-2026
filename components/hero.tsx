'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { siteConfig } from '../lib/config';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-background/50 overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-40">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[100px]"
        ></motion.div>
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[100px]"
        ></motion.div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex flex-col items-center gap-4"
          >
            <Link href="#contact" className="group/badge">
              <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  Available for Freelance
                </span>
              </div>
            </Link>
            <motion.p 
              className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 w-fit mx-auto px-6 py-2 rounded-full border border-primary/20 backdrop-blur-sm"
            >
              Welcome to my portfolio
            </motion.p>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-black text-foreground text-balance leading-tight"
          >
            I build high-converting websites and <span className="gradient-text">AI-powered systems</span> that help businesses grow.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty font-medium"
          >
            I specialize in modern web development and intelligent automation to improve performance, user experience, and business efficiency.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
        >
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-7 bg-linear-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-bold border-none text-white text-lg">
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 py-7 border-2 border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 font-bold backdrop-blur-sm bg-white/50 text-lg"
            >
              Hire Me
            </Button>
          </Link>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex justify-center gap-6 pt-6"
        >
          {[
            { icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
            { icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
            { icon: Twitter, href: siteConfig.socials.twitter, label: 'Twitter' },
            { icon: Facebook, href: siteConfig.socials.facebook, label: 'Facebook' },
          ].map((social, idx) => {
            const Icon = social.icon;
            return (
              <motion.div
                key={social.label}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={social.href}
                  className="p-4 rounded-2xl bg-white shadow-lg shadow-primary/5 hover:shadow-primary/20 hover:bg-primary hover:text-white text-primary transition-all duration-300 border border-primary/5 backdrop-blur-sm flex items-center justify-center"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="pt-16"
        >
          <div className="w-7 h-12 border-2 border-primary/30 rounded-full flex items-start justify-center mx-auto p-2">
            <motion.div 
              animate={{
                y: [0, 16, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


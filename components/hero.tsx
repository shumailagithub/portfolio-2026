import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '../lib/config';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 bg-background/50 overflow-hidden">
      {/* Dynamic Background Blobs - Light Blue & Cyan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl -z-10 opacity-40">
        <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <p className="text-sm md:text-base font-semibold text-primary uppercase tracking-[0.2em] bg-primary/10 w-fit mx-auto px-6 py-2 rounded-full border border-primary/20 backdrop-blur-sm">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight">
            Crafting Premium <span className="gradient-text">Digital Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto text-pretty font-medium">
            I&apos;m a Full-stack Developer, WordPress Specialist, and Graphic Designer dedicated to building high-quality, functional web experiences that drive results.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
          <Link href="#projects">
            <Button size="lg" className="w-full sm:w-auto rounded-full px-10 py-7 bg-linear-to-r from-primary to-accent hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-bold border-none text-white">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="#contact">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-10 py-7 border-2 border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 font-bold backdrop-blur-sm bg-white/50"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-500">
          {[
            { icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
            { icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
            { icon: Twitter, href: siteConfig.socials.twitter, label: 'Twitter' },
            { icon: Facebook, href: siteConfig.socials.facebook, label: 'Facebook' },
          ].map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.label}
                href={social.href}
                className="p-3.5 rounded-full bg-white/80 shadow-md hover:bg-primary hover:text-white text-primary transition-all duration-300 transform hover:-translate-y-1.5 border border-primary/10 backdrop-blur-sm"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-center justify-center mx-auto">
            <div className="w-1 h-2 bg-foreground/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

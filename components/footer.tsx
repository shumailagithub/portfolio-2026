import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';
import { siteConfig } from '../lib/config';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: siteConfig.socials.github, label: 'GitHub' },
    { icon: Linkedin, href: siteConfig.socials.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: siteConfig.socials.twitter, label: 'Twitter' },
    { icon: Facebook, href: siteConfig.socials.facebook, label: 'Facebook' },
    { icon: Mail, href: '#contact', label: 'Contact Form' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#" className="flex items-center gap-2">
              <Image
                src="/logo-of-my-name.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
              />
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Full-stack developer crafting digital solutions that make a
              difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-foreground/60 hover:text-foreground text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Follow Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 text-foreground/60 hover:text-primary transition-all"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} All rights reserved. Crafted with care.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

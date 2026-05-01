'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export function FloatingWhatsApp() {
  const message = encodeURIComponent("Hi, I saw your portfolio and I’m interested in your services.");
  const whatsappUrl = `https://wa.me/${siteConfig.socials.phone.replace(/\D/g, '')}?text=${message}`;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Link
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-[#25D366]/40 hover:scale-110 transition-all duration-300 group relative"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 px-4 py-2 bg-white text-black text-sm font-bold rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl border border-black/5 pointer-events-none">
          Chat with me
        </span>
      </Link>
    </motion.div>
  );
}

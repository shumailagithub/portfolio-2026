'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MessageSquare, Send, Loader2, Copy, Check } from 'lucide-react';
import Link from 'next/link';
import { siteConfig } from '../lib/config';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: new Date().toLocaleString('en-US', { 
          dateStyle: 'full', 
          timeStyle: 'short' 
        }),
        to_email: siteConfig.socials.email,
      },
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorData = await response.text();
        console.error('EmailJS Error Response:', errorData);
        toast.error('Failed to send message. Please check your EmailJS settings.');
      }
    } catch (error) {
      console.error('Network Error:', error);
      if (error instanceof TypeError && error.message === 'Failed to fetch') {
        toast.error('Network error: Please check your internet or disable Ad-blockers.');
      } else {
        toast.error('An unexpected error occurred. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.socials.email);
    setCopied(true);
    toast.success('Email copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: copied ? Check : Mail,
      label: 'Email',
      value: siteConfig.socials.email,
      onClick: handleCopyEmail,
      subtitle: 'Click to copy address',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: siteConfig.socials.phone,
      link: `tel:${siteConfig.socials.phone.replace(/\s+/g, '')}`,
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      value: 'Chat with me',
      link: siteConfig.socials.whatsapp,
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Have a project in mind? Fill the form below for a direct mail or reach out via other methods.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            if (method.onClick) {
              return (
                <button
                  key={index}
                  onClick={method.onClick}
                  className="p-6 bg-muted/50 rounded-2xl border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 text-center w-full group relative overflow-hidden"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {method.label}
                  </h3>
                  <p className="text-foreground/60 mb-1">{method.value}</p>
                  <p className="text-[10px] text-primary font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                    {method.subtitle}
                  </p>
                </button>
              );
            }
            return (
              <Link
                key={index}
                href={method.link}
                className="p-6 bg-muted/50 rounded-2xl border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 text-center group"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <Icon className="h-6 w-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {method.label}
                </h3>
                <p className="text-foreground/60">{method.value}</p>
              </Link>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-foreground"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                placeholder="What is this about?"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

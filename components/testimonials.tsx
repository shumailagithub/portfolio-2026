import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Ahmed Malik',
      role: 'CEO, E-commerce Startup',
      content:
        "Shumaila transformed our furniture store into a modern masterpiece. The Next.js integration is incredibly fast, and her design sense is top-notch. Highly recommended for any e-commerce project!",
      rating: 5,
    },
    {
      name: 'Sarah Connor',
      role: 'Product Lead, AI Solutions',
      content:
        "Her work on our Agentic AI system was revolutionary. She didn't just build a chatbot; she created a fully autonomous agent that handles 70% of our customer inquiries independently. A true expert in LangChain and AI Agents.",
      rating: 5,
    },
    {
      name: 'Julian Brooks',
      role: 'Operations Manager, Global Trade',
      content:
        "We hired her for a custom AI automation project. Her ability to integrate AI into our workflow saved us hundreds of hours. She is proactive, professional, and delivers beyond expectations.",
      rating: 5,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            What Clients Say
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic">
            Feedback from those I&apos;ve helped with Web & AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 rounded-3xl glass-card border-white/20 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-primary text-primary transition-transform group-hover:scale-110"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground/70 text-lg leading-relaxed mb-8 flex-1 italic">
                {`"${testimonial.content}"`}
              </p>

              {/* Author */}
              <div className="border-t border-primary/10 pt-6">
                <h4 className="font-bold text-xl text-foreground">
                  {testimonial.name}
                </h4>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

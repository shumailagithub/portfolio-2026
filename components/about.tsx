import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export function About() {
  const highlights = [
    'Full-stack web development',
    'WordPress Customization',
    'Responsive UI design',
    'Performance optimization',
    'Clean, scalable code',
    'User-centered approach',
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto italic font-medium">
            Building the web, one project at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-foreground/70 leading-relaxed text-lg">
              I&apos;m a passionate developer with years of experience building
              modern web applications. I specialize in creating intuitive user
              interfaces and robust backend systems using the latest technologies.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              My approach combines technical excellence with creative problem-solving,
              ensuring that every project not only meets requirements but exceeds
              expectations. I&apos;m committed to continuous learning and staying
              updated with industry trends.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2 group">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 transition-transform group-hover:scale-110" />
                  <span className="text-foreground/80 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Stats Card */}
          <div className="space-y-6">
            <Card className="p-8 rounded-3xl glass-card border-white/20">
              <div className="space-y-8">
                <div className="text-center group">
                  <div className="text-5xl font-black gradient-text mb-2 transition-transform group-hover:scale-105">30</div>
                  <p className="text-foreground/60 font-semibold uppercase tracking-wider text-sm">Projects Completed</p>
                </div>
                <div className="text-center border-t border-primary/10 pt-8 group">
                  <div className="text-5xl font-black gradient-text mb-2 transition-transform group-hover:scale-105">5+</div>
                  <p className="text-foreground/60 font-semibold uppercase tracking-wider text-sm">Years Experience</p>
                </div>
                <div className="text-center border-t border-primary/10 pt-8 group">
                  <div className="text-5xl font-black gradient-text mb-2 transition-transform group-hover:scale-105">30+</div>
                  <p className="text-foreground/60 font-semibold uppercase tracking-wider text-sm">Happy Clients</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function WhyChooseMe() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Why Choose Me?
          </h2>
          
          <Card className="p-8 lg:p-12 rounded-[2.5rem] glass-card border-white/20 shadow-xl">
            <p className="text-lg lg:text-xl text-foreground/70 leading-relaxed font-medium">
              With a unique blend of Full-stack Development, WordPress expertise, and Graphic Design, 
              I offer comprehensive digital solutions tailored to your specific needs. I don&apos;t just build websites; 
              I create high-performing, visually stunning digital experiences that combine technical excellence with 
              creative strategy, ensuring your project stands out and delivers real results in today&apos;s competitive market.
            </p>
          </Card>

          <div className="pt-8">
            <Link href="#contact">
              <Button size="lg" className="rounded-full px-12 py-8 bg-primary text-white hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 font-bold text-lg">
                Let&apos;s Work Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Services } from '@/components/services';
import { WhyChooseMe } from '@/components/why-choose-me';
import { Testimonials } from '@/components/testimonials';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

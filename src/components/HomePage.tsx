'use client';

import Navbar from './Navbar';
import Hero from './Hero';
import WhatIs from './WhatIs';
import LearningPath from './LearningPath';
import Skills from './Skills';
import ResourcesSection from './ResourcesSection';
import Community from './Community';
import Footer from './Footer';
import ConsultButton from './ConsultButton';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhatIs />
      <LearningPath />
      <Skills />
      <ResourcesSection />
      <Community />
      <Footer />
      <ConsultButton />
    </main>
  );
}

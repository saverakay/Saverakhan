import { useState } from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Gallery from './components/gallery';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Lightbox from './components/lightbox';

// Mock data for illustrations
const characterArt = Array.from({ length: 6 }, (_, i) => {
  const titles = [
    'Character-Sheet-Tony', 'ND-WB-01-1-1', 'Character-Final-Tony', 'Character-Sheet',
    'Character-Sheet-Tony-Alt', 'ND-WB-01-1'
  ];
  
  let url = `https://picsum.photos/seed/character-${i + 1}/800/1000`;
  let span = false;
  let aspectRatio: 'natural' | 'portrait' | 'landscape' | undefined = undefined;

  if (i === 0) {
    url = "https://i.ibb.co/wZCbYsWc/Character-Sheet-TONY.jpg";
    span = true;
    aspectRatio = 'natural';
  }
  if (i === 1) {
    url = "https://i.ibb.co/1GBMbk7b/ND-WB-01-1-1.png";
    aspectRatio = 'natural';
  }
  if (i === 2) {
    url = "https://i.ibb.co/zWyhzVfN/Character-Final-Tony.jpg";
    aspectRatio = 'natural';
  }
  if (i === 3) {
    url = "https://i.ibb.co/rG5GXnL8/Character-sheet.jpg";
    span = true;
    aspectRatio = 'natural';
  }
  if (i === 4) {
    url = "https://i.ibb.co/bjjVjWLD/Character-Sheet-TONY.png";
    span = true;
    aspectRatio = 'natural';
  }
  if (i === 5) {
    url = "https://i.ibb.co/MyJRLL8Q/ND-WB-01-1.png";
    aspectRatio = 'natural';
  }

  return {
    id: i + 1,
    url,
    title: titles[i] || `Character Study ${i + 1}`,
    category: 'Character-Design',
    span,
    aspectRatio
  };
});

const sketchArt = Array.from({ length: 12 }, (_, i) => {
  let url = `https://picsum.photos/seed/sketch-${i + 1}/800/1000`;
  let span = false;
  let aspectRatio: 'natural' | 'portrait' | 'landscape' | undefined = undefined;

  // Re-ordered for visual balance with landscape images
  if (i === 0) url = "https://i.ibb.co/qZpydhT/1.png";
  if (i === 1) url = "https://i.ibb.co/m5zL9LgT/2.png";
  if (i === 2) url = "https://i.ibb.co/PsyGkz47/Memories.png";
  if (i === 3) url = "https://i.ibb.co/svffhfh7/IMG-0611.png";
  if (i === 4) {
    url = "https://i.ibb.co/ZzN5B8S7/TRAIN-02.jpg";
    span = true;
  }
  if (i === 5) url = "https://i.ibb.co/0pNccsTf/IMG-0747.png";
  if (i === 6) url = "https://i.ibb.co/W4nchGX7/IMG-0749.png";
  if (i === 7) url = "https://i.ibb.co/Qv1SycJQ/IMG-0739.png";
  if (i === 8) url = "https://i.ibb.co/svdtpbj0/IMG-0745.png";
  if (i === 9) url = "https://i.ibb.co/VsYd9HW/IMG-0743.png";
  if (i === 10) {
    url = "https://i.ibb.co/CKbX3Lqg/Full-page-Illustration.jpg";
    span = true;
  }
  if (i === 11) {
    url = "https://i.ibb.co/9k7Vtx7P/Title-cover.png";
    aspectRatio = 'natural';
  }

  return {
    id: i + 100,
    url,
    title: `Illustration-${i + 1}`,
    category: 'Finished-Work',
    span,
    aspectRatio
  };
});

export default function App() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    index: number;
    type: 'characters' | 'sketches';
  }>({
    isOpen: false,
    index: 0,
    type: 'characters'
  });

  const currentItems = lightbox.type === 'characters' ? characterArt : sketchArt;
  const currentImage = lightbox.isOpen ? currentItems[lightbox.index] : null;

  const handleOpenLightbox = (index: number, type: 'characters' | 'sketches') => {
    setLightbox({ isOpen: true, index, type });
  };

  const handleNext = () => {
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + 1) % currentItems.length
    }));
  };

  const handlePrev = () => {
    setLightbox(prev => ({
      ...prev,
      index: (prev.index - 1 + currentItems.length) % currentItems.length
    }));
  };

  return (
    <div className="min-h-screen selection:bg-accent-terracotta selection:text-white">
      <Navbar />
      
      <main>
        <Hero />

        {/* Characters Section */}
        <section id="characters" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl mb-4">Characters</h2>
              <div className="w-12 h-1 bg-accent-terracotta mx-auto md:mx-0" />
              <p className="mt-6 text-text-charcoal/60 max-w-lg font-light leading-relaxed">
                A collection of character designs exploring personality, poses, and expressions, focusing on bringing unique identities to life.
              </p>
            </div>
            
            <Gallery 
              items={characterArt} 
              onImageClick={(index) => handleOpenLightbox(index, 'characters')} 
            />
          </div>
        </section>

        {/* Illustrations Section */}
        <section id="illustrations" className="py-24 px-6 bg-white/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl mb-4">Illustrations</h2>
              <div className="w-12 h-1 bg-accent-sage mx-auto md:mx-0" />
              <p className="mt-6 text-text-charcoal/60 max-w-lg font-light leading-relaxed">
                Finished, detailed artworks that focus on storytelling, atmosphere, and composition through narrative driven scenes.
              </p>
            </div>
            
            <Gallery 
              items={sketchArt} 
              onImageClick={(index) => handleOpenLightbox(index, 'sketches')} 
            />
          </div>
        </section>

        <About />
        <Contact />
      </main>

      <Footer />

      <Lightbox 
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        image={currentImage}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Illustrations', href: '#illustrations' },
    { name: 'Characters', href: '#characters' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-40 transition-all duration-500 px-6 md:px-12 py-6",
      isScrolled ? "bg-bg-warm/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="group">
          <motion.div 
            className="text-2xl font-serif tracking-tighter flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-8 h-8 bg-accent-terracotta text-white flex items-center justify-center rounded-full text-sm font-sans transition-transform group-hover:rotate-12">SK</span>
            <span className="hidden sm:inline">Savera Khan</span>
          </motion.div>
        </a>

        <div className="flex gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm uppercase tracking-widest font-medium text-text-charcoal/70 hover:text-text-charcoal transition-colors group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-terracotta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

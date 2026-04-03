import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 tracking-tight">
          Savera Khan
        </h1>
        <p className="text-lg md:text-xl text-accent-terracotta font-sans uppercase tracking-[0.3em] mb-8">
          Digital Illustrator | Character & Story-Driven Art
        </p>
        <p className="max-w-xl mx-auto text-text-charcoal/60 text-lg leading-relaxed font-light">
          Creating whimsical worlds and character-driven narratives that blend soft aesthetics with deep visual storytelling.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-xs uppercase tracking-widest text-text-charcoal/30">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={20} className="text-accent-terracotta" />
        </motion.div>
      </motion.div>

      {/* Abstract background elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent-sage/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-terracotta/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}

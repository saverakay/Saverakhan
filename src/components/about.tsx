import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-square max-w-md mx-auto md:mx-0"
        >
          <div className="absolute inset-4 border border-accent-sage/30 rounded-full animate-pulse" />
          <img 
            src="https://i.ibb.co/yxd86wF/0d194b5a-0c02-4b12-a58f-40f901c62b7c.jpg" 
            alt="Savera Khan"
            className="w-full h-full object-cover rounded-full shadow-xl transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl leading-tight">
            Storytelling through <br />
            <span className="text-accent-terracotta italic">character & color</span>
          </h2>
          <div className="space-y-4 text-lg text-text-charcoal/80 leading-relaxed font-light">
            <p>
              Savera Khan is a digital illustrator specializing in character design and story-driven visuals, with experience in children’s books, comics, and game art.
            </p>
            <p>
              Based on a foundation of traditional techniques adapted for the digital canvas, her work explores the intersection of whimsical fantasy and grounded human emotion. Every character she creates carries a secret, and every environment tells a history.
            </p>
            <p>
              When she's not painting, you can find her exploring botanical gardens or sketching in quiet corner cafes, always looking for the next spark of inspiration.
            </p>
          </div>
          
          <div className="pt-6 flex gap-12">
            <div>
              <p className="text-3xl font-serif">50+</p>
              <p className="text-xs uppercase tracking-widest text-text-charcoal/50 mt-1">Projects</p>
            </div>
            <div>
              <p className="text-3xl font-serif">8</p>
              <p className="text-xs uppercase tracking-widest text-text-charcoal/50 mt-1">Books</p>
            </div>
            <div>
              <p className="text-3xl font-serif">4</p>
              <p className="text-xs uppercase tracking-widest text-text-charcoal/50 mt-1">Years</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

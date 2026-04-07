import { motion } from 'motion/react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-text-charcoal/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-text-charcoal/40 font-sans tracking-widest uppercase">
          © {currentYear} Savera Khan. All rights reserved.
        </div>
        
        <motion.div 
          className="text-xs uppercase tracking-widest text-text-charcoal/20"
          whileHover={{ opacity: 1 }}
        >
          Designed with intention
        </motion.div>
      </div>
    </footer>
  );
}

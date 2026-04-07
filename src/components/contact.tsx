import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8">Let's work together</h2>
          <p className="text-lg text-text-charcoal/70 mb-12 max-w-md leading-relaxed">
            I'm currently available for freelance projects, commissions, and collaborations. 
            Whether you have a specific project in mind or just want to say hello, I'd love to hear from you.
          </p>

          <div className="space-y-6">
            <a 
              href="mailto:saverakhan374@gmail.com" 
              className="flex items-center gap-4 text-xl hover:text-accent-terracotta transition-colors group"
            >
              <div className="p-3 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
                <Mail size={20} />
              </div>
              saverakhan374@gmail.com
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 rounded-sm shadow-sm space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-text-charcoal/50">Name</label>
            <input 
              type="text" 
              className="w-full border-b border-text-charcoal/10 py-2 focus:border-accent-terracotta outline-none transition-colors bg-transparent"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-text-charcoal/50">Email</label>
            <input 
              type="email" 
              className="w-full border-b border-text-charcoal/10 py-2 focus:border-accent-terracotta outline-none transition-colors bg-transparent"
              placeholder="your@email.com"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm uppercase tracking-widest text-text-charcoal/50">Message</label>
            <textarea 
              rows={4}
              className="w-full border-b border-text-charcoal/10 py-2 focus:border-accent-terracotta outline-none transition-colors bg-transparent resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button className="w-full bg-text-charcoal text-white py-4 rounded-sm hover:bg-accent-terracotta transition-colors uppercase tracking-widest text-sm font-medium">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}

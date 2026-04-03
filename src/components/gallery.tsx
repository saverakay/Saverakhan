import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface Artwork {
  id: number;
  url: string;
  title: string;
  category: string;
  span?: boolean;
  aspectRatio?: 'natural' | 'portrait' | 'landscape';
}

interface GalleryProps {
  items: Artwork[];
  onImageClick: (index: number) => void;
  variant?: 'characters' | 'sketches';
}

export default function Gallery({ items, onImageClick, variant = 'characters' }: GalleryProps) {
  return (
    <div className={cn(
      variant === 'characters' ? 'gallery-grid' : 'sketch-grid'
    )}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className={cn(
            "group relative overflow-hidden cursor-pointer bg-white/0",
            variant === 'sketches' && "sketch-item",
            item.span && "md:col-span-2"
          )}
          onClick={() => onImageClick(index)}
        >
          <img
            src={item.url}
            alt={item.title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105",
              item.span ? "aspect-[16/9]" : (item.aspectRatio !== 'natural' && "aspect-[3/4]")
            )}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-text-charcoal/0 group-hover:bg-text-charcoal/10 transition-colors duration-500" />
        </motion.div>
      ))}
    </div>
  );
}

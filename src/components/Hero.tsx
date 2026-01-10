import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-bedroom.jpg';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Dormitorio elegante"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-medium rounded-full text-sm mb-6">
              ✨ Calidad Premium Garantizada
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6"
          >
            Transforma tu hogar en un{' '}
            <span className="text-accent">refugio de confort</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            Descubre nuestra colección exclusiva de colchones, camas, salas y más. 
            Diseñados para brindarte el mejor descanso y estilo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={onExploreClick}
              className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Explorar Productos
            </button>
            <a
              href="https://wa.me/573001234567?text=Hola, me gustaría recibir más información sobre sus productos"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-bold rounded-lg hover:bg-primary-foreground/20 transition-all duration-300 border border-primary-foreground/30"
            >
              Hablar con un asesor
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-primary-foreground/20"
          >
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl">🚚</span>
              <span className="text-sm">Envío Gratis</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm">Garantía 10 años</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl">💳</span>
              <span className="text-sm">Pago seguro</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">+5000 clientes felices</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onExploreClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

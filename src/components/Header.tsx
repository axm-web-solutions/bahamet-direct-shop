import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { categories } from '@/data/products';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onCategoryClick: (categoryId: string) => void;
}

export const Header = ({ onCategoryClick }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    onCategoryClick(categoryId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl font-bold text-primary-foreground tracking-wide">
              BAHAMET
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="px-4 py-2 text-sm font-medium text-primary-foreground/80 hover:text-accent transition-colors duration-200 hover:bg-primary-foreground/10 rounded-lg"
              >
                {category.name}
              </button>
            ))}
          </nav>

          {/* CTA and Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Contáctanos
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-primary border-t border-primary-foreground/10"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="flex items-center gap-3 px-4 py-3 text-primary-foreground hover:bg-primary-foreground/10 rounded-lg transition-colors text-left"
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mt-3 px-4 py-3 bg-accent text-accent-foreground font-semibold rounded-lg"
              >
                <Phone className="w-4 h-4" />
                Contáctanos
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

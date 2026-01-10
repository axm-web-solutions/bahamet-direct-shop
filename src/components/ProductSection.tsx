import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import type { Product } from '@/data/products';

interface ProductSectionProps {
  id: string;
  title: string;
  icon: string;
  products: Product[];
}

export const ProductSection = forwardRef<HTMLElement, ProductSectionProps>(
  ({ id, title, icon, products }, ref) => {
    return (
      <section
        ref={ref}
        id={id}
        className="py-16 md:py-24 scroll-mt-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-4xl mb-4 block">{icon}</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }
);

ProductSection.displayName = 'ProductSection';

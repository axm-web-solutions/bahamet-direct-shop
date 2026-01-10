import { useRef } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { ProductSection } from '@/components/ProductSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { products, categories } from '@/data/products';

const Index = () => {
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToCategory = (categoryId: string) => {
    const section = sectionsRef.current[categoryId];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const firstCategory = categories[0];
    if (firstCategory) {
      scrollToCategory(firstCategory.id);
    }
  };

  const getProductsByCategory = (categoryId: string) => {
    return products.filter((product) => product.category === categoryId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onCategoryClick={scrollToCategory} />
      <Hero onExploreClick={scrollToProducts} />

      <main>
        {categories.map((category) => (
          <ProductSection
            key={category.id}
            ref={(el) => (sectionsRef.current[category.id] = el)}
            id={category.id}
            title={category.name}
            icon={category.icon}
            products={getProductsByCategory(category.id)}
          />
        ))}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'colchones' | 'salas' | 'camas' | 'bases' | 'espaldares' | 'combos';
  features?: string[];
}

export const products: Product[] = [
  // Colchones
  {
    id: 'colchon-1',
    name: 'Colchón Premium Ortopédico',
    description: 'Colchón de alta densidad con tecnología de espuma viscoelástica para un descanso perfecto.',
    price: 1299000,
    originalPrice: 1599000,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'colchones',
    features: ['Espuma viscoelástica', 'Alta densidad', 'Garantía 10 años'],
  },
  {
    id: 'colchon-2',
    name: 'Colchón Confort Plus',
    description: 'Diseño ergonómico con capas de gel refrescante para noches frescas.',
    price: 899000,
    originalPrice: 1099000,
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'colchones',
    features: ['Gel refrescante', 'Ergonómico', 'Antiácaros'],
  },
  {
    id: 'colchon-3',
    name: 'Colchón Luxury Memory',
    description: 'La mejor tecnología de memoria para adaptarse a tu cuerpo.',
    price: 1799000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
    ],
    category: 'colchones',
    features: ['Memory foam', 'Hipoalergénico', 'Certificado'],
  },
  // Salas
  {
    id: 'sala-1',
    name: 'Sala Modular Elegance',
    description: 'Sofá modular de 4 puestos con tapizado premium en tela antimanchas.',
    price: 2499000,
    originalPrice: 2899000,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600',
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600',
    ],
    category: 'salas',
    features: ['4 puestos', 'Tela antimanchas', 'Modular'],
  },
  {
    id: 'sala-2',
    name: 'Sala en L Contemporánea',
    description: 'Diseño contemporáneo con chaise longue incluido.',
    price: 3199000,
    images: [
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600',
    ],
    category: 'salas',
    features: ['Forma en L', 'Chaise longue', 'Cojines incluidos'],
  },
  {
    id: 'sala-3',
    name: 'Sofá Clásico Chester',
    description: 'Sofá estilo Chester con capitoné y acabados en cuero sintético.',
    price: 1899000,
    images: [
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600',
    ],
    category: 'salas',
    features: ['Estilo Chester', 'Cuero sintético', 'Capitoné'],
  },
  // Camas
  {
    id: 'cama-1',
    name: 'Cama King Moderna',
    description: 'Cama king size con estructura en madera maciza y cabecero tapizado.',
    price: 1699000,
    originalPrice: 1999000,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'camas',
    features: ['King size', 'Madera maciza', 'Cabecero tapizado'],
  },
  {
    id: 'cama-2',
    name: 'Cama Queen Minimalista',
    description: 'Diseño minimalista en acabado wengué con líneas limpias.',
    price: 1299000,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'camas',
    features: ['Queen size', 'Acabado wengué', 'Minimalista'],
  },
  {
    id: 'cama-3',
    name: 'Cama Doble Juvenil',
    description: 'Cama doble perfecta para espacios juveniles con diseño fresco.',
    price: 899000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
    ],
    category: 'camas',
    features: ['Doble', 'Diseño juvenil', 'Compacta'],
  },
  // Bases
  {
    id: 'base-1',
    name: 'Base Cama Box Spring',
    description: 'Base tipo box spring con sistema de muelles para mayor soporte.',
    price: 599000,
    originalPrice: 749000,
    images: [
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'bases',
    features: ['Box spring', 'Sistema de muelles', 'Tela antideslizante'],
  },
  {
    id: 'base-2',
    name: 'Base con Cajones',
    description: 'Base con 4 cajones de almacenamiento, ideal para optimizar espacio.',
    price: 799000,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'bases',
    features: ['4 cajones', 'Almacenamiento', 'Rieles metálicos'],
  },
  {
    id: 'base-3',
    name: 'Base Dividida Articulada',
    description: 'Base dividida con sistema articulado eléctrico.',
    price: 1299000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
    ],
    category: 'bases',
    features: ['Articulada', 'Sistema eléctrico', 'Control remoto'],
  },
  // Espaldares
  {
    id: 'espaldar-1',
    name: 'Espaldar Capitoné Luxury',
    description: 'Espaldar tapizado con diseño capitoné y marco en madera.',
    price: 449000,
    originalPrice: 549000,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'espaldares',
    features: ['Capitoné', 'Marco en madera', 'Tapizado premium'],
  },
  {
    id: 'espaldar-2',
    name: 'Espaldar Panel Moderno',
    description: 'Diseño panel con acabado en madera natural y detalles dorados.',
    price: 649000,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'espaldares',
    features: ['Estilo panel', 'Madera natural', 'Detalles dorados'],
  },
  {
    id: 'espaldar-3',
    name: 'Espaldar Tapizado Lineal',
    description: 'Espaldar con líneas horizontales y tela suave al tacto.',
    price: 399000,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
    ],
    category: 'espaldares',
    features: ['Líneas horizontales', 'Tela suave', 'Fácil instalación'],
  },
  // Combos
  {
    id: 'combo-1',
    name: 'Combo Dormitorio Completo',
    description: 'Incluye colchón, base, cama y espaldar. Todo lo que necesitas.',
    price: 3499000,
    originalPrice: 4299000,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'combos',
    features: ['Colchón + Base + Cama + Espaldar', 'Ahorra 18%', 'Envío gratis'],
  },
  {
    id: 'combo-2',
    name: 'Combo Colchón + Base',
    description: 'Combinación perfecta de colchón premium y base box spring.',
    price: 1699000,
    originalPrice: 1899000,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600',
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=600',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600',
    ],
    category: 'combos',
    features: ['Colchón + Base', 'Ahorra 10%', 'Instalación gratis'],
  },
  {
    id: 'combo-3',
    name: 'Combo Sala + Mesa de Centro',
    description: 'Sala modular de 4 puestos con mesa de centro a juego.',
    price: 2899000,
    originalPrice: 3299000,
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600',
      'https://images.unsplash.com/photo-1550226891-ef816aed4a98?w=600',
    ],
    category: 'combos',
    features: ['Sala + Mesa', 'Ahorra 12%', 'Garantía extendida'],
  },
];

export const categories = [
  { id: 'colchones', name: 'Colchones', icon: '🛏️' },
  { id: 'salas', name: 'Salas', icon: '🛋️' },
  { id: 'camas', name: 'Camas', icon: '🛌' },
  { id: 'bases', name: 'Bases', icon: '📦' },
  { id: 'espaldares', name: 'Espaldares', icon: '🪑' },
  { id: 'combos', name: 'Combos', icon: '🎁' },
] as const;

export type CategoryId = typeof categories[number]['id'];

import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';
import logoImage from '@/assets/logo.png';

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Almacén Sabaot" 
                className="h-10 w-auto object-contain"
              />
              <h3 className="font-display text-2xl font-bold text-accent">
                ALMACÉN SABAOT
              </h3>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Tu hogar merece lo mejor. Ofrecemos productos de alta calidad 
              para crear espacios de confort y estilo.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Categorías */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Categorías</h4>
            <ul className="space-y-2 text-primary-foreground/70 text-sm">
              <li><a href="#colchones" className="hover:text-accent transition-colors">Colchones</a></li>
              <li><a href="#salas" className="hover:text-accent transition-colors">Salas</a></li>
              <li><a href="#camas" className="hover:text-accent transition-colors">Camas</a></li>
              <li><a href="#bases" className="hover:text-accent transition-colors">Bases</a></li>
              <li><a href="#espaldares" className="hover:text-accent transition-colors">Espaldares</a></li>
              <li><a href="#combos" className="hover:text-accent transition-colors">Combos</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span>+57 300 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@bahamet.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>Calle 123 #45-67, Ciudad, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Horarios */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Horarios</h4>
            <ul className="space-y-3 text-primary-foreground/70 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">Lun - Vie</p>
                  <p>8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">Sábado</p>
                  <p>9:00 AM - 4:00 PM</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent" />
                <div>
                  <p className="font-medium text-primary-foreground">Domingo</p>
                  <p>Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Almacén Sabaot. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

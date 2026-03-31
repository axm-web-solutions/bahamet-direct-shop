import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useWhatsAppPicker } from '@/context/WhatsAppPickerContext';

export const WhatsAppButton = () => {
  const { openPicker } = useWhatsAppPicker();

  return (
    <motion.button
      type="button"
      onClick={() => openPicker()}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30"
      aria-label="WhatsApp: elige tu asesor"
    >
      <MessageCircle className="w-7 h-7 text-cream" />
    </motion.button>
  );
};

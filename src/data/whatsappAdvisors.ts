export type WhatsAppAdvisor = {
  id: string;
  name: string;
  /** Número internacional sin + (ej. Colombia 57…) */
  waNumber: string;
};

export const whatsappAdvisors: WhatsAppAdvisor[] = [
  { id: 'german', name: 'Germán Hernández', waNumber: '573233438709' },
  { id: 'cristina', name: 'Cristina Orjuela', waNumber: '573147087363' },
];

export const defaultWhatsAppGreeting =
  'Hola, me gustaría recibir información sobre sus productos';

export function buildWhatsAppUrl(waNumber: string, text?: string): string {
  if (!text) return `https://wa.me/${waNumber}`;
  return `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
}

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';
import { MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  whatsappAdvisors,
  buildWhatsAppUrl,
  defaultWhatsAppGreeting,
} from '@/data/whatsappAdvisors';

type WhatsAppPickerContextValue = {
  openPicker: (prefillMessage?: string) => void;
};

const WhatsAppPickerContext = createContext<WhatsAppPickerContextValue | null>(
  null,
);

export function WhatsAppPickerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [prefillMessage, setPrefillMessage] = useState<string | undefined>();

  const openPicker = useCallback((message?: string) => {
    setPrefillMessage(message);
    setOpen(true);
  }, []);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (!next) setPrefillMessage(undefined);
  }, []);

  const message = prefillMessage ?? defaultWhatsAppGreeting;

  return (
    <WhatsAppPickerContext.Provider value={{ openPicker }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Elige tu asesor</DialogTitle>
            <DialogDescription>
              Selecciona el contacto con quién deseas hablar por WhatsApp.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 pt-2">
            {whatsappAdvisors.map((advisor) => (
              <a
                key={advisor.id}
                href={buildWhatsAppUrl(advisor.waNumber, message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 font-medium transition-colors hover:bg-accent/10 hover:border-accent/40"
                onClick={() => handleOpenChange(false)}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div className="flex min-w-0 flex-col items-start">
                  <span className="text-left">{advisor.name}</span>
                  <span className="text-left text-xs font-normal text-muted-foreground">
                    Abrir chat en WhatsApp
                  </span>
                </div>
              </a>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </WhatsAppPickerContext.Provider>
  );
}

export function useWhatsAppPicker() {
  const ctx = useContext(WhatsAppPickerContext);
  if (!ctx) {
    throw new Error(
      'useWhatsAppPicker must be used within WhatsAppPickerProvider',
    );
  }
  return ctx;
}

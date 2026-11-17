import { useState, useCallback } from 'react';
import { ExportTarget, ExportOptions, defaultExportOptions } from '@/types';

export function usePrintExport() {
  const [modalOpen, setModalOpen] = useState(false);
  const [target, setTarget] = useState<ExportTarget | null>(null);
  const [activeOptions, setActiveOptions] = useState<ExportOptions>(defaultExportOptions);
  const [isPrinting, setIsPrinting] = useState(false);

  const openExportModal = useCallback((newTarget: ExportTarget) => {
    setTarget(newTarget);
    setModalOpen(true);
  }, []);

  const closeExportModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const triggerPrint = useCallback(
    async (options: ExportOptions, filename: string): Promise<void> => {
      setActiveOptions(options);
      setIsPrinting(true);

      const originalTitle = document.title;
      const cleanTitle = filename.replace(/\.pdf$/i, '');
      document.title = cleanTitle;

      const wasDark = document.documentElement.classList.contains('dark');
      if (wasDark) {
        document.documentElement.classList.remove('dark');
      }

      document.body.classList.add('printing-mount');

      try {
        // Wait for document fonts and mathematical typography rendering
        if (document.fonts) {
          await document.fonts.ready;
        }

        // Additional delay for KaTeX stylesheet and SVG vector metrics to settle
        await new Promise((resolve) => setTimeout(resolve, 350));

        // Trigger native browser print
        window.print();
      } finally {
        // Ensure restoration of title, classes, and dark mode after print dialog completes
        const cleanup = () => {
          document.title = originalTitle;
          document.body.classList.remove('printing-mount');
          if (wasDark) {
            document.documentElement.classList.add('dark');
          }
          setIsPrinting(false);
          window.removeEventListener('afterprint', cleanup);
        };

        window.addEventListener('afterprint', cleanup, { once: true });
        // Fallback cleanup if afterprint does not fire
        setTimeout(cleanup, 1200);
      }
    },
    []
  );

  return {
    modalOpen,
    target,
    activeOptions,
    isPrinting,
    openExportModal,
    closeExportModal,
    triggerPrint,
  };
}

'use client';

import { ReactNode } from 'react';
import { ModalProvider } from './ModalContext';
import ContactModal from './ContactModal';

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <ContactModal />
    </ModalProvider>
  );
}

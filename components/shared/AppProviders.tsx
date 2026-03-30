'use client';

import { ReactNode } from 'react';
import { ModalProvider } from './ModalContext';
import { CartProvider } from './CartContext';
import ContactModal from './ContactModal';
import CartDrawer from './CartDrawer';

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ModalProvider>
      <CartProvider>
        {children}
        <ContactModal />
        <CartDrawer />
      </CartProvider>
    </ModalProvider>
  );
}

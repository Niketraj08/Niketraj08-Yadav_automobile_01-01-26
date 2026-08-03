import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      setAuth: (user, token) => {
        localStorage.setItem('token', token);
        set({ user, token });
      },
      logout: () => {
        localStorage.removeItem('token');
        set({ user: null, token: null });
      },
    }),
    { name: 'auth-storage', partialize: (s) => ({ user: s.user, token: s.token }) }
  )
);

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, variant, qty = 1) => {
        const items = get().items;
        const existing = items.find((i) => i.productId === product._id && i.variant === variant);
        if (existing) {
          set({ items: items.map((i) => i.productId === product._id && i.variant === variant ? { ...i, quantity: i.quantity + qty } : i) });
        } else {
          set({ items: [...items, { productId: product._id, name: product.name, price: product.price, image: product.images?.[0], variant, quantity: qty }] });
        }
      },
      removeItem: (productId, variant) => set({ items: get().items.filter((i) => !(i.productId === productId && i.variant === variant)) }),
      updateQty: (productId, variant, quantity) => {
        if (quantity <= 0) return get().removeItem(productId, variant);
        set({ items: get().items.map((i) => i.productId === productId && i.variant === variant ? { ...i, quantity } : i) });
      },
      clearCart: () => set({ items: [] }),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
    }),
    { name: 'cart-storage' }
  )
);

export const useThemeStore = create(
  persist(
    (set) => ({
      darkMode: true,
      toggleDarkMode: () => set((s) => ({ darkMode: !s.darkMode })),
    }),
    { name: 'theme-storage' }
  )
);

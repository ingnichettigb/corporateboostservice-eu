import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  id: string;
  name: string;
  price: string;
  duration: string;
  domain: string;
};

type CartContextValue = {
  items: CartItem[];
  count: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "cbs-cart";

function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9.,]/g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    return {
      items,
      count: items.length,
      total: items.reduce((sum, i) => sum + parsePrice(i.price), 0),
      addItem: (item) =>
        setItems((prev) =>
          prev.some((p) => p.id === item.id) ? prev : [...prev, item],
        ),
      removeItem: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      clear: () => setItems([]),
      has: (id) => items.some((p) => p.id === id),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

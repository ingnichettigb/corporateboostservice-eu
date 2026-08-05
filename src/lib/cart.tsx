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
  /** quantità acquistata (default 1) */
  qty?: number;
};

type CartContextValue = {
  items: CartItem[];
  /** numero di articoli, quantità incluse */
  count: number;
  total: number;
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  has: (id: string) => boolean;
  /** prezzo unitario numerico di una riga */
  unitPrice: (item: CartItem) => number;
  /** totale della riga (prezzo × quantità) */
  lineTotal: (item: CartItem) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "cbs-cart";

const MAX_QTY = 99;

function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9.,]/g, "").replace(",", ".");
  const n = parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

function qtyOf(item: CartItem): number {
  const q = Math.trunc(item.qty ?? 1);
  if (!Number.isFinite(q) || q < 1) return 1;
  return Math.min(q, MAX_QTY);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) {
          setItems(parsed.map((i) => ({ ...i, qty: qtyOf(i) })));
        }
      }
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
      count: items.reduce((sum, i) => sum + qtyOf(i), 0),
      total: items.reduce((sum, i) => sum + parsePrice(i.price) * qtyOf(i), 0),
      addItem: (item) =>
        setItems((prev) =>
          prev.some((p) => p.id === item.id)
            ? prev.map((p) =>
                p.id === item.id ? { ...p, qty: Math.min(qtyOf(p) + qtyOf(item), MAX_QTY) } : p,
              )
            : [...prev, { ...item, qty: qtyOf(item) }],
        ),
      removeItem: (id) => setItems((prev) => prev.filter((p) => p.id !== id)),
      setQty: (id, qty) =>
        setItems((prev) =>
          prev.flatMap((p) => {
            if (p.id !== id) return [p];
            const next = Math.trunc(qty);
            if (!Number.isFinite(next) || next < 1) return [];
            return [{ ...p, qty: Math.min(next, MAX_QTY) }];
          }),
        ),
      clear: () => setItems([]),
      has: (id) => items.some((p) => p.id === id),
      unitPrice: (item) => parsePrice(item.price),
      lineTotal: (item) => parsePrice(item.price) * qtyOf(item),
    };
  }, [items]);


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

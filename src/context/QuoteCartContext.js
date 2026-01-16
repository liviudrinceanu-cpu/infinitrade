'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const QuoteCartContext = createContext();

export function QuoteCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [lastAction, setLastAction] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('quoteCart');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      }
    } catch (e) {
      // Silently fail if localStorage is not available or corrupted
      console.error('Error loading cart:', e);
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem('quoteCart', JSON.stringify(items));
      } catch (e) {
        console.error('Error saving cart:', e);
      }
    }
  }, [items, isHydrated]);

  // Clear last action after animation
  useEffect(() => {
    if (lastAction) {
      const timer = setTimeout(() => setLastAction(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastAction]);

  const addItem = useCallback((item) => {
    // Check if already exists
    const exists = items.find(i => 
      i.type === item.type && 
      i.name === item.name
    );
    
    if (!exists) {
      const newItem = {
        ...item,
        id: Date.now() + Math.random(),
        addedAt: new Date().toISOString()
      };
      setItems(prev => [...prev, newItem]);
      setLastAction({ type: 'add', item: newItem });
      return true;
    }
    return false;
  }, [items]);

  const removeItem = useCallback((id) => {
    const item = items.find(i => i.id === id);
    if (item) {
      setItems(prev => prev.filter(i => i.id !== id));
      setLastAction({ type: 'remove', item });
    }
  }, [items]);

  const clearCart = useCallback(() => {
    setItems([]);
    setLastAction({ type: 'clear' });
  }, []);

  const getCartSummary = useCallback(() => {
    return items.map(item => {
      if (item.type === 'brand') {
        return `${item.name} (${item.category})`;
      } else if (item.type === 'category') {
        return `Categorie: ${item.name}`;
      } else {
        return `${item.name} - ${item.category}`;
      }
    }).join('\n');
  }, [items]);

  return (
    <QuoteCartContext.Provider value={{
      items,
      itemCount: items.length,
      lastAction,
      addItem,
      removeItem,
      clearCart,
      getCartSummary,
      isHydrated
    }}>
      {children}
    </QuoteCartContext.Provider>
  );
}

export function useQuoteCart() {
  const context = useContext(QuoteCartContext);
  if (!context) {
    throw new Error('useQuoteCart must be used within QuoteCartProvider');
  }
  return context;
}

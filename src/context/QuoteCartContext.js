'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const QuoteCartContext = createContext();

export function QuoteCartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [lastAction, setLastAction] = useState(null); // { type: 'add' | 'remove', item }

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('quoteCart');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('quoteCart', JSON.stringify(items));
  }, [items]);

  // Clear last action after animation
  useEffect(() => {
    if (lastAction) {
      const timer = setTimeout(() => setLastAction(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [lastAction]);

  const addItem = (item) => {
    // Check if already exists
    const exists = items.find(i => 
      i.type === item.type && 
      i.name === item.name
    );
    
    if (!exists) {
      const newItem = {
        ...item,
        id: Date.now(),
        addedAt: new Date().toISOString()
      };
      setItems(prev => [...prev, newItem]);
      setLastAction({ type: 'add', item: newItem });
      return true;
    }
    return false;
  };

  const removeItem = (id) => {
    const item = items.find(i => i.id === id);
    if (item) {
      setItems(prev => prev.filter(i => i.id !== id));
      setLastAction({ type: 'remove', item });
    }
  };

  const clearCart = () => {
    setItems([]);
    setLastAction({ type: 'clear' });
  };

  const getCartSummary = () => {
    return items.map(item => {
      if (item.type === 'brand') {
        return `${item.name} (${item.category})`;
      } else if (item.type === 'category') {
        return `Categorie: ${item.name}`;
      } else {
        return `${item.name} - ${item.category}`;
      }
    }).join('\n');
  };

  return (
    <QuoteCartContext.Provider value={{
      items,
      itemCount: items.length,
      lastAction,
      addItem,
      removeItem,
      clearCart,
      getCartSummary
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

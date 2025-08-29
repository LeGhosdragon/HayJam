// utils/storage.js
export const storage = {
  set: (key, value) => {
    try {
      // If value is an object, merge with existing
      if (typeof value === "object" && value !== null) {
        const existing = storage.get(key, {});
        const merged = { ...existing, ...value };
        localStorage.setItem(key, JSON.stringify(merged));
      } else {
        // For primitives or arrays, just store normally
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (err) {
      console.error("Error saving to localStorage", err);
    }
  },

  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.error("Error reading from localStorage", err);
      return defaultValue;
    }
  },

  remove: (key) => {
    localStorage.removeItem(key);
  },

  clear: () => {
    localStorage.clear();
  }
};

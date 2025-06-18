import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        {/* Always show Categories unless a category is selected */}
        {!selectedCategory && <Categories onCategorySelect={handleCategorySelect} />}
        {/* Always show Products, filtered by selectedCategory if applicable */}
        <Products
          selectedCategory={selectedCategory}
          onBack={() => setSelectedCategory(null)}
        />
      </main>
      <Contact />
    </div>
  );
}

export default App;
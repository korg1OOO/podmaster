import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Contact from './components/Contact';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [userState, setUserState] = useState<string | null>(null);
  const [discountedProduct, setDiscountedProduct] = useState<any>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  // Mock products (should match the ones in Products.tsx)
  const products = [
    {
      id: 1,
      name: 'Black Sheep 20K',
      image: 'https://media-production-bucket.us-southeast-1.linodeobjects.com/com/media/fotos/produtos/thumbs/big/0d8c29e6d639bde97f8418aa6cf9b4b1b4bb9ec0.jpg',
      price: 'R$ 80,00',
      description: 'Pod descartável com 20.000 puffs',
      category: 'Pod Descartável',
      flavors: ['Menthol + Manga Pessego Melancia'],
    },
    {
      id: 2,
      name: 'Elfbar TE 30K',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmlNzh3M9cp9YO1Nd9tDbBbf6t39DpnnYRQ&s',
      price: 'R$ 45,00',
      description: 'Pod descartável com 30.000 puffs',
      category: 'Pod Descartável',
      flavors: ['Menthol', 'Spearmint'],
    },
    // Add more products as needed
  ];

  // Function to get user location and state
  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          let state = 'São Paulo'; // Mock state for demo
          setUserState(state);

          // Randomly select a product for promotion
          const randomProduct = products[Math.floor(Math.random() * products.length)];
          const originalPrice = parseFloat(randomProduct.price.replace('R$ ', '').replace(',', '.'));
          const discount = originalPrice * 0.20;
          const discountedPrice = (originalPrice - discount).toFixed(2).replace('.', ',');

          setDiscountedProduct({
            ...randomProduct,
            price: `R$ ${discountedPrice}`,
            originalPrice: randomProduct.price,
            discount: '20% OFF',
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          setUserState('Desconhecido');
          // Fallback: Random product even without location
          const randomProduct = products[Math.floor(Math.random() * products.length)];
          const originalPrice = parseFloat(randomProduct.price.replace('R$ ', '').replace(',', '.'));
          const discount = originalPrice * 0.20;
          const discountedPrice = (originalPrice - discount).toFixed(2).replace('.', ',');
          setDiscountedProduct({
            ...randomProduct,
            price: `R$ ${discountedPrice}`,
            originalPrice: randomProduct.price,
            discount: '20% OFF',
          });
        }
      );
    } else {
      setUserState('Desconhecido');
      // Fallback without geolocation
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      const originalPrice = parseFloat(randomProduct.price.replace('R$ ', '').replace(',', '.'));
      const discount = originalPrice * 0.20;
      const discountedPrice = (originalPrice - discount).toFixed(2).replace('.', ',');
      setDiscountedProduct({
        ...randomProduct,
        price: `R$ ${discountedPrice}`,
        originalPrice: randomProduct.price,
        discount: '20% OFF',
      });
      console.log('Geolocation is not supported by this browser.');
    }
  };

  // Run location fetch on component mount
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Hero />
      <main className="container mx-auto px-4 py-8">
        {/* Display promotion if userState is available */}
        {userState && discountedProduct && (
          <div className="mb-6 p-4 bg-emerald-100 text-emerald-800 rounded-lg text-center">
            <h3 className="text-xl font-bold">Promoção Especial ({userState})</h3>
            <p className="text-sm">Aproveite 20% de desconto em um produto selecionado!</p>
            <div className="mt-2">
              <p className="font-semibold">{discountedProduct.name}</p>
              <p className="line-through text-gray-500">{discountedProduct.originalPrice}</p>
              <p className="text-lg font-bold text-emerald-600">{discountedProduct.price} ({discountedProduct.discount})</p>
            </div>
          </div>
        )}

        {/* Always show Categories unless a category is selected */}
        {!selectedCategory && <Categories onCategorySelect={handleCategorySelect} />}
        {/* Pass discountedProduct to Products for checkout discount */}
        <Products
          selectedCategory={selectedCategory}
          onBack={() => setSelectedCategory(null)}
          discountedProduct={discountedProduct}
        />
      </main>
      <Contact />
    </div>
  );
}

export default App;
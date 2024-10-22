import React from 'react';
import Image from 'next/image';

const ProductCard: React.FC<{ name: string; price: string }> = ({ name, price }) => (
  <div className="flex flex-col items-center">
    <div className="w-full aspect-square bg-white mb-2"></div>
    <div className="w-full flex justify-between items-center">
      <div>
        <p className="text-xs text-white">{name}</p>
        <p className="text-xs text-white">{price}</p>
      </div>
      <button className="bg-white text-green-800 text-xs py-1 px-3 rounded-full">ADD TO CART</button>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="bg-green-800 min-h-screen text-white">
      <header className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">BRAND</h1>
        <nav>
          <ul className="flex space-x-4 text-sm">
            <li>SHOP</li>
            <li>BRANDS</li>
            <li>CONTACT</li>
            <li>SUPPORT</li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-8">
          <div className="w-full h-64 bg-white"></div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">BEST SELLER</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductCard key={i} name={`Product name`} price="00.00 CAD" />
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">TODAY&apos;S SPECIAL</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 aspect-square flex items-end justify-center">
              <p className="text-black text-xl font-bold">NEW RELEASE</p>
            </div>
            <div className="bg-white p-4 aspect-square flex items-end justify-center">
              <p className="text-black text-xl font-bold">DISCOUNT</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4 text-center">CATEGORY</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <ProductCard key={i} name={`Product name`} price="00.00 CAD" />
            ))}
          </div>
        </section>

        <section className="mb-8 text-white">
          <h2 className="text-4xl font-bold mb-4">BRAND</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-4xl font-bold mb-4">MORE INFORMATION</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
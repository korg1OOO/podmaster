import type React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <img
              src="https://ext.same-assets.com/2298405988/2042994942.jpeg"
              alt="PodMasterBR Logo"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-emerald-400">PodMasterBR</h1>
              <p className="text-sm text-gray-300">Brasil</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-emerald-400 transition-colors">
              Início
            </a>
            <a href="#categorias" className="hover:text-emerald-400 transition-colors">
              Categorias
            </a>
            <a href="#produtos" className="hover:text-emerald-400 transition-colors">
              Produtos
            </a>
            <a href="#contato" className="hover:text-emerald-400 transition-colors">
              Contato
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
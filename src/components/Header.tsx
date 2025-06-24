import type React from 'react';

const Header: React.FC = () => {
  const handleMoreInfoClick = () => {
    alert('Mais informações clicado!');
  };

  return (
    <header className="relative w-full">
      {/* Hero Image with Picture Element */}
      <picture>
        {/* Desktop image (≥768px) */}
        <source
          media="(min-width: 768px)"
          srcSet="https://res.cloudinary.com/dfawdodax/image/upload/v1750677665/hero_n2gldd.png"
        />
        {/* Mobile image and fallback */}
        <img
          src="https://res.cloudinary.com/dfawdodax/image/upload/v1750725832/WhatsApp_Image_2025-06-23_at_21.40.08_qj2rao.jpg"
          alt="Hero Image"
          className="w-full h-80 md:h-96 object-cover object-[center_250%] md:object-center"
        />
      </picture>
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Logo and Modal */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center">
        <div className="relative w-full">
          <img
            src="https://res.cloudinary.com/dfawdodax/image/upload/v1750677665/logo_bb6wsq.png"
            alt="Master Pods BR Logo"
            className="h-20 w-20 rounded-full object-cover border-2 border-white z-10 mx-auto mb-2"
            style={{ transform: 'translateY(0px)' }}
          />
          <div className="bg-white pt-8 pb-4 px-6 rounded-t-lg shadow-lg text-center w-full" style={{ marginTop: '-32px' }}>
            <div className="flex justify-center items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-gray-800">MasterPodsBR</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mb-2">
              <span className="text-sm text-gray-600">📍 Filiais por Todo o Brasil</span>
              <span className="text-gray-600">•</span>
              <a
                href="#"
                onClick={handleMoreInfoClick}
                className="text-gray-600 hover:text-gray-700 text-xs no-underline"
              >
                Mais informações
              </a>
            </div>
            <p className="text-lg font-semibold text-green-500">
              Aberto 24 horas
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
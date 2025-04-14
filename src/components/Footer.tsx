
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-display font-bold text-dental-blue">Lilian <span className="text-dental-coral">Castello</span></span>
            <p className="mt-2 text-gray-400">Odontopediatria especializada</p>
          </div>
          <button
            onClick={scrollToTop}
            className="bg-dental-blue hover:bg-blue-600 text-white rounded-full p-3 transition-all duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
        </div>
        
        <div className="border-t border-gray-800 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Lilian Castello - Odontopediatra. Todos os direitos reservados.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2">
              <a href="#home" className="text-gray-400 hover:text-dental-blue transition-colors">Início</a>
              <a href="#services" className="text-gray-400 hover:text-dental-blue transition-colors">Serviços</a>
              <a href="#about" className="text-gray-400 hover:text-dental-blue transition-colors">Sobre</a>
              <a href="#testimonials" className="text-gray-400 hover:text-dental-blue transition-colors">Depoimentos</a>
              <a href="#contact" className="text-gray-400 hover:text-dental-blue transition-colors">Contato</a>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            CRO 76397 - Responsável técnica: Dra. Lilian Castello
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


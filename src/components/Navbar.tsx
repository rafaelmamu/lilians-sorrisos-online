import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-display font-bold text-dental-blue">Lilian <span className="text-dental-coral">Castello</span></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium text-gray-700 hover:text-dental-blue transition-colors">Início</a>
          <a href="#services" className="font-medium text-gray-700 hover:text-dental-blue transition-colors">Serviços</a>
          <a href="#about" className="font-medium text-gray-700 hover:text-dental-blue transition-colors">Sobre</a>
          <a href="#testimonials" className="font-medium text-gray-700 hover:text-dental-blue transition-colors">Depoimentos</a>
          <a href="#contact" className="font-medium text-gray-700 hover:text-dental-blue transition-colors">Contato</a>
          <Button className="btn-primary flex items-center">
            <Phone size={18} className="mr-2" />
            Agendar Consulta
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:text-dental-blue focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            <a 
              href="#home" 
              className="font-medium text-gray-700 hover:text-dental-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a 
              href="#services" 
              className="font-medium text-gray-700 hover:text-dental-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="font-medium text-gray-700 hover:text-dental-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre
            </a>
            <a 
              href="#testimonials" 
              className="font-medium text-gray-700 hover:text-dental-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="font-medium text-gray-700 hover:text-dental-blue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contato
            </a>
            <Button className="btn-primary w-full flex items-center justify-center">
              <Phone size={18} className="mr-2" />
              Agendar Consulta
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

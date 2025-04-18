import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Hero = () => {
  return <section id="home" className="relative pt-24 bg-gradient-to-b from-dental-light to-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Sorrisos Saudáveis e <span className="text-dental-blue">Felizes</span> para seu filho
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Dra. Lilian Castello, Odontopediatra - CRO 76397<br />
              Especialista em tornar a visita ao dentista uma experiência divertida e acolhedora para as crianças.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center justify-center">
                <Calendar size={18} className="mr-2" />
                Agendar Consulta
              </Button>
              <Button variant="outline" className="border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white font-bold py-3 px-6 rounded-full transition-all">
                Conheça Nossa Clínica
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img alt="Criança sorrindo no dentista" className="w-full h-auto rounded-3xl" src="/lovable-uploads/74ce0dfb-1ff1-4f73-b244-5b7da849f351.png" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>;
};
export default Hero;
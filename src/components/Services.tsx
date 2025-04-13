
import React from 'react';
import ServiceCard from './ServiceCard';
import { Smile, Shield, Heart, Calendar, Award, Wand2 } from 'lucide-react';

const DentalCartoon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} absolute`}>
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-float">
        {/* Happy tooth with toothbrush */}
        <path d="M50,20C35,20 25,30 25,45C25,55 30,65 40,70C40,72.5 38.75,85 37.5,85C37.5,85 50,85 50,80C50,80 51.25,75 52.5,75C53.75,75 55,80 55,80C55,85 67.5,85 67.5,85C66.25,85 65,72.5 65,70C75,65 80,55 80,45C80,30 70,20 50,20Z" fill="white" stroke="#2E7D32" strokeWidth="2" />
        <circle cx="40" cy="40" r="5" fill="#333" />
        <circle cx="60" cy="40" r="5" fill="#333" />
        <path d="M40,55 Q50,65 60,55" stroke="#2E7D32" strokeWidth="2" strokeLinecap="round" />
        {/* Toothbrush */}
        <rect x="10" y="45" width="20" height="5" fill="#FF9800" rx="2" />
        <rect x="5" y="42" width="10" height="10" fill="#64B5F6" rx="2" />
      </g>
    </svg>
  </div>
);

const ToothbrushCartoon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} absolute`}>
    <svg width="80" height="120" viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-bounce-slow">
        {/* Toothbrush */}
        <rect x="20" y="10" width="40" height="10" rx="5" fill="#FFB74D" />
        <rect x="30" y="20" width="20" height="80" rx="10" fill="#64B5F6" />
        <rect x="35" y="30" width="10" height="10" rx="5" fill="white" />
        <rect x="35" y="50" width="10" height="10" rx="5" fill="white" />
        <rect x="35" y="70" width="10" height="10" rx="5" fill="white" />
        <path d="M30,100 L40,110 L50,100" stroke="#64B5F6" strokeWidth="5" strokeLinecap="round" />
      </g>
    </svg>
  </div>
);

const BrushingKidCartoon = ({ className = "" }: { className?: string }) => (
  <div className={`${className} absolute`}>
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-float">
        {/* Kid head */}
        <circle cx="60" cy="40" r="30" fill="#FFD54F" />
        {/* Hair */}
        <path d="M40,25 Q60,5 80,25" stroke="#8D6E63" strokeWidth="10" strokeLinecap="round" />
        {/* Eyes */}
        <circle cx="50" cy="35" r="5" fill="#333" />
        <circle cx="70" cy="35" r="5" fill="#333" />
        {/* Happy mouth */}
        <path d="M50,50 Q60,60 70,50" stroke="#333" strokeWidth="3" strokeLinecap="round" />
        {/* Arm with toothbrush */}
        <path d="M40,80 Q30,60 20,50" stroke="#FFD54F" strokeWidth="10" strokeLinecap="round" />
        {/* Toothbrush */}
        <rect x="5" y="40" width="20" height="5" fill="#F48FB1" />
        <rect x="0" y="38" width="10" height="10" fill="#64B5F6" />
      </g>
    </svg>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "Primeira Consulta",
      description: "Consulta inicial para conhecer a criança, avaliar suas necessidades e criar um ambiente acolhedor para as visitas futuras.",
      icon: <Calendar className="w-8 h-8 text-white" />,
      color: "bg-dental-blue"
    },
    {
      title: "Odontopediatria Preventiva",
      description: "Tratamentos preventivos para evitar problemas dentários, incluindo aplicação de flúor e selantes dentários.",
      icon: <Shield className="w-8 h-8 text-white" />,
      color: "bg-dental-coral"
    },
    {
      title: "Tratamentos Restauradores",
      description: "Restaurações estéticas e funcionais adaptadas especialmente para dentes de leite e permanentes jovens.",
      icon: <Wand2 className="w-8 h-8 text-white" />,
      color: "bg-dental-mint"
    },
    {
      title: "Ortodontia Preventiva",
      description: "Acompanhamento do desenvolvimento da dentição e intervenção precoce quando necessário.",
      icon: <Smile className="w-8 h-8 text-white" />,
      color: "bg-dental-yellow"
    },
    {
      title: "Tratamento de Crianças Especiais",
      description: "Atendimento especializado adaptado às necessidades de crianças com condições especiais.",
      icon: <Heart className="w-8 h-8 text-white" />,
      color: "bg-dental-blue"
    },
    {
      title: "Odontologia para Bebês",
      description: "Cuidados odontológicos desde o nascimento dos primeiros dentes, orientação aos pais e prevenção precoce.",
      icon: <Award className="w-8 h-8 text-white" />,
      color: "bg-dental-coral"
    }
  ];

  return (
    <section id="services" className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorations - Colorful bubbles and cartoon elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-dental-yellow"></div>
        <div className="absolute top-[30%] -right-32 w-80 h-80 rounded-full bg-dental-blue"></div>
        <div className="absolute -bottom-20 left-[20%] w-72 h-72 rounded-full bg-dental-mint"></div>
        <div className="absolute bottom-[10%] right-[10%] w-40 h-40 rounded-full bg-dental-coral"></div>
        
        {/* Cartoon dental elements */}
        <DentalCartoon className="top-10 right-[15%]" />
        <ToothbrushCartoon className="bottom-10 left-[10%]" />
        <BrushingKidCartoon className="top-[40%] left-[5%]" />
      </div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="relative">
            <h2 className="section-title flex items-center gap-4">
              Nossos <span className="text-dental-blue">Serviços</span>
            </h2>
            {/* Decorative toothbrushes */}
            <div className="absolute -top-8 -right-16 hidden md:block">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="2" height="10" rx="1" fill="#64B5F6" />
                <rect x="4" y="2" width="14" height="3" rx="1.5" fill="#FF8A65" />
                <circle cx="7" cy="3.5" r="1" fill="white" />
                <circle cx="11" cy="3.5" r="1" fill="white" />
                <circle cx="15" cy="3.5" r="1" fill="white" />
              </svg>
            </div>
            <div className="absolute -top-12 -left-20 hidden md:block transform -rotate-45">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="4" width="2" height="10" rx="1" fill="#A5D6A7" />
                <rect x="4" y="2" width="14" height="3" rx="1.5" fill="#FFD54F" />
                <circle cx="7" cy="3.5" r="1" fill="white" />
                <circle cx="11" cy="3.5" r="1" fill="white" />
                <circle cx="15" cy="3.5" r="1" fill="white" />
              </svg>
            </div>
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
            Oferecemos uma ampla gama de serviços odontológicos pediátricos para garantir a saúde bucal das crianças em um ambiente lúdico e acolhedor.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-dental-coral via-dental-blue to-dental-mint rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute bottom-10 right-10 animate-float opacity-70">
          <svg width="100" height="100" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M160,70 C160,100 140,150 100,150 C60,150 40,100 40,70 C40,40 60,30 100,30 C140,30 160,40 160,70 Z" fill="#FFD54F" />
            <circle cx="80" cy="70" r="10" fill="white" />
            <circle cx="120" cy="70" r="10" fill="white" />
            <circle cx="80" cy="70" r="5" fill="#333" />
            <circle cx="120" cy="70" r="5" fill="#333" />
            <path d="M70,100 Q100,130 130,100" stroke="#333" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Services;


import React from 'react';
import ServiceCard from './ServiceCard';
import Mascot from './Mascot';
import { Smile, Shield, Heart, Calendar, Award, Wand2 } from 'lucide-react';

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
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-dental-yellow"></div>
        <div className="absolute top-[30%] -right-32 w-80 h-80 rounded-full bg-dental-blue"></div>
        <div className="absolute -bottom-20 left-[20%] w-72 h-72 rounded-full bg-dental-mint"></div>
        <div className="absolute bottom-[10%] right-[10%] w-40 h-40 rounded-full bg-dental-coral"></div>
      </div>
      
      <div className="container-section relative z-10">
        <div className="flex flex-col items-center mb-12">
          <h2 className="section-title flex items-center gap-4">
            Nossos <span className="text-dental-blue">Serviços</span>
            <div className="hidden md:block">
              <Mascot size="sm" variant="toothbrush" />
            </div>
          </h2>
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
        
        {/* Sorrisauro mascot in corner */}
        <div className="hidden lg:block absolute bottom-0 right-0 transform translate-x-1/4">
          <Mascot size="lg" />
        </div>
      </div>
    </section>
  );
};

export default Services;

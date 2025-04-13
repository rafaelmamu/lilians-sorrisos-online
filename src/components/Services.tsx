
import React from 'react';
import ServiceCard from './ServiceCard';
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
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title">Nossos <span className="text-dental-blue">Serviços</span></h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Oferecemos uma ampla gama de serviços odontológicos pediátricos para garantir a saúde bucal das crianças em um ambiente lúdico e acolhedor.
        </p>
        
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
      </div>
    </section>
  );
};

export default Services;

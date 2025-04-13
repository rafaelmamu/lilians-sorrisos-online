
import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const qualifications = [
    "Especialista em Odontopediatria",
    "CRO 76397",
    "Formação em manejo de pacientes especiais",
    "Membro da Associação Brasileira de Odontopediatria",
    "Técnicas modernas e minimamente invasivas"
  ];

  return (
    <section id="about" className="bg-dental-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1607962837359-5e7e89f86776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Dra. Lilian Castello" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute top-[-30px] right-[-20px] w-40 h-40 bg-dental-yellow rounded-full opacity-30 z-0"></div>
            <div className="absolute bottom-[-20px] left-[-30px] w-40 h-40 bg-dental-blue rounded-full opacity-20 z-0"></div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Sobre <span className="text-dental-blue">Dra. Lilian Castello</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Olá! Sou a Dra. Lilian Castello, Odontopediatra dedicada a cuidar da saúde bucal dos seus pequenos. Com vários anos de experiência especializada no atendimento de crianças, minha missão é proporcionar um tratamento odontológico de alta qualidade em um ambiente lúdico e acolhedor.
            </p>
            <p className="text-gray-700 mb-8">
              Acredito que visitas ao dentista podem ser divertidas e positivas! Nossa abordagem é focada no relacionamento com a criança, sempre com paciência, carinho e adaptando o atendimento para cada pequeno paciente.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Qualificações</h3>
              <ul className="space-y-3">
                {qualifications.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="text-dental-blue flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <Button className="btn-primary">
              Conheça Nossa Clínica
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

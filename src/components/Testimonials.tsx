
import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Oliveira",
      relation: "Mãe do Pedro, 7 anos",
      quote: "Meu filho sempre teve medo de dentista, mas a Dra. Lilian transformou essa experiência! Ele agora adora ir às consultas e está muito mais consciente sobre sua higiene bucal.",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5
    },
    {
      name: "Carlos Santos",
      relation: "Pai da Luísa, 5 anos",
      quote: "A paciência e o carinho da Dra. Lilian são incomparáveis. Minha filha se sente segura e confortável durante todo o atendimento. Super recomendo!",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5
    },
    {
      name: "Márcia Fernandes",
      relation: "Mãe do Tiago, 4 anos",
      quote: "A clínica é incrível, toda adaptada para as crianças. A equipe é muito atenciosa e meu filho adora as atividades lúdicas após o tratamento.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container-section">
        <h2 className="section-title">O que os <span className="text-dental-blue">Pais Dizem</span></h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
          Veja o que as famílias falam sobre nosso atendimento e como transformamos a experiência odontológica para seus pequenos.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              relation={testimonial.relation}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

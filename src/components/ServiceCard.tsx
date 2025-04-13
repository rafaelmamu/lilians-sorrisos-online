
import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  // Generate a random cartoon background element
  const getRandomBgElement = () => {
    const elements = [
      // Toothbrush
      <svg key="toothbrush" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="4" width="3" height="12" rx="1.5" fill="#64B5F6" />
        <rect x="5" y="2" width="15" height="5" rx="2" fill="#FF8A65" />
        <path d="M7 4.5C7 4.5 8 7 11 7C14 7 15 4.5 15 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>,
      
      // Dental floss
      <svg key="floss" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="12" height="8" rx="4" fill="#CE93D8" />
        <rect x="9" y="12" width="6" height="8" rx="3" fill="#CE93D8" />
        <line x1="12" y1="20" x2="12" y2="22" stroke="#CE93D8" strokeWidth="2" strokeLinecap="round" />
      </svg>,
      
      // Tooth
      <svg key="tooth" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2C6.5,2 2,5.5 2,10C2,13.5 4,16.5 7,18C7,19 6.5,22 6,22C6,22 11,22 11,20.5C11,20.5 11.5,19 12,19C12.5,19 13,20.5 13,20.5C13,22 18,22 18,22C17.5,22 17,19 17,18C20,16.5 22,13.5 22,10C22,5.5 17.5,2 12,2Z" fill="#F5F9FC" stroke="#80CBC4" strokeWidth="1.5" />
      </svg>,
      
      // Braces
      <svg key="braces" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4,12 C4,6.5 8,6 12,6 C16,6 20,6.5 20,12" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" />
        <circle cx="6" cy="12" r="1" fill="#F48FB1" />
        <circle cx="10" cy="12" r="1" fill="#F48FB1" />
        <circle cx="14" cy="12" r="1" fill="#F48FB1" />
        <circle cx="18" cy="12" r="1" fill="#F48FB1" />
      </svg>,
      
      // Smiling face
      <svg key="smile" width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#FFD54F" />
        <circle cx="8" cy="9" r="1.5" fill="#333" />
        <circle cx="16" cy="9" r="1.5" fill="#333" />
        <path d="M8,14 C9.5,16 14.5,16 16,14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ];
    
    return elements[Math.floor(Math.random() * elements.length)];
  };

  return (
    <div className="bg-white rounded-3xl card-shadow p-8 transition-all duration-300 hover:translate-y-[-8px] border-2 border-gray-100 hover:border-dental-blue/20 relative overflow-hidden group">
      {/* Multiple cartoon background elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-dental-light -z-0 rounded-bl-[100px] group-hover:bg-dental-light transition-colors"></div>
      
      {/* Random dental cartoon elements in corners */}
      <div className="absolute top-4 right-4 opacity-30 group-hover:opacity-60 transition-opacity">
        {getRandomBgElement()}
      </div>
      <div className="absolute bottom-4 left-4 opacity-20 group-hover:opacity-40 transition-opacity transform rotate-12">
        {getRandomBgElement()}
      </div>
      
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${color} transform transition-transform group-hover:rotate-6 group-hover:scale-110 relative shadow-lg`}>
        {icon}
        {/* Small decorative polka dots */}
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white opacity-60"></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-white opacity-40"></div>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Button className="group-hover:bg-dental-coral group-hover:text-white text-dental-blue bg-transparent hover:bg-dental-coral/10 px-6 py-2 rounded-full border-2 border-dental-coral font-medium transition-all">
        Saiba mais 
        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
      </Button>
      
      {/* Decorative bubble pattern */}
      <div className="absolute bottom-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity">
        <div className="flex gap-1">
          <div className="w-3 h-3 rounded-full bg-dental-blue"></div>
          <div className="w-2 h-2 rounded-full bg-dental-coral"></div>
          <div className="w-4 h-4 rounded-full bg-dental-mint"></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;

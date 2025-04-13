
import React from 'react';
import { Button } from '@/components/ui/button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-3xl card-shadow p-8 transition-all duration-300 hover:translate-y-[-8px] border-2 border-gray-100 hover:border-dental-blue/20 relative overflow-hidden group">
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gray-50 -z-0 rounded-bl-[100px] group-hover:bg-dental-light transition-colors"></div>
      
      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${color} transform transition-transform group-hover:rotate-6 group-hover:scale-110`}>
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <Button className="group-hover:bg-dental-coral group-hover:text-white text-dental-blue bg-transparent hover:bg-dental-coral/10 px-6 py-2 rounded-full border-2 border-dental-coral font-medium transition-all">
        Saiba mais 
        <span className="ml-2 transform transition-transform group-hover:translate-x-1">→</span>
      </Button>
      
      {/* Decorative tooth icon in the bottom corner */}
      <div className="absolute bottom-3 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,2C6.5,2 2,5.5 2,10C2,13.5 4,16.5 7,18C7,19 6.5,22 6,22C6,22 11,22 11,20.5C11,20.5 11.5,19 12,19C12.5,19 13,20.5 13,20.5C13,22 18,22 18,22C17.5,22 17,19 17,18C20,16.5 22,13.5 22,10C22,5.5 17.5,2 12,2Z" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;

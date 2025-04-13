
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 transition-all duration-300 hover:translate-y-[-5px]">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${color}`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Button variant="ghost" className="text-dental-blue hover:text-dental-coral hover:bg-dental-light px-0">
        Saiba mais →
      </Button>
    </div>
  );
};

export default ServiceCard;

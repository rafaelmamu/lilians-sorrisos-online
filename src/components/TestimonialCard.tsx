
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  relation: string;
  quote: string;
  avatar: string;
  rating: number;
}

const TestimonialCard = ({ name, relation, quote, avatar, rating }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-2xl card-shadow p-6 transition-all duration-300 hover:translate-y-[-5px]">
      <div className="flex gap-2 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-dental-yellow text-dental-yellow" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{relation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

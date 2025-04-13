
import React from 'react';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="relative pt-24 bg-gradient-to-b from-purple-100 via-blue-50 to-white overflow-hidden">
      {/* Playful cartoon decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {/* Floating toothbrush */}
        <div className="absolute top-[20%] left-[5%] animate-float">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="6" width="3" height="12" rx="1.5" fill="#64B5F6" />
            <rect x="6" y="3" width="15" height="5" rx="2" fill="#FF8A65" />
            <path d="M8 5.5C8 5.5 9 8 12 8C15 8 16 5.5 16 5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="9" cy="5.5" r="1" fill="white" />
            <circle cx="13" cy="5.5" r="1" fill="white" />
          </svg>
        </div>
        
        {/* Floating dental floss */}
        <div className="absolute top-[10%] right-[10%] animate-bounce-slow">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="12" height="8" rx="4" fill="#CE93D8" />
            <rect x="9" y="12" width="6" height="8" rx="3" fill="#CE93D8" />
            <line x1="12" y1="20" x2="12" y2="22" stroke="#CE93D8" strokeWidth="2" strokeLinecap="round" />
            <path d="M10 8.5C10 8.5 11 9.5 12 9.5C13 9.5 14 8.5 14 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Happy tooth with face */}
        <div className="absolute bottom-[30%] left-[15%] animate-float">
          <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,2C6.5,2 2,5.5 2,10C2,13.5 4,16.5 7,18C7,19 6.5,22 6,22C6,22 11,22 11,20.5C11,20.5 11.5,19 12,19C12.5,19 13,20.5 13,20.5C13,22 18,22 18,22C17.5,22 17,19 17,18C20,16.5 22,13.5 22,10C22,5.5 17.5,2 12,2Z" fill="white" stroke="#80CBC4" strokeWidth="1.5" />
            <circle cx="8" cy="9" r="2" fill="#333" />
            <circle cx="16" cy="9" r="2" fill="#333" />
            <path d="M8,13 C10,16 14,16 16,13" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
        
        {/* Braces */}
        <div className="absolute bottom-[15%] right-[20%] animate-bounce-slow">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4,12 C4,6.5 8,6 12,6 C16,6 20,6.5 20,12" stroke="#F48FB1" strokeWidth="2" strokeLinecap="round" />
            <circle cx="6" cy="12" r="1" fill="#F48FB1" />
            <circle cx="10" cy="12" r="1" fill="#F48FB1" />
            <circle cx="14" cy="12" r="1" fill="#F48FB1" />
            <circle cx="18" cy="12" r="1" fill="#F48FB1" />
          </svg>
        </div>
        
        {/* Happy kid brushing teeth */}
        <div className="absolute top-[40%] right-[20%] animate-float">
          <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="6" fill="#FFD54F" /> {/* Head */}
            <circle cx="10" cy="7" r="1" fill="#333" /> {/* Eye */}
            <circle cx="14" cy="7" r="1" fill="#333" /> {/* Eye */}
            <path d="M10,10 C11,11 13,11 14,10" stroke="#333" strokeWidth="1" strokeLinecap="round" /> {/* Smile */}
            <path d="M12,14 C14,14 19,15 19,18" stroke="#FFD54F" strokeWidth="3" strokeLinecap="round" /> {/* Arm */}
            <rect x="18" y="17" width="4" height="1" fill="#FF8A65" /> {/* Toothbrush handle */}
            <rect x="22" y="16.5" width="2" height="2" rx="1" fill="#64B5F6" /> {/* Toothbrush head */}
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Sorrisos <span className="text-dental-blue">Felizes</span> e <span className="text-dental-coral">Saudáveis</span> para seu filho
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Dra. Lilian Castello, Odontopediatra - CRO 76397<br />
              Especialista em tornar a visita ao dentista uma experiência divertida e acolhedora para as crianças.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-dental-coral hover:bg-dental-coral/90 text-white font-bold py-3 px-6 rounded-full transition-all hover:shadow-lg shadow-dental-coral/20">
                <Calendar size={18} className="mr-2" />
                Agendar Consulta
              </Button>
              <Button variant="outline" className="border-2 border-dental-blue text-dental-blue hover:bg-dental-blue hover:text-white font-bold py-3 px-6 rounded-full transition-all">
                Conheça Nossa Clínica
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
              {/* Decorative cartoon elements */}
              <div className="absolute -right-5 -top-5 z-30">
                <svg width="70" height="70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" fill="#FFD54F" />
                  <circle cx="8" cy="9" r="1.5" fill="#333" />
                  <circle cx="16" cy="9" r="1.5" fill="#333" />
                  <path d="M8,14 C9.5,16 14.5,16 16,14" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Criança sorrindo no dentista" 
                className="w-full h-auto rounded-3xl"
              />
              {/* Decorative corner with brush */}
              <div className="absolute left-0 bottom-0 z-20 transform translate-y-1/4 -translate-x-1/4">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="3" height="14" rx="1.5" fill="#A5D6A7" />
                  <rect x="5" y="2" width="17" height="5" rx="2.5" fill="#FFB74D" />
                  <circle cx="8" cy="4.5" r="1.5" fill="white" />
                  <circle cx="12" cy="4.5" r="1.5" fill="white" />
                  <circle cx="16" cy="4.5" r="1.5" fill="white" />
                  <circle cx="20" cy="4.5" r="1.5" fill="white" />
                </svg>
              </div>
            </div>
            
            {/* Decorative Elements - More colorful */}
            <div className="absolute top-[-30px] right-[-20px] w-24 h-24 bg-dental-yellow rounded-full opacity-70 z-0 animate-bounce"></div>
            <div className="absolute bottom-[-20px] left-[-30px] w-32 h-32 bg-dental-mint rounded-full opacity-60 z-0 animate-pulse"></div>
            <div className="absolute top-[40%] left-[-20px] w-16 h-16 bg-dental-coral rounded-full opacity-40 z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Playful Wave Decoration with clouds and dental elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-10 left-[10%] w-20 h-12 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-[30%] w-24 h-14 bg-white rounded-full"></div>
        <div className="absolute bottom-15 left-[70%] w-28 h-16 bg-white rounded-full"></div>
        
        {/* Add some dental elements on the clouds */}
        <div className="absolute bottom-24 left-[35%]">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12,2C6.5,2 2,5.5 2,10C2,13.5 4,16.5 7,18C7,19 6.5,22 6,22C6,22 11,22 11,20.5C11,20.5 11.5,19 12,19C12.5,19 13,20.5 13,20.5C13,22 18,22 18,22C17.5,22 17,19 17,18C20,16.5 22,13.5 22,10C22,5.5 17.5,2 12,2Z" fill="#F5F9FC" />
          </svg>
        </div>
        <div className="absolute bottom-16 left-[75%]">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="4" width="12" height="8" rx="4" fill="#CE93D8" opacity="0.6" />
            <rect x="9" y="12" width="6" height="8" rx="3" fill="#CE93D8" opacity="0.6" />
          </svg>
        </div>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path fill="#ffffff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;

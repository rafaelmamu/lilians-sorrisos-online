import React from 'react';
import { MapPin, Phone, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
const Contact = () => {
  return <section id="contact" className="bg-dental-light py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Entre em <span className="text-dental-blue">Contato</span></h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Envie uma mensagem</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <Input id="name" type="text" placeholder="Seu nome" className="w-full rounded-lg" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail
                    </label>
                    <Input id="email" type="email" placeholder="Seu email" className="w-full rounded-lg" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <Input id="phone" type="tel" placeholder="Seu telefone" className="w-full rounded-lg" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea id="message" placeholder="Como podemos ajudar?" className="w-full rounded-lg min-h-[120px]" />
                </div>
                <Button className="btn-primary w-full">
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Informações de Contato</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-dental-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800">Endereço</h4>
                    <p className="text-gray-600">Ed Helbor Offices - Av. São João, 2375 - Jd Aquarius</p>
                    <p className="text-gray-600">São José dos Campos - SP, 12242-000</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Phone className="text-dental-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800">Telefone</h4>
                    <p className="text-gray-600">(12) 99136-9967</p>
                    <p className="text-gray-600">WhatsApp: (11) 98765-4321</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-dental-blue flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-gray-800">Horário de Atendimento</h4>
                    <p className="text-gray-600">Segunda a Sexta: 9h às 18h</p>
                    <p className="text-gray-600">Sábados: 9h às 13h</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-dental-blue flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dental-blue flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-dental-blue flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <Youtube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
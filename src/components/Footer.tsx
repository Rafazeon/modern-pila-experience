import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Pila</h3>
            <p className="text-gray-400">
              Transformando a gestão de benefícios com soluções digitais.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2">
              <a href="tel:+55459993674277" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone size={20} className="mr-2" />
                +55 (45) 99936-7427
              </a>
              <a href="mailto:comercial@pilabeneficios.com.br" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={20} className="mr-2" />
                comercial@pilabeneficios.com.br
              </a>
              <div className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-2" />
                Rua Pedro Miranda, 645, Cascavel - PR
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pila Benefícios. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
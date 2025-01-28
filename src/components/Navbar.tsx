import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Pila
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Início
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">
              Contato
            </a>
            <Button className="bg-primary hover:bg-primary/90">
              Junte-se à Pila
            </Button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Início
              </a>
              <a
                href="#benefits"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Benefícios
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Sobre
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
              >
                Contato
              </a>
              <Button className="w-full bg-primary hover:bg-primary/90 mt-4">
                Junte-se à Pila
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
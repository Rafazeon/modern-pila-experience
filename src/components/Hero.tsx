import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  const [cnpj, setCnpj] = useState("");

  // Função para aplicar a máscara de CNPJ
  const handleCnpjChange = (e) => {
    let value = e.target.value;
    
    // Remove todos os caracteres não numéricos
    value = value.replace(/\D/g, "");
    
    // Limita a 14 dígitos (tamanho do CNPJ)
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    
    // Aplica a máscara de CNPJ (XX.XXX.XXX/XXXX-XX)
    if (value.length > 0) {
      value = value.replace(/^(\d{2})(\d)/, "$1.$2");
      value = value.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
      value = value.replace(/\.(\d{3})(\d)/, ".$1/$2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    }
    
    setCnpj(value);
  };

  // Função para redirecionar para o WhatsApp com o CNPJ
  const redirectToWhatsApp = () => {
    // Extrai apenas os números do CNPJ para validação
    const cnpjNumbers = cnpj.replace(/\D/g, "");
    
    if (cnpjNumbers.length !== 14) {
      alert("Por favor, digite um CNPJ válido com 14 dígitos.");
      return;
    }
    
    const phoneNumber = "5545999367427"; // WhatsApp requer código do país sem o sinal +
    const message = `Olá! Gostaria de obter mais informações. Meu CNPJ é: ${cnpj}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abre o WhatsApp em uma nova aba
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
            Transformando a Gestão de Benefícios
            <span className="text-primary"> com Simplicidade</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
            Junte-se a milhares de empresas que confiam na Pila para gerenciar seus benefícios. Soluções digitais, flexíveis e sustentáveis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto animate-fade-in">
            <Input
              type="text"
              placeholder="Digite seu CNPJ"
              className="w-full"
              value={cnpj}
              onChange={handleCnpjChange}
              maxLength={18} // Tamanho máximo com formatação
            />
            <Button 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              onClick={redirectToWhatsApp}
            >
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
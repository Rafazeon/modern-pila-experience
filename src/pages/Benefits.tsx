import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { 
  ShoppingCart, 
  Utensils, 
  RefreshCcw, 
  Award, 
  Car, 
  Bus 
} from "lucide-react";

interface BenefitCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  fullDescription: string;
}

const BenefitCard = ({ title, icon, description, fullDescription }: BenefitCardProps) => {
  return (
    <Card className="p-6 group hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mt-4 mb-2 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
          {description}
        </p>
        <div className="mt-4 max-h-0 group-hover:max-h-40 overflow-hidden transition-all duration-300">
          <p className="text-white/90 text-sm">
            {fullDescription}
          </p>
        </div>
      </div>
    </Card>
  );
};

const Benefits = () => {
  const benefits: BenefitCardProps[] = [
    {
      title: "ALIMENTAÇÃO",
      icon: <ShoppingCart size={32} />,
      description: "Benefício alimentação digital seguindo as regras do PAT.",
      fullDescription: "O primeiro benefício alimentação 100% digital e flexível do Brasil. Em conformidade com as regulamentações PAT, garantindo sustentabilidade e conveniência para empresas e colaboradores."
    },
    {
      title: "REFEIÇÃO",
      icon: <Utensils size={32} />,
      description: "Pagamentos de refeições simples e rápidos via QR Code.",
      fullDescription: "Chega de cartões físicos! Os colaboradores podem pagar refeições de forma rápida e segura usando QR Code, garantindo total liberdade na escolha do local para alimentação."
    },
    {
      title: "MULTIBENEFÍCIOS",
      icon: <RefreshCcw size={32} />,
      description: "Colaboradores podem alternar benefícios conforme necessidade.",
      fullDescription: "Flexibilidade total na gestão de benefícios. Os colaboradores podem transferir saldos entre diferentes categorias, otimizando sua experiência e controle financeiro."
    },
    {
      title: "PREMIAÇÃO",
      icon: <Award size={32} />,
      description: "Recompensas digitais para reconhecimento de colaboradores.",
      fullDescription: "Recompensas em crédito digital instantâneo por conquistas, aumentando a motivação, produtividade e fomentando uma cultura de valorização contínua."
    },
    {
      title: "COMBUSTÍVEL",
      icon: <Car size={32} />,
      description: "Pagamentos digitais de combustível via QR Code.",
      fullDescription: "Benefício combustível 100% digital substituindo cartões físicos por transações seguras via QR Code em postos parceiros. Oferece controle e transparência para empresas."
    },
    {
      title: "MOBILIDADE",
      icon: <Bus size={32} />,
      description: "Benefícios de transporte em um único app.",
      fullDescription: "Soluções de mobilidade integradas permitindo que colaboradores paguem serviços de transporte diretamente pelo app Pila, oferecendo facilidade e conveniência."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-secondary to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
              Todos os Seus Benefícios em Um Só App
              <span className="text-primary block mt-2">
                Fácil, Rápido e 100% Digital!
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
              Simplifique a gestão de benefícios corporativos com a Pila. 
              Nossa solução digital oferece conveniência, economia e total controle 
              para sua empresa e colaboradores.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Benefits;
import { Utensils, Coffee, RefreshCcw, Award, Fuel, Leaf } from "lucide-react";
import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    title: "ALIMENTAÇÃO",
    description: "Benefícios de alimentação digital seguindo as regras do PAT.",
    icon: Utensils,
    fullDescription: "Primeiro benefício de alimentação 100% digital e flexível do Brasil. Em conformidade com as regulamentações do PAT, garantindo uma solução sustentável e inovadora para empresas.",
  },
  {
    title: "REFEIÇÃO",
    description: "Pagamentos de refeições simples e rápidos via QR Code.",
    icon: Coffee,
    fullDescription: "Chega de cartões físicos! Os colaboradores podem pagar suas refeições de forma rápida e segura usando QR Code, garantindo total liberdade na escolha do local.",
  },
  {
    title: "MULTIBENEFÍCIOS",
    description: "Colaboradores podem alternar benefícios conforme necessidade.",
    icon: RefreshCcw,
    fullDescription: "A flexibilidade de gerenciar benefícios como preferirem. Colaboradores podem transferir saldos entre diferentes categorias, otimizando sua experiência.",
  },
  {
    title: "PREMIAÇÃO",
    description: "Recompensas digitais para reconhecimento de funcionários.",
    icon: Award,
    fullDescription: "Recompense colaboradores por conquistas com créditos digitais instantâneos, aumentando a motivação, produtividade e criando uma cultura de reconhecimento contínuo.",
  },
  {
    title: "COMBUSTÍVEL",
    description: "Pagamentos de combustível digital via QR Code.",
    icon: Fuel,
    fullDescription: "O benefício combustível 100% digital, substituindo cartões físicos por transações seguras via QR Code em postos parceiros. Melhora o controle e transparência para empresas.",
  },
  {
    title: "SUSTENTABILIDADE",
    description: "Totalmente digital, reduzindo desperdício e custos.",
    icon: Leaf,
    fullDescription: "Elimina a necessidade de cartões plásticos e máquinas de pagamento, reduzindo mais de 15.000 toneladas de resíduos plásticos anualmente. Alinha-se com práticas ESG e negócios sustentáveis.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nossos Benefícios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como a Pila pode transformar a gestão de benefícios da sua empresa
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit) => (
            <BenefitCard key={benefit.title} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
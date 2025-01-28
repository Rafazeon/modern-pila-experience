import { Utensils, Coffee, RefreshCcw, Award, Fuel, Leaf } from "lucide-react";
import BenefitCard from "./BenefitCard";

const benefitsData = [
  {
    title: "ALIMENTAÇÃO",
    description: "Digital meal benefits following PAT rules.",
    icon: Utensils,
    fullDescription: "First 100% digital and flexible meal benefit in Brazil. Compliant with PAT regulations, ensuring a sustainable and innovative solution for companies.",
  },
  {
    title: "REFEIÇÃO",
    description: "Simple & fast meal payments via QR Code.",
    icon: Coffee,
    fullDescription: "No more physical cards! Employees can pay for meals quickly and securely using a QR Code, ensuring total freedom in choosing where to eat.",
  },
  {
    title: "MULTIBENEFÍCIOS",
    description: "Employees can switch benefits as needed.",
    icon: RefreshCcw,
    fullDescription: "The flexibility to manage benefits as they choose. Employees can transfer balances between different categories, optimizing their experience.",
  },
  {
    title: "PREMIAÇÃO",
    description: "Digital rewards for employee recognition.",
    icon: Award,
    fullDescription: "Reward employees for achievements with instant digital credits, enhancing motivation, productivity, and creating a culture of continuous appreciation.",
  },
  {
    title: "COMBUSTÍVEL",
    description: "Digital fuel payments via QR Code.",
    icon: Fuel,
    fullDescription: "The 100% digital fuel benefit, replacing physical cards with secure QR Code transactions at partner gas stations. Improves control & transparency for businesses.",
  },
  {
    title: "SUSTAINABILITY",
    description: "Fully digital, reducing waste & costs.",
    icon: Leaf,
    fullDescription: "Eliminates the need for plastic cards & payment machines, cutting 15,000+ tons of plastic waste annually. Aligns with ESG and sustainable business practices.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Benefits
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how Pila can transform your company's benefits management
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
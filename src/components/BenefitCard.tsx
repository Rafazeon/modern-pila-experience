import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  fullDescription: string;
}

const BenefitCard = ({ title, description, icon: Icon, fullDescription }: BenefitCardProps) => {
  return (
    <Card className="p-6 group hover:shadow-lg transition-all duration-300 cursor-pointer relative overflow-hidden">
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="text-primary group-hover:text-white transition-colors duration-300">
          <Icon size={32} />
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

export default BenefitCard;
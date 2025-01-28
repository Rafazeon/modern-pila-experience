import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in">
            Transforming Benefits Management
            <span className="text-primary"> with Simplicity</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in">
            Join thousands of companies that trust Pila for their employee benefits management. Digital, flexible, and sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto animate-fade-in">
            <Input
              type="text"
              placeholder="Enter your CNPJ"
              className="w-full"
            />
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
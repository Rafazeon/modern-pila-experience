import { motion } from "framer-motion";
import { Globe, ArrowUp, Leaf, Star, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutPage = () => {
  const values = [
    {
      title: "Innovation & Sustainability",
      icon: <Leaf className="w-8 h-8 text-primary" />,
      brief: "Technology + Sustainability for a better future.",
      description:
        "We develop cutting-edge solutions that integrate technology and sustainability, minimizing environmental impact and promoting a circular economy.",
    },
    {
      title: "Commitment to Excellence",
      icon: <Star className="w-8 h-8 text-primary" />,
      brief: "High-quality & reliable services.",
      description:
        "We ensure excellence in every service and product, providing reliability and high performance to clients and partners.",
    },
    {
      title: "Inclusion & Accessibility",
      icon: <Globe className="w-8 h-8 text-primary" />,
      brief: "Democratizing corporate benefits.",
      description:
        "We believe that corporate benefits should be accessible to companies of all sizes and their employees, fostering financial inclusion.",
    },
    {
      title: "Ethics & Transparency",
      icon: <Users className="w-8 h-8 text-primary" />,
      brief: "Acting with integrity in every interaction.",
      description:
        "We prioritize transparency, honesty, and integrity in all relationships and operations, building trust with clients and partners.",
    },
    {
      title: "Customer-Centric Approach",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      brief: "Understanding & meeting client needs.",
      description:
        "We are dedicated to understanding our customers' needs, ensuring continuous improvement and delivering exceptional experiences.",
    },
    {
      title: "Collaboration & Partnerships",
      icon: <Users className="w-8 h-8 text-primary" />,
      brief: "Building strong connections.",
      description:
        "We foster strong partnerships and create a network of value by connecting businesses, employees, and local partners.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] bg-gradient-to-b from-secondary to-white flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionizing Corporate Benefits with{" "}
            <span className="text-primary">Innovation & Sustainability</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to transforming the corporate benefits landscape through digital innovation,
            sustainable practices, and accessible solutions that empower businesses and their employees.
          </p>
        </div>
      </motion.section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 h-full">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Revolutionizing corporate benefits by providing 100% digital, sustainable, and
                accessible solutions that simplify management, promote a circular economy, and enhance
                businesses, employees, and partners.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8 h-full">
              <ArrowUp className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To be Brazil's leading fintech in digital benefits, recognized for innovation,
                sustainability, and positive impact—expanding financial inclusion and redefining
                corporate benefits.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full group hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {value.icon}
                      <h3 className="text-xl font-semibold ml-3">{value.title}</h3>
                    </div>
                    <p className="text-gray-600 group-hover:hidden">{value.brief}</p>
                    <p className="text-gray-600 hidden group-hover:block">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Pila in Shaping the Future of Corporate Benefits
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of a digital transformation that values innovation, sustainability, and
            accessibility.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Learn More
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
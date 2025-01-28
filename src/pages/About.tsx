import { motion } from "framer-motion";
import { Globe, ArrowUp, Leaf, Star, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  const values = [
    {
      title: "Inovação & Sustentabilidade",
      icon: <Leaf className="w-8 h-8 text-primary" />,
      brief: "Tecnologia + Sustentabilidade para um futuro melhor.",
      description:
        "Desenvolvemos soluções inovadoras que integram tecnologia e sustentabilidade, minimizando o impacto ambiental e promovendo uma economia circular.",
    },
    {
      title: "Compromisso com a Excelência",
      icon: <Star className="w-8 h-8 text-primary" />,
      brief: "Serviços de alta qualidade e confiáveis.",
      description:
        "Garantimos excelência em cada serviço e produto, proporcionando confiabilidade e alto desempenho para clientes e parceiros.",
    },
    {
      title: "Inclusão & Acessibilidade",
      icon: <Globe className="w-8 h-8 text-primary" />,
      brief: "Democratizando benefícios corporativos.",
      description:
        "Acreditamos que os benefícios corporativos devem ser acessíveis a empresas de todos os portes e seus colaboradores, promovendo a inclusão financeira.",
    },
    {
      title: "Ética & Transparência",
      icon: <Users className="w-8 h-8 text-primary" />,
      brief: "Atuando com integridade em cada interação.",
      description:
        "Priorizamos a transparência, honestidade e integridade em todos os relacionamentos e operações, construindo confiança com clientes e parceiros.",
    },
    {
      title: "Foco no Cliente",
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      brief: "Entendendo e atendendo as necessidades dos clientes.",
      description:
        "Somos dedicados a entender as necessidades dos nossos clientes, garantindo melhoria contínua e entregando experiências excepcionais.",
    },
    {
      title: "Colaboração & Parcerias",
      icon: <Users className="w-8 h-8 text-primary" />,
      brief: "Construindo conexões fortes.",
      description:
        "Fomentamos parcerias sólidas e criamos uma rede de valor conectando empresas, colaboradores e parceiros locais.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative h-[60vh] bg-gradient-to-b from-secondary to-white flex items-center justify-center text-center px-4 pt-16"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolucionando Benefícios Corporativos com{" "}
            <span className="text-primary">Inovação & Sustentabilidade</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos comprometidos em transformar o cenário de benefícios corporativos através da inovação digital,
            práticas sustentáveis e soluções acessíveis que empoderam empresas e seus colaboradores.
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
              <h2 className="text-2xl font-bold mb-4">Nossa Missão</h2>
              <p className="text-gray-600">
                Revolucionar os benefícios corporativos fornecendo soluções 100% digitais, sustentáveis e
                acessíveis que simplificam a gestão, promovem uma economia circular e valorizam empresas,
                colaboradores e parceiros.
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
              <h2 className="text-2xl font-bold mb-4">Nossa Visão</h2>
              <p className="text-gray-600">
                Ser a principal fintech do Brasil em benefícios digitais, reconhecida pela inovação,
                sustentabilidade e impacto positivo—expandindo a inclusão financeira e redefinindo
                os benefícios corporativos.
              </p>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
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
            Junte-se à Pila na Transformação dos Benefícios Corporativos
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Faça parte de uma transformação digital que valoriza inovação, sustentabilidade e
            acessibilidade.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Saiba Mais
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
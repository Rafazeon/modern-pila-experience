import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Pila</h3>
            <p className="text-gray-400">
              Transformando a gestão de benefícios com soluções digitais.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center mb-6">
                    Política de Privacidade
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Que informações pedimos e como as usamos
                    </h3>
                    <p className="leading-relaxed">
                      O Pila benefícios solicita informações de nossos clientes com o intuito de aprimorar a experiência e comunicação de produtos, serviços e promoções. Coletamos dados como seu nome, e-mail e endereço, que você nos fornece ao se registrar em nosso site ou ao efetuar um pagamento. Por questões de segurança, não solicitamos informações sobre seus métodos de pagamento diretamente, e estas permanecem privadas entre você e nossos provedores de sistemas de pagamento eletrônico.
                    </p>
                  </div>
                  <p className="leading-relaxed">
                    No Pila benefícios, podemos utilizar as informações coletadas online para processar e concluir sua solicitação. Também utilizamos endereços de e-mail em várias áreas dentro do site, para enviar comunicações por e-mail relacionadas à sua solicitação. Além disso, mantemos um registro de suas compras e qualquer outra coisa que nos permita aprimorar e personalizar sua experiência de compra. Também monitoramos o site quanto a padrões de tráfego para aprimorar seu design e os produtos e serviços que oferecemos. Reconhecemos que devemos usar suas informações de maneira responsável.
                  </p>
                  <p className="leading-relaxed">
                    Para lhe fornecer um melhor serviço, podemos cruzar as informações que você nos fornece por meio de diversos meios, como nosso site tatiuribe.com e nossas redes sociais. Também poderíamos cruzar esses dados com informações públicas ou com estabelecimentos aliados ou subsidiários. Ao cruzar essas informações, poderemos oferecer a você uma melhor comunicação sobre nossos produtos, eventos, promoções ou personalizar sua experiência de compra.
                  </p>
                  <p className="leading-relaxed">
                    Seus dados pessoais não serão alugados ou vendidos por qualquer motivo, mas podem ser compartilhados quando você participa de um sorteio realizado com qualquer outra empresa com a qual tenhamos parceria para que possa ser do seu interesse.
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Segurança</h3>
                    <p className="leading-relaxed">
                      Ao fazer um pedido conosco, queremos que você se sinta confiante de que suas informações pessoais e detalhes do cartão de crédito estão completamente seguros. No tatiuribe.com, para fornecer segurança máxima ao sistema de pagamento, utilizamos sistemas de PAGAMENTO SEGURO de instituições financeiras líderes no comércio eletrônico. Nesse sentido, os dados confidenciais do pagamento são transmitidos diretamente e de forma criptografada para a instituição financeira correspondente.
                    </p>
                  </div>
                  <p className="leading-relaxed">
                    Para quaisquer perguntas adicionais a respeito, escreva para{" "}
                    <a 
                      href="mailto:suporte@pilabeneficios.com.br"
                      className="text-primary hover:underline"
                    >
                      suporte@pilabeneficios.com.br
                    </a>{" "}
                    e teremos prazer em responder.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
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
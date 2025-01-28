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
            <div className="space-y-2">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="block text-gray-400 hover:text-white transition-colors">
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
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="block text-gray-400 hover:text-white transition-colors">
                    Termos e Condições
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center mb-6">
                      TERMOS DE USO APP PILA BENEFÍCIOS
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-gray-700">
                    <p className="leading-relaxed">
                      Esse Termo de Uso aplica-se ao uso dos serviços oferecidos pelo aplicativo "Pila Benefícios", desenvolvido e de propriedade da CODEFLOW SISTEMAS DE INFORMAÇÃO LTDA, inscrita no CNPJ nº 43.391.138/0001-71.
                    </p>
                    <p className="leading-relaxed">
                      O USUÁRIO (titular de dados) declara que concorda em se submeter integralmente ao presente termo e condições, além de aceitar as disposições do aviso e política de privacidade.
                    </p>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">DO OBJETIVO</h3>
                      <p className="leading-relaxed">
                        O objeto do presente Termo de Uso consiste em estabelecer o regulamento para acesso do clientes e parceiros PILA BENEFÍCIOS ao aplicativo "Pila Benefícios" (doravante denominado apenas como aplicativo) de informações e serviços online disponibilizadas pela CODEFLOW SISTEMAS DE INFORMAÇÃO de Cascavel, usando da tecnologia de celular e internet, ou seja, via software aplicativo para aparelho telefônico celular (app).
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">DOS DIREITOS DO TITULAR</h3>
                      <p className="leading-relaxed">
                        O Titular tem direito a obter do PILA BENEFÍCIOS, em relação aos seus dados pessoais por nós tratados, a qualquer momento e mediante requisição gratuita: (a) confirmação da existência de tratamento; (b) acesso aos dados; (c) correção de dados incompletos, inexatos ou desatualizados; (d) anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na LGPD; (e) portabilidade dos dados a outro fornecedor de serviço ou produto, mediante requisição expressa, observados os segredos comercial e industrial; (f) eliminação dos dados pessoais tratados com o seu consentimento, exceto nas hipóteses previstas no item 5; (g) informação das entidades públicas e privadas com as quais a PILA BENEFÍCIOS realizou uso compartilhado de dados; (h) informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa; (j) revogação do consentimento, nos termos do art. 8º, § 5º, da LGPD.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">DA ELIMINAÇÃO DOS DADOS PESSOAIS</h3>
                      <p className="leading-relaxed">
                        Os dados pessoais serão eliminados após o término de seu tratamento, no âmbito e nos limites técnicos das atividades, autorizada a conservação para as seguintes finalidades: (i) cumprimento de obrigação legal ou regulatória, (ii) estudo por órgão de pesquisa previsto no seu objetivo social ou estatutário, garantida, sempre que possível, a anonimização dos dados pessoais; (iii) transferência a terceiro, desde que respeitados os requisitos de tratamento de dados dispostos na LGPD; (iv) uso dos dados pessoais para prevenção à fraude (art. 11, II, "a", da LGPD); (v) uso dos dados pessoais para proteção ao crédito (art. 7º, X, LGPD) e (vi) atender outros interesses legítimos, em conformidade com o artigo 10 da LGPD.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">POLÍTICA DE SEGURANÇA E PRIVACIDADE</h3>
                      <p className="leading-relaxed">
                        Ao concordar com o presente termo de uso, o Cliente PILA BENEFÍCIOS declara ter ciência do Aviso de Privacidade do PILA BENEFÍCIOS, a qual encontra-se disponível no nosso Portal, https: https://www.pilabeneficios.com.br/politica-de-privacidade
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">DO FUNCIONAMENTO DOS SERVIÇOS</h3>
                      <p className="leading-relaxed">
                        Para que o serviço seja efetivado é necessário que o usuário baixe e instale o aplicativo "PILA BENEFÍCIOS" em seu aparelho celular tipo smartphone ou tablet com pacote de dados ativado, na Google Play Store (Google) ou AppStore (Apple) e faça o cadastro como indicado anteriormente.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">RESCISÃO E PENALIDADES</h3>
                      <p className="leading-relaxed">
                        O usuário que desejar fazer cessar os efeitos do presente Termo de Uso poderá fazê-lo a qualquer momento, através da desativação do aplicativo (app). Para solicitação de ações de correção de dados incompletos, inexatos ou desatualizados, portabilidade de dados, acesso a dados pessoais ou eliminação de dados pessoais deverá ser feita via e-mail: suporte@pilabeneficios.com.br
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">DA PROPRIEDADE INTELECTUAL</h3>
                      <p className="leading-relaxed">
                        O presente Termo de Uso concede aos usuários uma licença não exclusiva, não transferível e não sublicenciáveis, para acessar e fazer uso da plataforma e dos serviços por ela disponibilizadas.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">DAS CONDIÇÕES GERAIS</h3>
                      <p className="leading-relaxed">
                        O PILA BENEFÍCIOS manterá suporte técnico exclusivamente para o aplicativo e suas funcionalidades. Todo e qualquer déficit no acesso ou utilização do aplicativo que seja decorrente de problemas do aparelho telefônico; do serviço de internet ou telefonia; da incompatibilidade de programas e aplicativos do aparelho telefônico ou do mau uso do mesmo não é de responsabilidade do PILA BENEFÍCIOS e, consequentemente, não será por ela sanado.
                      </p>
                      <p className="leading-relaxed mt-4">
                        Para quaisquer dúvidas ou suporte, entre em contato através do email{" "}
                        <a 
                          href="mailto:suporte@pilabeneficios.com.br"
                          className="text-primary hover:underline"
                        >
                          suporte@pilabeneficios.com.br
                        </a>
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
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

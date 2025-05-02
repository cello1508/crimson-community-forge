
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqs: FaqItemProps[] = [
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Se você não estiver satisfeito com a comunidade por qualquer motivo durante os primeiros 7 dias após a compra, pode solicitar o reembolso integral sem questionamentos. Basta entrar em contato com o suporte."
    },
    {
      question: "Quanto tempo tenho acesso ao conteúdo?",
      answer: "O acesso depende do plano escolhido. Temos planos de 7 dias, trimestral e anual. Enquanto sua assinatura estiver ativa, você tem acesso a todo o conteúdo e atualizações."
    },
    {
      question: "Quais formas de pagamento são aceitas?",
      answer: "Aceitamos cartões de crédito, boleto bancário e PIX. Todas as transações são processadas de forma segura através de nossa plataforma de pagamentos."
    },
    {
      question: "O que acontece após minha inscrição?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com instruções de acesso à plataforma da comunidade, incluindo login e senha temporária para seu primeiro acesso."
    },
    {
      question: "Existe um grupo de suporte?",
      answer: "Sim! Temos um grupo exclusivo para membros onde você pode tirar dúvidas e interagir com outros participantes da comunidade. Além disso, oferecemos calls de suporte semanais."
    }
  ];

  return (
    <section className="section-padding bg-black section-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-5xl md:text-7xl font-bold mb-4">
            GARANTIA
            <br />
            7 D
          </h2>
          <p className="text-white/70 max-w-md">
            Se você não ficar satisfeito com a comunidade por qualquer motivo durante os primeiros 7 dias, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
          </p>
        </div>

        <div className="container-dark p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left hover:text-crimson">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

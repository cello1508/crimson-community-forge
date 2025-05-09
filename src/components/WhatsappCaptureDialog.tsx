
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { MessageSquare, Loader2, Phone } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface WhatsappCaptureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (whatsapp: string) => void;
  planName: string;
}

const formSchema = z.object({
  countryCode: z.string().default("+55"),
  whatsapp: z
    .string()
    .min(10, "Número deve ter pelo menos 10 dígitos")
    .max(15, "Número não pode ter mais de 15 dígitos")
    .refine((val) => /^[0-9]+$/.test(val), {
      message: "Apenas números são permitidos",
    }),
});

const countryCodes = [
  { value: "+55", label: "Brasil 🇧🇷 (+55)" },
  { value: "+1", label: "EUA 🇺🇸 (+1)" },
  { value: "+351", label: "Portugal 🇵🇹 (+351)" },
  { value: "+54", label: "Argentina 🇦🇷 (+54)" },
];

const WhatsappCaptureDialog = ({
  isOpen,
  onClose,
  onSubmit,
  planName,
}: WhatsappCaptureDialogProps) => {
  const { toast } = useToast();
  const [isVerifying, setIsVerifying] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      countryCode: "+55",
      whatsapp: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsVerifying(true);
      
      const fullWhatsappNumber = `${values.countryCode}${values.whatsapp}`;
      
      // Call webhook to verify if WhatsApp number is valid
      const response = await fetch("https://auto.mgtautomacoes.cloud/webhook-test/verifica-whatsapp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ whatsapp: fullWhatsappNumber }),
      });
      
      const data = await response.json();
      
      if (data.valid) {
        onSubmit(fullWhatsappNumber);
        form.reset();
        toast({
          title: "WhatsApp verificado!",
          description: "Redirecionando para o checkout...",
        });
      } else {
        toast({
          variant: "destructive",
          title: "WhatsApp inválido",
          description: data.message || "Por favor, verifique o número e tente novamente.",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Erro na verificação",
        description: "Não foi possível verificar seu WhatsApp. Por favor, tente novamente.",
      });
      console.error("Error verifying WhatsApp:", error);
    } finally {
      setIsVerifying(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Quase lá!</DialogTitle>
          <DialogDescription>
            Antes de prosseguir para o checkout do plano <span className="font-bold">{planName}</span>, 
            nos deixe seu WhatsApp para poder te ajudar caso tenha alguma dúvida.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>País</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    disabled={isVerifying}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Selecione o país" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countryCodes.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whatsapp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu WhatsApp</FormLabel>
                  <FormControl>
                    <div className="flex items-center gap-2 border rounded-md px-3 bg-background focus-within:ring-1 focus-within:ring-ring">
                      <Phone className="text-green-500 w-4 h-4" />
                      <Input
                        placeholder="(DDD) 99999-9999"
                        {...field}
                        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 p-0"
                        disabled={isVerifying}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button 
                type="submit" 
                className="bg-crimson hover:bg-crimson/90"
                disabled={isVerifying}
              >
                {isVerifying ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  "Continuar para o Checkout"
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsappCaptureDialog;

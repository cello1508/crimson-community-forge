import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
const YoutubeFeedbackSection = () => {
  const testimonialImages = ["https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/BlreS7VinNXlnTS0agyb3Zvcnr1KF5uc_2e1b7f80208ed6fefca0b9f9bed418ecd1a43f3c8303a0f4abdc544d2b56179d.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/hiB20ff5PR71hRjXbCa1MhA64JDMDFJX_3b3dbc4461de31afea07eba535188e115f64f2d432a47e0661f5aa048a1a7992.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/JOea8j4qSHqkdrJ47LCIKTf4VD1WfIbr_df28bb032c947d30cfe112e59f879e3c9645b72de531b97a95d992fd065b4691.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/pgk3i9B2y0xjqSp7pdu94yORsVP3qHo7_1b022c1e1f0c97b46a2752f1f7b8cf4e581fa1bc5a3be015667ac109c33a9400.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/SU2VYJNWDr66SFzb7HKC4lEuotkA5JTk_3757228d771386935beac41d66899b39cec00598a7ae44bd74d3d9b3c6881260.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/F4ltlyv0YQoWBMrlithoATk5VdFPCvqw_e7e2adba8a33f04e48a266116a6db355ab6f9d42e0282d7dcbf94e2d62af59cb.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/gU29g7l94OkqwlsiMxJK9x0WovZ8V3bO_05b80799a0e2490c62c6a701462e2a521dcabfad48dc9e3f431b90d68815505c.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/CRSRGndH7sbqm3NZAeFbvpOQnmqH1vXn_ca6111cbe70c483617951a167085d91efe831107af534ce745f708840dbf84c0.jpg", "https://baserow-backend-production20240528124524339000000001.s3.amazonaws.com/user_files/1aGZoqabeinhbRc2ybnFOZYRMPlPwoBp_d1de49ff64a4af67ebf08a46343aff39f3fbdf388cc1dc9837c9ad9bc8c770ce.jpg"];
  return <section className="section-padding bg-black section-container">
      <div className="mt-20 mb-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Já ajudei milhares de pessoas no youtube de forma 100% gratuita
        </h2>
        <p className="text-xl mt-6 mb-10 text-center text-crimson">Já imaginou o que eu compartilho no meu conteúdo pago?</p>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Carousel opts={{
        loop: true,
        align: "start"
      }} className="w-full">
          <CarouselContent className="py-4">
            {testimonialImages.map((imageUrl, index) => <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/5">
                <Card className="overflow-hidden border border-white/10 hover:border-crimson/30 transition-300 h-full bg-dark">
                  <AspectRatio ratio={16 / 9} className="h-full">
                    <div className="flex items-center justify-center h-full bg-black/50">
                      <img src={imageUrl} alt={`Depoimento do YouTube ${index + 1}`} className="w-full h-auto object-contain max-h-full" />
                    </div>
                  </AspectRatio>
                </Card>
              </CarouselItem>)}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>;
};
export default YoutubeFeedbackSection;
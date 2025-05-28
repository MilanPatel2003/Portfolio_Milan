import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import { certificateData } from '@/portfolioData.ts/data';

interface CertificateShowcaseProps {
  certificates: typeof certificateData;
}

const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({ certificates }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % certificates.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="w-full py-20 relative overflow-hidden">
      <BlurFade delay={0.1}>
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-thin text-white mb-4"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Professional certifications and achievements that showcase my expertise
          </motion.p>
        </div>
      </BlurFade>

      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg group">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-contain p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-white mb-2 line-clamp-1">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {certificate.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 hover:text-white text-white border-white/20 hover:border-white/40 backdrop-blur-sm"
                onClick={handlePrev}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="pointer-events-auto"
            >
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full bg-black/50 hover:bg-black/70 text-white border-white/20 hover:border-white/40 backdrop-blur-sm"
                onClick={handleNext}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateShowcase; 
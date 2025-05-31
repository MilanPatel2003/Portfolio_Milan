import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import BlurFade from "@/components/ui/blur-fade";
import { certificateData } from '@/portfolioData.ts/data';

interface CertificateShowcaseProps {
  certificates: typeof certificateData;
}

const CertificateShowcase: React.FC<CertificateShowcaseProps> = ({ certificates }) => {
  return (
    <section className="w-full py-10 sm:py-16 md:py-20 relative overflow-hidden">
      <BlurFade delay={0.1}>
        <div className="text-center mb-10 sm:mb-14 md:mb-16 px-2 sm:px-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-thin text-white mb-3 sm:mb-4"
          >
            Certifications
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-1"
          >
            Professional certifications and achievements that showcase my expertise
          </motion.p>
        </div>
      </BlurFade>

      <div className="max-w-6xl mx-auto px-1 xs:px-2 sm:px-4">
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certificates.map((certificate, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 rounded-lg group relative">
                  <div className="relative aspect-[4/3]">
                    <img
                      src={certificate.imageUrl}
                      alt={certificate.title}
                      className="w-full h-full object-contain p-2 sm:p-4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Arrow button overlay */}
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      aria-label={`Open certificate: ${certificate.title}`}
                      onClick={e => e.stopPropagation()}
                    >
                      <span className="bg-black/70 hover:bg-black/90 text-white rounded-full p-3 flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="h-6 w-6" />
                      </span>
                    </a>
                  </div>
                  <div className="p-2 sm:p-4">
                    <h3 className="text-base sm:text-lg font-medium text-white mb-1 sm:mb-2 line-clamp-1">
                      {certificate.title}
                    </h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateShowcase; 
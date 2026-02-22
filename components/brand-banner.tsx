'use client';

import { motion } from 'framer-motion';

export function BrandBanner() {
  return (
    <div className="overflow-hidden border-y border-burgundy/30 bg-navy py-3 text-ivory">
      <motion.div
        className="whitespace-nowrap text-sm font-medium tracking-[0.24em]"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-6 inline-block">
            We don&apos;t just file returns. We build financial discipline.
          </span>
        ))}
      </motion.div>
    </div>
  );
}

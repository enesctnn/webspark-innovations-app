'use client';

import { LogoScrollOpacityWrapperT } from '@/types/logo-scroll-opacity-wrapper';
import { motion, useScroll, useTransform } from 'framer-motion';

export function LogoScrollOpacityWrapper({
  children,
  increasing_on_scroll,
}: LogoScrollOpacityWrapperT) {
  const { scrollY } = useScroll();

  const increasingOpacity = useTransform(scrollY, [100, 250], [0, 1]);
  const decreasingOpacity = useTransform(scrollY, [100, 250], [1, 0]);

  return (
    <motion.div
      style={{
        opacity: increasing_on_scroll ? increasingOpacity : decreasingOpacity,
      }}
      className="absolute h-full w-full overflow-visible"
    >
      {children}
    </motion.div>
  );
}

'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

export function HeaderBackground() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [100, 250], [0, 1]);
  return (
    <motion.div
      style={{ opacity: bgOpacity }}
      className="absolute inset-0 top-0 -z-10 hidden bg-regalblue opacity-0 md:block"
    />
  );
}

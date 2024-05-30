'use client';

import { cn } from '@/lib/utils';
import { ExpandingHeaderT } from '@/types/expanding-header';
import { motion } from 'framer-motion';
import { BlurFade } from '../ui/blur-fade';
import { TextGradientLines } from '../ui/text-gradient-lines';

export const ExpandingHeader = ({
  children,
  size,
  animateOnce = false,
  className,
}: ExpandingHeaderT) => (
  <motion.header
    initial={{ height: 0 }}
    whileInView={{ height: size }}
    transition={{ duration: 0.5, type: 'spring' }}
    viewport={{ once: animateOnce, margin: '-30px' }}
    className="relative w-full overflow-hidden bg-ellipse from-[#111] from-40% to-black to-80% text-center"
  >
    <motion.div
      initial={{ translateY: '100%' }}
      whileInView={{ translateY: '28%' }}
      transition={{ duration: 0.8, type: 'spring' }}
      className={cn(
        'mx-auto h-full w-full space-y-[1.5px] px-4 sm:px-10',
        className
      )}
    >
      {children}
      <TextGradientLines />
    </motion.div>
    <BlurFade />
  </motion.header>
);

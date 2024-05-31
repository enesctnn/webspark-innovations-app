'use client';
import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  let wordsArray = words.split(' ');

  return (
    <motion.p>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.8 }}
            className={cn(
              'text-xs !leading-[2.5] tracking-wide text-inherit text-pastelblue opacity-0 md:text-2xl',
              className
            )}
          >
            {word}{' '}
          </motion.span>
        );
      })}
    </motion.p>
  );
};

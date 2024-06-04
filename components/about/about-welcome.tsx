'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import localFont from 'next/font/local';
import { TextGenerateEffect } from '../ui/text-generate-effect';
const starjedi = localFont({ src: '../../public/fonts/Starjedi.ttf' });
const starjhol = localFont({ src: '../../public/fonts/Starjhol.ttf' });

const words =
  "We are a dynamic web agency based in the vibrant city of Philadelphia. Founded by Temple university graduates, our mission is simple: to empower local businesses and propel them to new heights of success in the digital realm. At WebSpark, we blend our passion for innovative web design and our intimate understanding of the local market to craft compelling online experiences that resonate with audiences. Whether you're a small brick-and-mortar store or a burgeoning e-commerce venture, we're here to amplify your online presence and drive tangible results. Let's collaborate and elevate your brand to the next level together.";

export const AboutWelcome = () => (
  <motion.section
    initial={{ opacity: 0.5, translateY: '30%', rotateX: 35 }}
    animate={{
      opacity: 1,
      translateY: 0,
      scale: [1, 0.9, 0.85, 0.8, 0.75],
      transitionEnd: { rotateX: 0, scale: 1 },
    }}
    transition={{ duration: 8 }}
    className="z-10 max-w-screen-xl space-y-10 text-center transition-all"
  >
    <h1
      className={cn(
        'text-4xl !leading-[1.2] text-regalblue-100 md:text-8xl',
        starjhol.className
      )}
    >
      Welcome to WebSpark innovations
    </h1>
    <TextGenerateEffect words={words} className={starjedi.className} />
  </motion.section>
);

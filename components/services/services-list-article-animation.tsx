'use client';

import { ServicesListArticleAnimationT } from '@/types/services-list-article-animation';
import { motion } from 'framer-motion';

export const ServicesListArticleAnimation = ({
  index,
  children,
}: ServicesListArticleAnimationT) => (
  <motion.article
    className={`z-40 flex flex-col items-center justify-center gap-10 px-2.5 py-20 text-regalblue-700 md:px-20 ${(index + 1) % 2 === 1 ? 'bg-white lg:flex-row' : ' bg-pastelblue-100 lg:flex-row-reverse'}`}
    initial={{ translateX: index % 2 === 0 ? '80%' : '-80%', opacity: 0 }}
    whileInView={{ translateX: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'tween', duration: 0.5 }}
  >
    {children}
  </motion.article>
);

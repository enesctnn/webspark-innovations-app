'use client';
import { motion } from 'framer-motion';
import { BlurFade } from '../ui/blur-fade';
import { TextGradientLines } from '../ui/text-gradient-lines';

export const OurServicesHeader = () => (
  <motion.header
    initial={{
      height: 0,
      backgroundColor: '#FFFFFF',
      color: '#111',
    }}
    whileInView={{
      height: '185px',
      backgroundColor: '#111',
      color: '#FFFFFF',
    }}
    transition={{ duration: 0.3 }}
    viewport={{ margin: '-30px' }}
    className="relative px-10 text-center"
  >
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 60 }}
      viewport={{ margin: '-30px' }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="mx-auto flex flex-col items-center justify-center"
    >
      <h1 className="text text-4xl font-bold text-inherit drop-shadow">
        Where Can We Help You ?
      </h1>
      <TextGradientLines />
    </motion.div>
    <BlurFade />
  </motion.header>
);

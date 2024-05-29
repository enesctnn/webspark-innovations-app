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
      height: '150px',
      backgroundColor: '#111',
      color: '#FFFFFF',
    }}
    transition={{ duration: 0.3 }}
    viewport={{ margin: '-30px', once: true }}
    className="relative w-full overflow-hidden text-center"
  >
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 50 }}
      viewport={{ margin: '-5px' }}
      transition={{ duration: 0.5, type: 'spring' }}
      className="mx-auto h-full w-full space-y-[1.5px] px-4 sm:px-10"
    >
      <h1 className="text text-2xl font-bold text-inherit text-pastelblue-200 drop-shadow sm:text-4xl">
        Where Can We Help You ?
      </h1>
      <TextGradientLines />
    </motion.div>
    <BlurFade />
  </motion.header>
);

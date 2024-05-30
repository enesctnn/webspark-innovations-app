'use client';

import { OrderedSlidingItemsT } from '@/types/ordered-sliding-items';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const OrderedSlidingItems = ({ items }: OrderedSlidingItemsT) => (
  <div className="relative flex max-w-screen-2xl flex-col gap-52">
    <div className="absolute left-1/2 hidden h-[88%] w-[6px] -translate-x-1/2 translate-y-40 transform bg-zinc-700 lg:block" />
    {items.map(({ description, img, title }, index) => (
      <motion.div
        key={title}
        className={`relative flex flex-col ${(index + 1) % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-evenly gap-x-36 gap-y-10`}
        initial={{
          opacity: 0,
          translateX: (index + 1) % 2 === 1 ? '40%' : '-40%',
        }}
        whileInView={{ opacity: 1, translateX: 0 }}
        viewport={{ once: true, margin: '-28%' }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute left-1/2 hidden h-16 w-16 -translate-x-1/2 transform items-center justify-center rounded-full bg-zinc-600 text-xl font-bold lg:flex">
          {index + 1}
        </div>
        <Image
          src={img}
          alt={title}
          width={450}
          height={450}
          className="z-10"
        />
        <section
          className={`w-2/3 lg:w-1/3 ${(index + 1) % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}
        >
          <h2 className="mb-4 text-4xl font-bold max-lg:text-center">
            {title}
          </h2>
          <p className="md:text-xl">{description}</p>
        </section>
      </motion.div>
    ))}
  </div>
);

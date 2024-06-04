'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { IoMenuOutline } from 'react-icons/io5';
import { MobileNavItems } from './mobile-nav-items';
import { Social } from '../social/social';
import { useState } from 'react';

export function MobileNavBar() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <Sheet open={isModalOpen} onOpenChange={setIsModalOpen}>
      <SheetTrigger>
        <IoMenuOutline
          className="drop-shadow-border ml-auto block cursor-pointer text-whitelilac transition-transform hover:scale-105 lg:hidden"
          size={45}
        />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex flex-col items-center justify-center border-none bg-regalblue-900 px-20 text-whitelilac"
      >
        <SheetHeader className="space-y-4">
          <SheetTitle className="text-3xl text-inherit">
            WebSpark Innovations Business
          </SheetTitle>
          <SheetDescription className="text-center text-lg text-whitelilac-600">
            Digital Marketing Agency
          </SheetDescription>
        </SheetHeader>
        <hr className="mt-6 w-full" />
        <MobileNavItems setIsModalOpen={setIsModalOpen} />
        <Social iconSize={30} />
      </SheetContent>
    </Sheet>
  );
}

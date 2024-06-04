import { Footer } from '@/components/footer/footer';
import { MainHeader } from '@/components/main-header/main-header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import '../globals.css';

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WebSpark Innovations',
  description: 'WebSpark Innovations Business Website',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en" className="h-full">
    <body
      className={cn(
        'relative h-full overflow-x-hidden font-sans text-whitelilac antialiased',
        roboto.className
      )}
    >
      <main className="relative flex min-h-screen flex-col">
        <MainHeader solid />
        <div className="z-0 flex-1 flex-grow bg-black">{children}</div>
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;

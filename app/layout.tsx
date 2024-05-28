import { MainHeader } from '@/components/main-header/main-header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import './globals.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WebSpark Innovations',
  description: 'WebSpark Innovations Business Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'relative h-full overflow-x-hidden font-sans text-whitelilac antialiased',
          roboto.className
        )}
      >
        <main className="relative flex min-h-screen flex-col">
          <MainHeader />
          <div className="min-h-[1400px] flex-1 flex-grow">{children}</div>
          {/* Footer */}
        </main>
      </body>
    </html>
  );
}

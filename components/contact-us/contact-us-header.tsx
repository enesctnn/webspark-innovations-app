import { ExpandingHeader } from '@/components/ui/expanding-header';

export const ContactUsHeader = () => (
  <ExpandingHeader size="160px" animateOnce fadeOut={false}>
    <h1 className="text-3xl font-bold md:text-5xl">Contact Us</h1>
  </ExpandingHeader>
);

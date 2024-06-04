import { ContactUsContent } from '@/components/contact-us/contact-us-content';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WSI | Contact Us',
  description: 'WSI Contact Us Page',
};

const ContactUsPage = () => <ContactUsContent />;

export default ContactUsPage;

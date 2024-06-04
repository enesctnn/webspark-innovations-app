import { Card } from '../ui/card';
import { ContactCard } from './contact-card/contact-card';
import { ContactForm } from './contact-form/contact-form';

export const ContactUsContent = () => (
  <Card className="grid grid-cols-1 items-center justify-center gap-10 lg:grid-cols-2">
    <ContactCard />
    <ContactForm />
  </Card>
);

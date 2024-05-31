import { ContactCard } from './contact-card/contact-card';
import { ContactForm } from './contact-form/contact-form';

export const ContactUsContent = () => (
  <div className="grid justify-center gap-10 bg-black px-5 pb-32 pt-20 max-lg:grid-rows-2 lg:grid-cols-2 [&>*]:z-30">
    <ContactCard />
    <ContactForm />
  </div>
);

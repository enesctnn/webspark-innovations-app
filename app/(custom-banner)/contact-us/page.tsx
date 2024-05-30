import { ContactCard } from '@/components/contact-us/contact-card/contact-card';
import { ContactForm } from '@/components/contact-us/contact-form/contact-form';
import { ContactUsHeader } from '@/components/contact-us/contact-us-header';
import { BlurFade } from '@/components/ui/blur-fade';

const ContactUsPage = () => (
  <>
    <ContactUsHeader />
    <div className="relative grid justify-center gap-10 bg-ellipse from-regalblue to-regalblue-900 px-5 py-40 max-lg:grid-rows-2 lg:grid-cols-2">
      <ContactCard />
      <ContactForm />
      <BlurFade />
    </div>
  </>
);

export default ContactUsPage;

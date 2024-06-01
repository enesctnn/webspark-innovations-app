import { BlurFade } from '@/components/ui/blur-fade';

export const ContactCard = () => (
  <div className="relative flex flex-col items-center justify-evenly overflow-hidden rounded-md bg-ellipse from-[#111] from-25% to-transparent to-50% px-10">
    <div className="space-y-4 text-center">
      <h1 className="text-5xl !font-extrabold">
        Contact Us For a Free Quote and Consultation.
      </h1>
      <p className="text-2xl font-bold">
        Please call, email or complete our contact from to book your
        complimentary discovery session with our team.
      </p>
    </div>
    <div className="flex divide-[#d22f69] whitespace-nowrap text-lg font-bold text-[#d22f69] max-lg:flex-col max-lg:divide-y max-lg:text-center lg:divide-x-2">
      <p className="px-2">(267) 890-7561</p>
      <a
        className="px-2 hover:underline"
        href="mailto:websparkinnovations@gmail.com"
        target="_blank"
      >
        websparkinnovations@gmail.com
      </a>
    </div>
    <BlurFade fadeOut={false} />
  </div>
);

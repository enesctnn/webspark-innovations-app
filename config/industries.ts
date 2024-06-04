import { IconType } from 'react-icons';
import { GoLaw } from 'react-icons/go';
import { IoRestaurantOutline, IoStorefrontOutline } from 'react-icons/io5';
import { LuChefHat } from 'react-icons/lu';
import { MdOutlineCameraAlt, MdOutlineRealEstateAgent } from 'react-icons/md';

export const INDUSTRIES: {
  icon: IconType;
  title: string;
  description: string;
}[] = [
  {
    icon: IoRestaurantOutline,
    title: 'Restaurants',
    description:
      "Marketing for restaurants focuses on captivating visuals, like high-quality photos and videos of signature dishes and the dining atmosphere. The goal is to attract customers, highlight the restaurant's unique offerings, and stand out from competitors. Strategies include leveraging social media, optimizing online listings, and targeted digital advertising to reach potential diners and drive foot traffic.",
  },
  {
    icon: LuChefHat,
    title: 'Catering',
    description:
      'Marketing for catering services emphasizes showcasing culinary expertise and creativity through compelling visuals, such as photos of past events and menu options. The aim is to attract clients for weddings, corporate events, and special occasions. Tactics include targeted digital ads, SEO for local searches, and maintaining an engaging online presence to secure bookings and establish the catering company as a top choice for events.',
  },
  {
    icon: MdOutlineCameraAlt,
    title: 'Freelancing Services',
    description:
      'Marketing for freelancers spans various professions like photographers, personal trainers, tutors, and more. It emphasizes showcasing expertise to attract clients and stand out in their fields. Visual content, such as portfolios and testimonials, is vital for credibility. Strategies include social media, SEO, and targeted ads to reach potential clients, fostering business growth.',
  },
  {
    icon: GoLaw,
    title: 'Professional Services',
    description:
      "To effectively market professional services like those provided by lawyers, accountants, and consultants, it's essential to prioritize thought leadership, content marketing, and search engine optimization. These strategies are crucial for reaching prospective clients and positioning the firm as a reputable authority within its industry.",
  },
  {
    icon: IoStorefrontOutline,
    title: 'E-commerce',
    description:
      "To effectively market e-commerce companies, it's essential to prioritize website optimization, targeted advertising, and email marketing. These strategies are vital for reaching potential customers, promoting products, and boosting sales.",
  },
  {
    icon: MdOutlineRealEstateAgent,
    title: 'Real Estate',
    description:
      'To effectively market real estate, the emphasis lies in local SEO, targeted advertising, and presenting properties through high-quality photos and virtual tours. The objective is to engage potential homebuyers, spotlight properties, and distinguish the real estate agent from rivals.',
  },
];

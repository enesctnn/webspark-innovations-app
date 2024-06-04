import seo_circle from '@/assets/images/search-engine-optimization/seo_circle.png';
import seo1 from '@/assets/images/search-engine-optimization/seo1.jpg';
import { ServicesItemT } from '@/types/services-item';

export const SEO_SERVICE: ServicesItemT = {
  main_header: {
    header: 'Search Engine Optimization (SEO)',
    text: "Search engine optimization (SEO) involves boosting a website's natural ranking on search engines like Google. It's an ongoing journey that takes time for your site to climb the ranks naturally.\nAt WebSpark Innovations, we understand that every business has unique needs. For seamless collaboration or detailed monthly reports, our personalized optimization approach ensures alignment with your business goals and drives results.",
  },
  services: [
    {
      src: seo_circle,
      title: 'Transparency Across the Board',
      description:
        'At the core of our work lies a commitment to transparency and open communication. We believe in giving you firsthand insights into how our efforts are boosting your website traffic, elevating your online ranking, and driving revenue growth. From our initial SEO analysis to the regular monthly reports and updates, transparency remains the cornerstone of every optimization endeavor we undertake for our clients.',
      we_provide: [
        'Off Page SEO',
        'On Page SEO',
        'Local SEO',
        'Organic Content',
        'E-Commerce SEO',
      ],
    },
    {
      src: seo1,
      title: 'Ignite Your Online Presence',
      description:
        "WebSpark Innovations crafts client websites packed with compelling content, strategic keywords, links, and meta tags. These elements are essential for securing prime search engine rankings. We're dedicated to continually fine-tuning client websites to dominate relevant keyword searches, providing them with the upper hand in outshining competitors and capturing more leads.",
    },
  ],
};

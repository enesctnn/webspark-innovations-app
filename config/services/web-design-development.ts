import design_team from '@/assets/images/web-design-development/design_team.png';
import code from '@/assets/images/web-design-development/code.jpg';
import schema from '@/assets/images/web-design-development/schema.png';
import { ServicesItemT } from '@/types/services-item';

export const WEB_DESIGN_DEVELOPMENT_SERVICE: ServicesItemT = {
  main_header: {
    header: 'Website Service Overview',
    text: 'At WebSpark Innovations, we craft visually stunning, high-converting websites designed to captivate and perform flawlessly.\nExceptional website design and user experience stem from a meticulous process. Every project begins with an in-depth discovery phase to establish the vision, goals, and key milestones. We team up with you to craft a detailed project plan, setting clear approaches and timelines. Our creative brief highlights your brand, personality, competitors, and target audience, ensuring a custom fit for your vision.',
  },
  services: [
    {
      src: design_team,
      title: 'Strategic Planning & Content Development',
      description:
        'We recognize the pivotal role your website plays in making a stellar first impression. Our approach blends custom design, SEO-driven content, and advanced graphics to ensure your online presence not only stands out but also resonates with your audience.',
      we_provide: [
        'Sitemap & Wireframe Strategy',
        'Content Development & Copywriting',
        'SEO Audit & Implementation',
        'Photography & Video Services',
      ],
    },
    {
      src: schema,
      title: 'Website Design',
      description:
        "At WebSpark Innovations, we design websites that are not only responsive and intuitive but also beautifully crafted to elevate your brand. Our goal is to create a digital presence you can proudly showcase to customers and partners.\nToday's users crave more than just flashy visuals. They seek websites that effortlessly guide them toward their goals, leaving them not just content, but truly satisfied. Join us in crafting online experiences that not only meet but exceed user expectations, forging connections that last a lifetime.",
      we_provide: [
        'Custom Responsive Design',
        'User Experience (UX) Design',
        'Graphic Design',
        'Image Optimization',
        'Visual Elements and Graphics',
      ],
    },
    {
      src: code,
      title: 'Website Development',
      description:
        "After the creative whirlwind of web design, it's time to ignite the development phase of your website journey. Picture this: you kick back, relax, and anticipate the grand reveal of the first version. Our mission? Crafting a website that's not just a digital brochure but a powerhouse of conversion potential. So buckle up and get ready to witness your vision come to life in pixel-perfect glory!",
      we_provide: [
        'Custom Web Application Development',
        'Front-End Design & Development',
        'Back-End Web Development',
        'E-Commerce Development',
        'Content Management System (CMS) Development',
        'API Development and Integration',
      ],
    },
  ],
};

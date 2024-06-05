import { INDUSTRIES } from '@/config/industries';

export const IndustriesWeServeList = () => (
  <ul className="grid grid-cols-1 items-stretch justify-center gap-x-5 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
    {INDUSTRIES.map(({ description, icon: Icon, title }) => (
      <li
        key={title}
        className="rounded-md border-4 border-regalblue-700 px-4 py-5 text-center transition-all duration-300 hover:scale-110 hover:bg-white"
      >
        <article className="flex flex-col gap-10">
          <Icon className="" size={34} />
          <section className="flex flex-col gap-2">
            <h1 className="text-4xl">{title}</h1>
            <p>{description}</p>
          </section>
        </article>
      </li>
    ))}
  </ul>
);

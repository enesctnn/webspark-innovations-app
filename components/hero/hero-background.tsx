export const HeroBackground = () => (
  <>
    <div
      className="absolute top-0 -z-10 h-full w-full bg-black/25"
      aria-hidden
    />
    <div
      className="absolute top-0 -z-20 h-full w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    />
  </>
);

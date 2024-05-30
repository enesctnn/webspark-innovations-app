export const CustomBanner = () => (
  <>
    <div className="absolute top-0 h-60 w-full bg-ellipse from-black/40 from-20% to-white/20 to-60%" />
    <div
      className="absolute top-0 -z-10 h-60 w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/banner.jpg')" }}
    />
  </>
);

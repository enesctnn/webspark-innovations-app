export const CustomBanner = () => {
  return (
    <>
      <div className="absolute top-0 z-10 h-60 w-full bg-black/30" />
      <div
        className="absolute top-0 h-60 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/banner.jpg')" }}
      />
    </>
  );
};

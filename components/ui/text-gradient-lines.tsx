export const TextGradientLines = () => (
  <div
    className="relative mx-auto h-40 w-full max-w-[40rem] overflow-hidden"
    aria-hidden
  >
    <div
      className="absolute inset-x-[10%] top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm "
      aria-hidden
    />
    <div
      className="absolute inset-x-[10%] top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent "
      aria-hidden
    />
    <div
      className="absolute inset-x-[30%] top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm "
      aria-hidden
    />
    <div
      className="absolute inset-x-[30%] top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent "
      aria-hidden
    />
  </div>
);

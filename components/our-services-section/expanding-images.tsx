import { ExpandingImagesT } from '@/types/expanding-images';

export const ExpandingImages = ({ images, layout }: ExpandingImagesT) => (
  <ul
    className="grid h-full w-full overflow-hidden transition-all duration-500"
    style={{ gridTemplateColumns: layout }}
    role="grid"
  >
    {images.map(image => (
      <li
        key={image.src}
        className="relative z-40 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image.src})` }}
        role="gridcell"
      >
        <div
          className="absolute inset-0 -z-10 bg-black/50 transition-all duration-500"
          aria-hidden
        />
      </li>
    ))}
  </ul>
);

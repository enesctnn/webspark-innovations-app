import { IconType } from 'react-icons';
import { PiCursorClickFill } from 'react-icons/pi';
import { cn } from '../../lib/utils';

export const CursorClicking = ({
  className,
  icon: SpecialIcon = undefined,
}: {
  className?: string;
  icon?: IconType | undefined;
}) => (
  <div
    aria-hidden
    className={cn('text-md dark:drop-shadow-border absolute z-20', className)}
  >
    {!SpecialIcon && <PiCursorClickFill />}
    {SpecialIcon && <SpecialIcon />}
    <div className="relative -z-10" aria-hidden>
      <span
        className="absolute bottom-[9px] right-[10px] h-2 w-2 animate-ping rounded-full bg-regalblue-200 duration-1000"
        aria-hidden
      />
      <span
        className="absolute bottom-[9px] right-[10px] h-2 w-2 rounded-full bg-regalblue-200/80"
        aria-hidden
      />
    </div>
  </div>
);

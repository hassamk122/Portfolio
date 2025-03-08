import React, { Suspense, lazy, memo } from 'react';
import { Image } from 'lucide-react';

const ThumbnailMarquee = lazy(() => import('./ThumbnailMarquee'));
const ThumbnailCollection = lazy(() => import('./ThumbnailCollection'));

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center flex-col pt-15 pb-5 sm:pb-10 px-2 overflow-hidden">
      <h3
        className="flex items-center font-Excalifont justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-5xl
        text-teal-400 dark:drop-shadow-[0px_10px_40px_rgba(0,213,190,0.9)]"
      >
        <Image className="sm:w-12 sm:h-12 h-8 w-8" /> Thumbnails
      </h3>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center justify-center flex-col gap-2 mt-10 sm:mt-10">
          <ThumbnailMarquee speed={40} from={0} to={10} />
          <ThumbnailMarquee speed={20} from={10} to={20} />
        </div>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <div className="flex items-center justify-center flex-col mt-1 sm:mt-5">
          <ThumbnailCollection />
        </div>
      </Suspense>
    </div>
  );
};


export default memo(HeroSection);

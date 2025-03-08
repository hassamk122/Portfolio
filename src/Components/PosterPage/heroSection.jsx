import { memo} from 'react';
import { BookImage } from 'lucide-react';

import PosterCollection from './PosterCollection';

function HeroSection() {
  return (
    <div className="flex items-center justify-center flex-col pt-15 pb-5 sm:pb-10 px-2 overflow-hidden">
      <h3 className="flex items-center font-Excalifont justify-center gap-2 pt-5 sm:pt-10 text-3xl sm:text-5xl text-teal-400 dark:drop-shadow-[0px_10px_40px_rgba(0,213,190,0.9)]">
        <BookImage className="sm:w-12 sm:h-12 h-8 w-8" /> Posters
      </h3>

      <div className="mt-8 text-center p-2">
        <h3 className="font-quicksand font-normal text-sm sm:text-xl text-zinc-100 drop-shadow-[0px_5px_20px_rgba(255,255,255,0.4)]">
          Check Out My Poster Design Collection..
        </h3>
      </div>

      <div className="pt-10">  
          <PosterCollection />
      </div>
    </div>
  );
}

export default memo(HeroSection);

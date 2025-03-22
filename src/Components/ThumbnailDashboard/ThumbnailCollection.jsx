import React, { useMemo, useState } from 'react';
import { ChevronDown,ChevronUp} from 'lucide-react';
import images from './images.jsx'


function ThumbnailCollection() {
 
    const categories = ["All", "Finance", "Football", "IRL", "Other"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [showAll , setShowAll] = useState(false);
    const filteredImages = useMemo(() => {
        if (activeCategory === "All") return images;
        return images.filter((item) => item.category.toLowerCase() === activeCategory.toLowerCase());
      }, [activeCategory, images]);
      const displayedImages = showAll || activeCategory !== "All" ? filteredImages : filteredImages.slice(0, 16);
    return (
        <div className='flex items-center justify-center flex-col flex-wrap p-2'>
          <div className='m-8 text-center p-2'>
           <h3 className='font-quicksand font-bold text-2xl sm:text-4xl  text-teal-400'>Thumbnail Collection</h3>
           <h3 className='font-quicksand font-normal  text-sm sm:text-xl text-zinc-800  dark:text-zinc-100 drop-shadow-[0px_5px_20px_rgba(255,255,255,0.4)]'>Check Out My Collection of Thumbnail Designs.</h3>
           </div>
            <div className='flex items-center dark:text-zinc-100 justify-center gap-2 sm:gap-4 py-1 px-2 border-[1px] border-teal-400 rounded-lg text-xs sm:text-base  font-quicksand font-semibold text-zinc-700 m-4 mb-8'>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
                setActiveCategory(category);
                setShowAll(false); 
              }}
            className={`sm:px-3 px-1 py-0.5 sm:py-1 rounded-sm sm:rounded-lg cursor-pointer ${activeCategory === category ? 'bg-teal-400' : ''}`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center p-4">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
    {displayedImages.map((item, index) => (
      <div key={index} className="mb-4">
        <img 
          src={item.img} 
          alt={`Thumbnail ${index}`} 
          loading="lazy" 
          className="w-full h-auto max-h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-150 ease-in cursor-pointer" 
        />
        
      </div>
    ))}
  </div>

</div>
      <div className='flex items-center justify-center'>
        {activeCategory === "All"?
        (
        <button
        onClick={() => setShowAll((prev) => !prev)}
        className='flex items-center justify-center flex-row gap-2 border-2 border-teal-400 text-teal-400 text-sm 
         hover:bg-teal-400 hover:text-zinc-100 cursor-pointer rounded-full transition-all delay-75 duration-300 ease-in-out px-3 py-1 font-quicksand font-black'
      >
        {showAll ? <>View Less<ChevronUp /></>:<>View More<ChevronDown /></>}
      </button>):
      ("")
    }
      
      </div> 
        </div>
    );
}

export default ThumbnailCollection;

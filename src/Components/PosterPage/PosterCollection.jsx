import React from 'react'
import posters from './posters.jsx'
function PosterCollection() {
  return (
    <div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-6xl">
    {posters.map((item, index) => (
      <div key={index} className="mb-4">
        <img 
          src={item.img} 
          alt={`Thumbnail ${index}`} 
          loading="lazy" 
          className="w-full h-84 object-cover rounded-lg hover:scale-105 transition-transform duration-150 ease-in cursor-pointer" 
        />
      </div>
    ))}
  </div>
    </div>
  )
}

export default PosterCollection
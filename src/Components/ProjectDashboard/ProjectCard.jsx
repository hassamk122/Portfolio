import React, { useState, useEffect, useRef } from "react";
import { FolderGit2,ExternalLink } from "lucide-react";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import {getLikesByDocumentId,incrementLikesByDocumentId,decrementLikesByDocumentId} from '../../../Appwrite/databases.js'

function ProjectCard({ title, bgPic, logo, gitLink,documentId }) {


  const [liked, setLiked] = useState(false);
  const [likes,setLikes] = useState(0);
 const [loading ,setLoading] = useState(true);
    useEffect(()=>{  
      setTimeout(() => {
        const savedLikeState = localStorage.getItem(`liked_${documentId}`);
        if (savedLikeState === 'true') {
          setLiked(true);
        }
          init();
        }, 2000);
    },[]);
      const init =async () =>{
        const likes = await getLikesByDocumentId(documentId);
        setLikes(parseInt(likes, 10)); 
        setLoading(false);
      }

      function toggle() {
        setLiked((prevLiked) => {
          const newLiked = !prevLiked;
          setLikes((prevLikes) => {
            const newLikes = newLiked ? prevLikes + 1 : prevLikes - 1;
            if (newLiked) {
              localStorage.setItem(`liked_${documentId}`, newLiked);
              incrementLikesByDocumentId(documentId, prevLikes);  
            } else {
              decrementLikesByDocumentId(documentId, prevLikes);  
            }
            
            return newLikes;  
          });
      
          return newLiked;
        });
      }
      if (loading) {
        return (
          <div
          className=" flex flex-col p-2
           bg-zinc-100/3 rounded-2xl"
        >
          <div className="flex items-center justify-center w-72 h-48 m-4 bg-gray-200 rounded-xl animate-pulse">
          </div>
          <div className="flex items-center justify-between px-5 mt-3  flex-row  py-2 ">
            <div className="flex items-center justify-center gap-1 ">
              <div className="w-8 h-8  bg-gray-200 rounded-lg animate-pulse"></div>
    
              <div className='w-16 h-3 bg-gray-200 rounded-lg animate-pulse'></div>
            </div>
            <div className="flex items-center justify-center flex-row gap-2">
              <div
  
                className="flex items-center justify-center flex-row gap-1 p-2 bg-gray-200 animate-pulse rounded-lg"
              >
              </div>
              <div className="p-1 bg-gray-200 animate-pulse rounded-lg w-7 h-7"></div>
            </div>
          </div>
        </div>
        )
      }
    
  return (
    <div
      className=" 
    font-quicksand font-bold flex  
    flex-col p-2
      cursor-pointer 
       bg-zinc-100/3 rounded-2xl border border-zinc-200 dark:bg-zinc-900/15 dark:backdrop-blur-md dark:border
        dark:dark:border-zinc-100/5 dark:border-b-zinc-200/30 dark:rounded-xl dark:shadow-xl"
    >
      <div className="flex items-center justify-center w-72 h-48 m-4">
        <img src={bgPic} className="rounded-xl"></img>
      </div>
      <div className="flex items-center justify-between px-5 mt-3  flex-row  py-2 ">
        <div className="flex items-center justify-center gap-1 ">
          <img src={logo} className="w-8 h-8 "></img>

          <h2 className="font-bold text-zinc-100">{title}</h2>
        </div>
        <div className="flex items-center justify-center flex-row gap-2">
          <button
            onClick={toggle}
            className="flex items-center justify-center flex-row gap-1 cursor-pointer p-2 "
          >
            {liked? (
              <>
                <AiFillHeart className="w-6 h-6 text-teal-400  " />
                <h4 className="text-teal-400 text-sm">{likes}</h4>{" "}
              </>
            ) : (
              <>
                <AiOutlineHeart className="w-6 h-6 text-teal-400 hover:drop-shadow-[0px_2px_10px_rgba(0,213,190,0.9)] " />{" "}
                <h4 className="text-teal-400 text-sm">{likes}</h4>{" "}
              </>
            )}
          </button>
          <a href={gitLink} target="_blank" className="p-1 bg-zinc-700 hover:bg-zinc-500 rounded-lg text-zinc-300"><FolderGit2/></a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

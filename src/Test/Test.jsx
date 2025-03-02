import React from 'react'
import { useEffect,useState } from 'react'
import {getLikesByDocumentId,incrementLikesByDocumentId} from '../../Appwrite/databases.js'


const docId = import.meta.env.VITE_DOCUMENT_ID_FIRST;
function Test() {

  const [notes, setNotes] = useState(0);

  useEffect(()=>{
    init();
  },[]);
    const init =async () =>{
      const likes = await getLikesByDocumentId(docId);
      setNotes(parseInt(likes, 10)); 
    }

    function handleIncrement(){
      setNotes(prevNotes => {
        const updatedLikes = prevNotes;
        incrementLikesByDocumentId(docId, updatedLikes); 
        return updatedLikes; 
      });
    }
  return (
    <div className='text-center'>
        
          <div>
            <button onClick={handleIncrement} className='bg-white'>{notes}</button>
          </div>

        </div>
  )
}

export default Test;
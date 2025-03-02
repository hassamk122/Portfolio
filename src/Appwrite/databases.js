import { databases } from './config.js';

const dbId = import.meta.env.VITE_DATABASE_ID;
const collId = import.meta.env.VITE_COLLECTION_PROJECT;


export async function getLikesByDocumentId(documentId) {
  try {
    console.log(`Fetching likes for document with ID: ${documentId}`);
    const result = await databases.getDocument(dbId, collId, documentId);
    console.log('Fetched Document:', result);
    return result.like_count;
  } catch (error) {
    console.error('Error fetching likes:', error);
    return 0; 
  }
}


export async function incrementLikesByDocumentId(documentId, currentLikes) {
  try {
    console.log(`Incrementing likes for document with ID: ${documentId}`);
    const updatedLikes = parseInt(currentLikes,10);
    if (isNaN(updatedLikes)) {
        throw new Error('Invalid like count');
      }
    await databases.updateDocument(dbId, collId, documentId, {
      like_count: updatedLikes + 1,  
    });
    console.log('Likes incremented successfully.');
  } catch (error) {
    console.error('Error updating likes:', error);
  }
}
export async function decrementLikesByDocumentId(documentId, currentLikes) {
    try {
      console.log(`Incrementing likes for document with ID: ${documentId}`);
      const updatedLikes = parseInt(currentLikes,10);
      if (isNaN(updatedLikes)) {
          throw new Error('Invalid like count');
        }
      await databases.updateDocument(dbId, collId, documentId, {
        like_count: updatedLikes - 1,  
      });
      console.log('Likes incremented successfully.');
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  }

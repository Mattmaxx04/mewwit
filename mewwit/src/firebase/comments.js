import { app } from './index.js'
import { onSnapshot, getFirestore, collection, query, getDocs, addDoc } from 'firebase/firestore'
import {comments} from '../store/comments.js'

const db = getFirestore(app)
// Add a new comment in collection "comments"
const addComment =  (comment) => {
    addDoc(collection(db, "comments"), comment)
}

const commentRef = query(collection(db, "comments"));

/*obtengo todos los comments*/
const getComments = () =>{
onSnapshot(commentRef, (querySnapshot) => {
  comments.value = [];
  querySnapshot.forEach((doc) => {
    
    const comment = {
      comment_id: doc.id,
      comment_date:doc.data().comment_date.toDate(),
      comment_postid:doc.data().comment_postid,
      comment_body: doc.data().comment_body,
      comment_username: doc.data().comment_username,
      comment_uphoto:doc.data().comment_uphoto,
    };
    comments.value.push(comment);
    comments.value.sort((a,b)=>b.date - a.date)
  });
});
}



/*var date = new Date();
result = date.toTimeString();
*/
export { addComment, getComments }



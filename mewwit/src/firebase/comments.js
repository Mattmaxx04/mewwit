import { app } from './index.js'
import { getFirestore, collection, query, getDocs, addDoc } from 'firebase/firestore'
import {comments} from '../store/comments.js'

const db = getFirestore(app)
// Add a new comment in collection "comments"
const addComment =  (comment) => {
    addDoc(collection(db, "comments"), comment)
}

const q = query(collection(db, "comments"));
const traerComments = async () =>{
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
}
/*var date = new Date();
result = date.toTimeString();
*/
export {addComment, traerComments }



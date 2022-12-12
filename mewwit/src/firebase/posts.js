import { app } from "./index.js";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  getDoc,
  addDoc,
  where,
} from "firebase/firestore";
import { posts } from "../store/posts";


/*conexion a la base de firebase*/
const db = getFirestore(app);

/*posts.value = traerPosts()*/
const postRef = collection(db, "posts");

/*obtengo todos los posts*/
onSnapshot(postRef, (querySnapshot) => {
  posts.value = [];
  querySnapshot.forEach((doc) => {
    const post = {
      id: doc.id,
      title: doc.data().post_title,
      img: doc.data().post_img,
      body: doc.data().post_text,
      user: doc.data().user_name,
      pic:doc.data().user_pic
    };
    posts.value.push(post);
  });
});
/*agrega posts*/
const addPost = (post) => {
  addDoc(postRef, post);
};

const getPostWithId=(postId)=>{
  const q = query(postRef, where("postId", "==", postId));  
  let post = [] 
  getDoc(q).then((querySnapshot)=>{
    querySnapshot.forEach((doc)=>{
      let newPost = {
        id: doc.id,
      title: doc.data().post_title,
      img: doc.data().post_img,
      body: doc.data().post_text,
      user: doc.data().user_name,
      userpic:doc.data().user_pic
      }
      console.log(newPost);
      post.push(newPost)
    })
    return post
  })
}

/*
const q = query(collection(db, "posts"));
const traerPosts = async () =>{
const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  console.log(doc.id, " => ", doc.data());
});
}*/
/*var date = new Date();
result = date.toTimeString();
*/
// Add a new document in collection "cities"

export {getPostWithId, addPost, posts };
